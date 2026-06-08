"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";
import Image from "next/image";

const heroImages = [
  { src: "/Lyra-Images/Images-MainSection/IMG_2933.jpg", alt: "Villa exterior with mountain views" },
  { src: "/Lyra-Images/Images-MainSection/IMG_5819.jpg", alt: "Cozy interior living space" },
  { src: "/Lyra-Images/Images-MainSection/IMG_7139.JPG", alt: "Villa garden and tea plantation" },
  { src: "/Lyra-Images/Images-MainSection/IMG_7191.JPG", alt: "Dining area with panoramic views" },
];

const stats = [
  { value: "3", label: "Rooms" },
  { value: "12", label: "Guest Capacity" },
  { value: "5★", label: "Guest Rating" },
  { value: "5+", label: "Years Experience" },
];

export default function AboutSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % heroImages.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-screen overflow-hidden">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/15 to-black/55" />

        {/* Prev / Next */}
        <button
          onClick={() => setCurrent((p) => (p - 1 + heroImages.length) % heroImages.length)}
          className="absolute left-5 top-1/2 -translate-y-1/2 z-10 p-2 text-white/50 hover:text-white transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrent((p) => (p + 1) % heroImages.length)}
          className="absolute right-5 top-1/2 -translate-y-1/2 z-10 p-2 text-white/50 hover:text-white transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Hero text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6">
          <p className="text-white/60 text-[10px] tracking-[0.4em] uppercase font-inter mb-7">
            Nuwara Eliya · Sri Lanka
          </p>
          <h1 className="font-playfair text-white text-7xl md:text-9xl lg:text-[10rem] font-normal leading-none">
            Lyra
          </h1>
          <p className="text-white/75 font-inter text-base md:text-lg mt-5 font-light tracking-widest">
            Your Luxury Mountain Retreat
          </p>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                i === current ? "bg-white w-8" : "bg-white/35 w-3"
              }`}
            />
          ))}
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ArrowDown className="w-4 h-4 text-white/40" />
        </div>
      </section>

      {/* ── Statement ── */}
      <section className="py-28 lg:py-40 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-[#a11d2b] text-[10px] tracking-[0.35em] uppercase font-inter mb-10">
            About Lyra
          </p>
          <p className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#0f0e0c] leading-[1.15] max-w-5xl">
            Lyra exists to make every stay feel{" "}
            <span className="text-[#a8a49e]">
              intentional — warmth, tranquility, and modern comfort
            </span>{" "}
            in the heart of Sri Lanka's hill country.
          </p>
        </div>
      </section>

      {/* ── About content ── */}
      <section className="pb-28 lg:pb-40 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Text + stats */}
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl text-[#0f0e0c] mb-8">
                A Haven of Tranquility
              </h2>
              <p className="font-inter text-[#6b6861] leading-relaxed text-[15px] mb-5">
                Nestled in Sri Lanka's hill country, Lyra Nuwara Eliya offers an
                unparalleled escape into nature's embrace. Our luxury villa combines
                modern comfort with traditional charm, providing breathtaking views of
                rolling tea plantations and misty mountains.
              </p>
              <p className="font-inter text-[#6b6861] leading-relaxed text-[15px] mb-12">
                Built with sustainable materials and designed to harmonize with the
                landscape, our villa features three uniquely designed rooms, each
                offering its own character and stunning vistas — your perfect base to
                explore the wonders of Nuwara Eliya.
              </p>
              <a
                href="#rooms"
                className="inline-flex items-center gap-2 text-sm font-inter text-[#a11d2b] border-b border-[#a11d2b] pb-0.5 hover:opacity-60 transition-opacity tracking-wide"
              >
                Explore Our Rooms →
              </a>

              {/* Stats */}
              <div className="mt-16 pt-12 border-t border-[#e8e6e1] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-playfair text-4xl text-[#0f0e0c] mb-2">{s.value}</p>
                    <p className="font-inter text-[10px] text-[#a8a49e] tracking-[0.25em] uppercase">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image mosaic */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/Lyra-Images/Images-AboutUs/IMG_5473.JPG"
                  alt="Villa interior"
                  fill
                  className="object-cover hover:scale-[1.04] transition-transform duration-700"
                />
              </div>
              <div className="space-y-3 pt-14">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/Lyra-Images/Images-AboutUs/IMG_5714.jpg"
                    alt="Tea plantation"
                    fill
                    className="object-cover hover:scale-[1.04] transition-transform duration-700"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/Lyra-Images/Images-AboutUs/IMG_6961.JPG"
                    alt="Mountain views"
                    fill
                    className="object-cover hover:scale-[1.04] transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
