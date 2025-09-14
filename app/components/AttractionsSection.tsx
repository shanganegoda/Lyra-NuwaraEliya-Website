"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const attractions = [
  {
    name: "Horton Plains National Park",
    image: "/lyra-images/images-nearbyattractions/1.jpg?height=400&width=600",
    description: "Famous for World's End cliff and Baker's Falls",
  },
  {
    name: "Pedro Tea Estate",
    image: "/lyra-images/images-nearbyattractions/2.jpg?height=400&width=600",
    description: "Historic tea plantation with guided tours",
  },
  {
    name: "Single Tree Hill",
    image: "/lyra-images/images-nearbyattractions/3.png?height=400&width=600",
    description: "Panoramic views of the entire Nuwara Eliya region",
  },
  {
    name: "Lover's Leap Waterfall",
    image: "/lyra-images/images-nearbyattractions/4.webp?height=400&width=600",
    description: "Romantic waterfall with hiking trails",
  },
  {
    name: "Ambewela Farm",
    image: "/lyra-images/images-nearbyattractions/5.webp?height=400&width=600",
    description: "New Zealand-style dairy farm experience",
  },
  {
    name: "Moon Plains",
    image: "/lyra-images/images-nearbyattractions/6.jpg?height=400&width=600",
    description: "Vast grassland plateau perfect for photography",
  },
];

export default function AttractionsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 3;

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev + itemsPerSlide >= attractions.length ? 0 : prev + itemsPerSlide
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0
        ? Math.max(0, attractions.length - itemsPerSlide)
        : prev - itemsPerSlide
    );
  };

  const visibleAttractions = attractions.slice(
    currentSlide,
    currentSlide + itemsPerSlide
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-4 font-playfair">
            Nearby Attractions
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-secondary max-w-3xl mx-auto font-inter">
            Discover the natural wonders and cultural treasures that make Nuwara
            Eliya one of Sri Lanka's most enchanting destinations. From misty
            mountains to cascading waterfalls, adventure awaits at every turn.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleAttractions.map((attraction, index) => (
                <div
                  key={currentSlide + index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={attraction.image || "/placeholder.svg"}
                      alt={attraction.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2 font-playfair">
                        {attraction.name}
                      </h3>
                      <p className="text-white/90 text-sm font-inter">
                        {attraction.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg hover:shadow-xl p-3 rounded-full transition-all duration-200 z-10"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-6 h-6 text-dark" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg hover:shadow-xl p-3 rounded-full transition-all duration-200 z-10"
            disabled={currentSlide + itemsPerSlide >= attractions.length}
          >
            <ChevronRight className="w-6 h-6 text-dark" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({
              length: Math.ceil(attractions.length / itemsPerSlide),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index * itemsPerSlide)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  Math.floor(currentSlide / itemsPerSlide) === index
                    ? "bg-primary"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        {/* <div className="mt-16 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-dark mb-4 font-playfair">Curated Experiences Await</h3>
            <p className="text-secondary max-w-3xl mx-auto leading-relaxed font-inter">
              Our team can help arrange guided tours, transportation, and special experiences to these incredible
              attractions. From sunrise hikes to tea tasting sessions, we'll help you create unforgettable memories
              during your stay at Serenity Villa.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
