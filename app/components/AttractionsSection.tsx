"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const attractions = [
  {
    name: "Horton Plains National Park",
    image: "/Lyra-Images/Images-NearbyAttractions/1.jpg",
    description: "Famous for World's End cliff and Baker's Falls",
  },
  {
    name: "Pedro Tea Estate",
    image: "/Lyra-Images/Images-NearbyAttractions/2.jpg",
    description: "Historic tea plantation with guided tours",
  },
  {
    name: "Single Tree Hill",
    image: "/Lyra-Images/Images-NearbyAttractions/3.png",
    description: "Panoramic views of the entire Nuwara Eliya region",
  },
  {
    name: "Lover's Leap Waterfall",
    image: "/Lyra-Images/Images-NearbyAttractions/4.webp",
    description: "Romantic waterfall with scenic hiking trails",
  },
  {
    name: "Ambewela Farm",
    image: "/Lyra-Images/Images-NearbyAttractions/5.webp",
    description: "New Zealand-style dairy farm experience",
  },
  {
    name: "Moon Plains",
    image: "/Lyra-Images/Images-NearbyAttractions/6.jpg",
    description: "Vast grassland plateau perfect for photography",
  },
];

export default function AttractionsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p - 1 + attractions.length) % attractions.length);
  const next = () => setActive((p) => (p + 1) % attractions.length);

  const secondary1 = (active + 1) % attractions.length;
  const secondary2 = (active + 2) % attractions.length;

  return (
    <section id="attractions" className="py-28 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <p className="text-[#a11d2b] text-[10px] tracking-[0.35em] uppercase font-inter mb-4">
              Explore
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#0f0e0c]">Nearby Attractions</h2>
          </div>
          {/* Nav arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 border border-[#e8e6e1] flex items-center justify-center hover:border-[#0f0e0c] transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4 text-[#6b6861]" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 border border-[#e8e6e1] flex items-center justify-center hover:border-[#0f0e0c] transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4 text-[#6b6861]" />
            </button>
          </div>
        </div>

        {/* Featured + secondary grid */}
        <div className="grid lg:grid-cols-2 gap-px bg-[#e8e6e1] mb-px">
          {/* Main featured */}
          <div
            className="relative h-[480px] bg-[#faf9f6] overflow-hidden group cursor-pointer"
            onClick={next}
          >
            <Image
              src={attractions[active].image}
              alt={attractions[active].name}
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="font-inter text-white/50 text-[10px] tracking-[0.25em] uppercase mb-3">
                {String(active + 1).padStart(2, "0")} / {String(attractions.length).padStart(2, "0")}
              </p>
              <h3 className="font-playfair text-3xl text-white mb-2">
                {attractions[active].name}
              </h3>
              <p className="font-inter text-white/75 text-sm">{attractions[active].description}</p>
            </div>
          </div>

          {/* Two secondary */}
          <div className="grid grid-rows-2 gap-px bg-[#e8e6e1]">
            {[secondary1, secondary2].map((idx) => (
              <div
                key={idx}
                className="relative h-[238px] bg-[#faf9f6] overflow-hidden group cursor-pointer"
                onClick={() => setActive(idx)}
              >
                <Image
                  src={attractions[idx].image}
                  alt={attractions[idx].name}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-playfair text-xl text-white">{attractions[idx].name}</h3>
                  <p className="font-inter text-white/65 text-xs mt-1">{attractions[idx].description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-px bg-[#e8e6e1]">
          {attractions.map((a, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative h-20 overflow-hidden transition-opacity duration-300 ${
                i === active ? "opacity-100" : "opacity-45 hover:opacity-75"
              }`}
              aria-label={`View ${a.name}`}
            >
              <Image src={a.image} alt={a.name} fill className="object-cover" />
              {i === active && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#a11d2b]" />
              )}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
