"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryCategories = [
  { id: "all", name: "All Photos", count: 53 },
  { id: "rooms", name: "Rooms", count: 21 },
  { id: "exterior", name: "Villa Exterior", count: 10 },
  { id: "interior", name: "Villa Interior", count: 10 },
  // { id: "gardens", name: "Gardens", count: 3 },
  // { id: "attractions", name: "Local Attractions", count: 4 },
  { id: "nature", name: "Nature & Views", count: 12 },
];
const galleryImages = [
  // Exterior (10)
  {
    id: 1,
    src: "/lyra-images/Gallery-page/Exterior/1.jpg",
    alt: "Exterior image 1",
    category: "exterior",
    title: "Exterior 1",
  },
  {
    id: 2,
    src: "/lyra-images/Gallery-page/Exterior/2.jpg",
    alt: "Exterior image 2",
    category: "exterior",
    title: "Exterior 2",
  },
  {
    id: 3,
    src: "/lyra-images/Gallery-page/Exterior/3.jpg",
    alt: "Exterior image 3",
    category: "exterior",
    title: "Exterior 3",
  },
  {
    id: 4,
    src: "/lyra-images/Gallery-page/Exterior/4.jpg",
    alt: "Exterior image 4",
    category: "exterior",
    title: "Exterior 4",
  },
  {
    id: 5,
    src: "/lyra-images/Gallery-page/Exterior/5.jpg",
    alt: "Exterior image 5",
    category: "exterior",
    title: "Exterior 5",
  },
  {
    id: 6,
    src: "/lyra-images/Gallery-page/Exterior/6.jpg",
    alt: "Exterior image 6",
    category: "exterior",
    title: "Exterior 6",
  },
  {
    id: 7,
    src: "/lyra-images/Gallery-page/Exterior/7.jpg",
    alt: "Exterior image 7",
    category: "exterior",
    title: "Exterior 7",
  },
  {
    id: 8,
    src: "/lyra-images/Gallery-page/Exterior/8.jpg",
    alt: "Exterior image 8",
    category: "exterior",
    title: "Exterior 8",
  },
  {
    id: 9,
    src: "/lyra-images/Gallery-page/Exterior/9.jpg",
    alt: "Exterior image 9",
    category: "exterior",
    title: "Exterior 9",
  },
  {
    id: 10,
    src: "/lyra-images/Gallery-page/Exterior/10.jpg",
    alt: "Exterior image 10",
    category: "exterior",
    title: "Exterior 10",
  },

  // Interior (10)
  {
    id: 11,
    src: "/lyra-images/Gallery-page/Interior/1.jpg",
    alt: "Interior image 1",
    category: "interior",
    title: "Interior 1",
  },
  {
    id: 12,
    src: "/lyra-images/Gallery-page/Interior/2.jpg",
    alt: "Interior image 2",
    category: "interior",
    title: "Interior 2",
  },
  {
    id: 13,
    src: "/lyra-images/Gallery-page/Interior/3.jpg",
    alt: "Interior image 3",
    category: "interior",
    title: "Interior 3",
  },
  {
    id: 14,
    src: "/lyra-images/Gallery-page/Interior/4.jpg",
    alt: "Interior image 4",
    category: "interior",
    title: "Interior 4",
  },
  {
    id: 15,
    src: "/lyra-images/Gallery-page/Interior/5.jpg",
    alt: "Interior image 5",
    category: "interior",
    title: "Interior 5",
  },
  {
    id: 16,
    src: "/lyra-images/Gallery-page/Interior/6.jpg",
    alt: "Interior image 6",
    category: "interior",
    title: "Interior 6",
  },
  {
    id: 17,
    src: "/lyra-images/Gallery-page/Interior/7.jpg",
    alt: "Interior image 7",
    category: "interior",
    title: "Interior 7",
  },
  {
    id: 18,
    src: "/lyra-images/Gallery-page/Interior/8.jpg",
    alt: "Interior image 8",
    category: "interior",
    title: "Interior 8",
  },
  {
    id: 19,
    src: "/lyra-images/Gallery-page/Interior/9.jpg",
    alt: "Interior image 9",
    category: "interior",
    title: "Interior 9",
  },
  {
    id: 20,
    src: "/lyra-images/Gallery-page/Interior/10.jpg",
    alt: "Interior image 10",
    category: "interior",
    title: "Interior 10",
  },

  // Nature and View (12)
  {
    id: 21,
    src: "/lyra-images/Gallery-page/NatureAndView/1.jpg",
    alt: "Nature and view image 1",
    category: "nature",
    title: "Nature 1",
  },
  {
    id: 22,
    src: "/lyra-images/Gallery-page/NatureAndView/2.jpg",
    alt: "Nature and view image 2",
    category: "nature",
    title: "Nature 2",
  },
  {
    id: 23,
    src: "/lyra-images/Gallery-page/NatureAndView/3.jpg",
    alt: "Nature and view image 3",
    category: "nature",
    title: "Nature 3",
  },
  {
    id: 24,
    src: "/lyra-images/Gallery-page/NatureAndView/4.jpg",
    alt: "Nature and view image 4",
    category: "nature",
    title: "Nature 4",
  },
  {
    id: 25,
    src: "/lyra-images/Gallery-page/NatureAndView/5.jpg",
    alt: "Nature and view image 5",
    category: "nature",
    title: "Nature 5",
  },
  {
    id: 26,
    src: "/lyra-images/Gallery-page/NatureAndView/6.jpg",
    alt: "Nature and view image 6",
    category: "nature",
    title: "Nature 6",
  },
  {
    id: 27,
    src: "/lyra-images/Gallery-page/NatureAndView/7.jpg",
    alt: "Nature and view image 7",
    category: "nature",
    title: "Nature 7",
  },
  {
    id: 28,
    src: "/lyra-images/Gallery-page/NatureAndView/8.jpg",
    alt: "Nature and view image 8",
    category: "nature",
    title: "Nature 8",
  },
  {
    id: 29,
    src: "/lyra-images/Gallery-page/NatureAndView/9.jpg",
    alt: "Nature and view image 9",
    category: "nature",
    title: "Nature 9",
  },
  {
    id: 30,
    src: "/lyra-images/Gallery-page/NatureAndView/10.jpg",
    alt: "Nature and view image 10",
    category: "nature",
    title: "Nature 10",
  },
  {
    id: 31,
    src: "/lyra-images/Gallery-page/NatureAndView/11.jpg",
    alt: "Nature and view image 11",
    category: "nature",
    title: "Nature 11",
  },
  {
    id: 32,
    src: "/lyra-images/Gallery-page/NatureAndView/12.jpg",
    alt: "Nature and view image 12",
    category: "nature",
    title: "Nature 12",
  },

  // Rooms (21)
  {
    id: 33,
    src: "/lyra-images/Gallery-page/Rooms/1.jpg",
    alt: "Room image 1",
    category: "rooms",
    title: "Room 1",
  },
  {
    id: 34,
    src: "/lyra-images/Gallery-page/Rooms/2.jpg",
    alt: "Room image 2",
    category: "rooms",
    title: "Room 2",
  },
  {
    id: 35,
    src: "/lyra-images/Gallery-page/Rooms/3.jpg",
    alt: "Room image 3",
    category: "rooms",
    title: "Room 3",
  },
  {
    id: 36,
    src: "/lyra-images/Gallery-page/Rooms/4.jpg",
    alt: "Room image 4",
    category: "rooms",
    title: "Room 4",
  },
  {
    id: 37,
    src: "/lyra-images/Gallery-page/Rooms/5.jpg",
    alt: "Room image 5",
    category: "rooms",
    title: "Room 5",
  },
  {
    id: 38,
    src: "/lyra-images/Gallery-page/Rooms/6.jpg",
    alt: "Room image 6",
    category: "rooms",
    title: "Room 6",
  },
  {
    id: 39,
    src: "/lyra-images/Gallery-page/Rooms/7.jpg",
    alt: "Room image 7",
    category: "rooms",
    title: "Room 7",
  },
  {
    id: 40,
    src: "/lyra-images/Gallery-page/Rooms/8.jpg",
    alt: "Room image 8",
    category: "rooms",
    title: "Room 8",
  },
  {
    id: 41,
    src: "/lyra-images/Gallery-page/Rooms/9.jpg",
    alt: "Room image 9",
    category: "rooms",
    title: "Room 9",
  },
  {
    id: 42,
    src: "/lyra-images/Gallery-page/Rooms/10.jpg",
    alt: "Room image 10",
    category: "rooms",
    title: "Room 10",
  },
  {
    id: 43,
    src: "/lyra-images/Gallery-page/Rooms/11.jpg",
    alt: "Room image 11",
    category: "rooms",
    title: "Room 11",
  },
  {
    id: 44,
    src: "/lyra-images/Gallery-page/Rooms/12.jpg",
    alt: "Room image 12",
    category: "rooms",
    title: "Room 12",
  },
  {
    id: 45,
    src: "/lyra-images/Gallery-page/Rooms/13.jpg",
    alt: "Room image 13",
    category: "rooms",
    title: "Room 13",
  },
  {
    id: 46,
    src: "/lyra-images/Gallery-page/Rooms/14.jpg",
    alt: "Room image 14",
    category: "rooms",
    title: "Room 14",
  },
  {
    id: 47,
    src: "/lyra-images/Gallery-page/Rooms/15.jpg",
    alt: "Room image 15",
    category: "rooms",
    title: "Room 15",
  },
  {
    id: 48,
    src: "/lyra-images/Gallery-page/Rooms/16.jpg",
    alt: "Room image 16",
    category: "rooms",
    title: "Room 16",
  },
  {
    id: 49,
    src: "/lyra-images/Gallery-page/Rooms/17.jpg",
    alt: "Room image 17",
    category: "rooms",
    title: "Room 17",
  },
  {
    id: 50,
    src: "/lyra-images/Gallery-page/Rooms/18.jpg",
    alt: "Room image 18",
    category: "rooms",
    title: "Room 18",
  },
  {
    id: 51,
    src: "/lyra-images/Gallery-page/Rooms/19.jpg",
    alt: "Room image 19",
    category: "rooms",
    title: "Room 19",
  },
  {
    id: 52,
    src: "/lyra-images/Gallery-page/Rooms/20.jpg",
    alt: "Room image 20",
    category: "rooms",
    title: "Room 20",
  },
  {
    id: 53,
    src: "/lyra-images/Gallery-page/Rooms/21.jpg",
    alt: "Room image 21",
    category: "rooms",
    title: "Room 21",
  },
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  const openLightbox = (imageId: number) => {
    setLightboxImage(imageId);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (lightboxImage === null) return;

    const currentIndex = filteredImages.findIndex(
      (img) => img.id === lightboxImage
    );
    let newIndex;

    if (direction === "prev") {
      newIndex =
        currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex =
        currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }

    setLightboxImage(filteredImages[newIndex].id);
  };

  const currentLightboxImage = lightboxImage
    ? filteredImages.find((img) => img.id === lightboxImage)
    : null;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-dark mb-4 font-playfair">
            Photo Gallery
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-secondary max-w-3xl mx-auto font-inter">
            Discover the beauty of Serenity Villa and the enchanting landscapes
            of Nuwara Eliya through our curated collection of photographs.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 font-playfair ${
                activeCategory === category.id
                  ? "bg-primary text-white shadow-lg"
                  : "bg-gray-100 text-secondary hover:bg-gray-200"
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">
                ({category.count})
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(image.id)}
            >
              <div className="aspect-square relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold text-lg font-playfair">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mt-12">
          <p className="text-secondary font-inter">
            Showing {filteredImages.length} of {galleryImages.length} photos
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && currentLightboxImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateLightbox("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => navigateLightbox("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <div className="relative">
              <Image
                src={currentLightboxImage.src || "/placeholder.svg"}
                alt={currentLightboxImage.alt}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-semibold mb-2 font-playfair">
                  {currentLightboxImage.title}
                </h3>
                <p className="text-white/80 text-sm font-inter">
                  {currentLightboxImage.alt}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
