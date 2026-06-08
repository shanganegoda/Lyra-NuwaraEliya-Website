"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { id: "all",      label: "All",            count: 53 },
  { id: "rooms",    label: "Rooms",          count: 21 },
  { id: "exterior", label: "Exterior",       count: 10 },
  { id: "interior", label: "Interior",       count: 10 },
  { id: "nature",   label: "Nature & Views", count: 12 },
];

// Build image list using correct case-sensitive paths
const exteriorExts = ["jpg","jpg","JPG","JPG","JPG","JPG","JPG","JPG","JPG","JPG"];
const natureExts   = ["jpg","JPG","JPG","JPG","JPG","jpg","JPG","JPG","JPG","jpg","jpg","jpg"];

const images = [
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    src: `/Lyra-Images/Gallery-Page/Exterior/${i + 1}.${exteriorExts[i]}`,
    category: "exterior",
    title: `Exterior ${i + 1}`,
  })),
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 11,
    src: `/Lyra-Images/Gallery-Page/Interior/${i + 1}.JPG`,
    category: "interior",
    title: `Interior ${i + 1}`,
  })),
  ...Array.from({ length: 12 }, (_, i) => ({
    id: i + 21,
    src: `/Lyra-Images/Gallery-Page/NatureAndView/${i + 1}.${natureExts[i]}`,
    category: "nature",
    title: `Nature & Views ${i + 1}`,
  })),
  ...Array.from({ length: 21 }, (_, i) => ({
    id: i + 33,
    src: `/Lyra-Images/Gallery-Page/Rooms/${i + 1}.JPG`,
    category: "rooms",
    title: `Room ${i + 1}`,
  })),
];


export default function GallerySection() {
  const [active,   setActive]   = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "all" ? images : images.filter((i) => i.category === active);
  const lbIdx    = lightbox !== null ? filtered.findIndex((i) => i.id === lightbox) : -1;

  const closeLb = () => setLightbox(null);
  const prevLb  = useCallback(() => {
    if (lbIdx > 0) setLightbox(filtered[lbIdx - 1].id);
  }, [lbIdx, filtered]);
  const nextLb  = useCallback(() => {
    if (lbIdx < filtered.length - 1) setLightbox(filtered[lbIdx + 1].id);
  }, [lbIdx, filtered]);

  useEffect(() => {
    if (lightbox === null) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape")     closeLb();
      if (e.key === "ArrowLeft")  prevLb();
      if (e.key === "ArrowRight") nextLb();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [lightbox, prevLb, nextLb]);

  return (
    <>
      {/* Page header */}
      <section className="pt-36 pb-14 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-[#a11d2b] text-[10px] tracking-[0.35em] uppercase font-inter mb-5">
            Visual Tour
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl text-[#0f0e0c] mb-6">
            Photo Gallery
          </h1>
          <p className="font-inter text-[#6b6861] text-base max-w-xl leading-relaxed">
            Discover the beauty of Lyra and the enchanting landscapes of Nuwara
            Eliya through our curated collection of photographs.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <div className="bg-[#faf9f6] border-b border-[#e8e6e1] sticky top-[77px] z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-8 overflow-x-auto py-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`py-3 text-sm font-inter whitespace-nowrap border-b-2 transition-all duration-200 ${
                  active === cat.id
                    ? "border-[#a11d2b] text-[#0f0e0c]"
                    : "border-transparent text-[#a8a49e] hover:text-[#6b6861]"
                }`}
              >
                {cat.label}
                <span className="ml-1.5 text-[10px] opacity-50">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Photo grid */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5">
            {filtered.map((img, i) => {
              const isWide = i % 7 === 3;
              return (
                <div
                  key={img.id}
                  className={`overflow-hidden cursor-pointer group ${isWide ? "col-span-2" : "col-span-1"}`}
                  onClick={() => setLightbox(img.id)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.title}
                    className={`w-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ${
                      isWide ? "aspect-[2/1]" : "aspect-square"
                    }`}
                  />
                </div>
              );
            })}
          </div>
          <p className="font-inter text-xs text-[#a8a49e] text-center mt-8 tracking-wide">
            Showing {filtered.length} of {images.length} photographs
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && lbIdx >= 0 && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLb}
        >
          <button onClick={closeLb} className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors z-10">
            <X className="w-6 h-6" />
          </button>

          <p className="absolute top-5 left-5 font-inter text-xs text-white/35 tracking-widest">
            {String(lbIdx + 1).padStart(2,"0")} / {String(filtered.length).padStart(2,"0")}
          </p>

          <button
            onClick={(e) => { e.stopPropagation(); prevLb(); }}
            disabled={lbIdx === 0}
            className="absolute left-4 text-white/40 hover:text-white transition-colors disabled:opacity-20"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="max-w-5xl max-h-[88vh] px-16" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={filtered[lbIdx].src}
              alt={filtered[lbIdx].title}
              className="max-h-[88vh] max-w-full w-auto object-contain mx-auto"
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); nextLb(); }}
            disabled={lbIdx === filtered.length - 1}
            className="absolute right-4 text-white/40 hover:text-white transition-colors disabled:opacity-20"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 font-inter text-xs text-white/30 tracking-widest">
            {filtered[lbIdx].title}
          </p>
        </div>
      )}
    </>
  );
}
