"use client";

import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Award,
  Users,
  MapPin,
  Star,
} from "lucide-react";
import Image from "next/image";

const villaImages = [
  {
    src: "/lyra-images/images-mainsection/img_2933.jpg?height=600&width=800",
    alt: "Villa exterior with mountain views",
  },
  {
    src: "/lyra-images/images-mainsection/img_5819.jpg?height=600&width=800",
    alt: "Cozy living room with fireplace",
  },
  {
    src: "/lyra-images/images-mainsection/img_7139.jpg?height=600&width=800",
    alt: "Villa garden with tea plantation views",
  },
  {
    src: "/lyra-images/images-mainsection/img_7191.jpg?height=600&width=800",
    alt: "Dining area with panoramic windows",
  },
];

const highlights = [
  {
    icon: Award,
    title: "Luxury Experience",
    description: "Premium amenities and personalized service",
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "Perfect for couples, families, and groups",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Minutes from top attractions and experiences",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    description: "Consistently rated excellent by our guests",
  },
];

export default function AboutSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % villaImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % villaImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + villaImages.length) % villaImages.length
    );
  };

  return (
    <section className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        {/* Background Image Carousel */}
        <div className="absolute inset-0">
          <Image
            src={villaImages[currentImage].src || "/placeholder.svg"}
            alt={villaImages[currentImage].alt}
            fill
            className="object-cover transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-200 z-10"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-200 z-10"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
          {villaImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentImage ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">
            Lyra Nuwara Eliya
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-inter opacity-90">
            Your Luxury Mountain Retreat in the Hill Country
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-inter">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              Eco-Friendly
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              Mountain Views
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              Tea Plantation Access
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              Luxury Amenities
            </span>
          </div>
        </div>
      </div>

      {/* About Content Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4 font-playfair">
                About Us
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-xl text-secondary max-w-3xl mx-auto font-inter">
                Discover the perfect blend of luxury, comfort, and natural
                beauty in the heart of Sri Lanka's hill country.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Text Content */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-dark font-playfair">
                  A Haven of Tranquility
                </h3>

                <p className="text-lg text-secondary leading-relaxed font-inter">
                  Nestled in the heart of Sri Lanka's hill country, Lyra Nuwara
                  Eliya offers an unparalleled escape into nature's embrace. Our
                  luxury villa combines modern comfort with traditional charm,
                  providing breathtaking views of rolling tea plantations and
                  misty mountains.
                </p>

                <p className="text-lg text-secondary leading-relaxed font-inter">
                  Built with sustainable materials and designed to harmonize
                  with the natural landscape, our villa features three uniquely
                  designed rooms, each offering its own character and stunning
                  vistas. Whether you're seeking adventure or tranquility, Lyra
                  Nuwara Eliya serves as your perfect base to explore the
                  wonders of Nuwara Eliya.
                </p>

                <div className="pt-4">
                  <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-200 font-inter font-medium">
                    Explore Our Rooms
                  </button>
                </div>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/lyra-images/images-aboutus/img_5473.jpg?height=300&width=400"
                      alt="Villa interior"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/lyra-images/images-aboutus/img_5714.jpg?height=200&width=400"
                      alt="Tea plantation view"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/lyra-images/images-aboutus/img_6961.jpg?height=200&width=400"
                      alt="Mountain views"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/lyra-images/images-aboutus/img_7193.jpg?height=300&width=400"
                      alt="Villa garden"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold text-dark mb-2 font-playfair">
                      {highlight.title}
                    </h4>
                    <p className="text-secondary font-inter">
                      {highlight.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2 font-playfair">3</div>
              <div className="text-white/80 font-inter">Luxury Rooms</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 font-playfair">12</div>
              <div className="text-white/80 font-inter">Guests Capacity</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 font-playfair">5+</div>
              <div className="text-white/80 font-inter">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 font-playfair">100%</div>
              <div className="text-white/80 font-inter">Guest Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
