import Image from "next/image";
import { MapPin, Clock } from "lucide-react";

const locations = [
  {
    name: "Gregory Lake",
    description: "Scenic lake perfect for boating and leisurely picnics",
    image: "/Lyra-Images/Images-ProximityAndAccess/1.jpg",
    distance: "2.5 km",
    time: "5 min",
    type: "Recreation",
  },
  {
    name: "Nuwara Eliya Golf Club",
    description: "Historic 18-hole course with sweeping mountain views",
    image: "/Lyra-Images/Images-ProximityAndAccess/2.jpg",
    distance: "3.2 km",
    time: "7 min",
    type: "Sports",
  },
  {
    name: "Victoria Park",
    description: "Beautiful botanical garden in the heart of the city",
    image: "/Lyra-Images/Images-ProximityAndAccess/3.jpg",
    distance: "4.1 km",
    time: "8 min",
    type: "Nature",
  },
  {
    name: "Tea Factory & Museum",
    description: "Explore the rich history of Sri Lankan tea production",
    image: "/Lyra-Images/Images-ProximityAndAccess/4.jpg",
    distance: "1.8 km",
    time: "4 min",
    type: "Culture",
  },
  {
    name: "Hakgala Botanical Garden",
    description: "Stunning garden home to rare and exotic plant species",
    image: "/Lyra-Images/Images-ProximityAndAccess/5.webp",
    distance: "8.5 km",
    time: "15 min",
    type: "Nature",
  },
  {
    name: "Seetha Amman Temple",
    description: "A historic Hindu temple of deep cultural significance",
    image: "/Lyra-Images/Images-ProximityAndAccess/6.jpg",
    distance: "9.2 km",
    time: "18 min",
    type: "Culture",
  },
];

export default function ProximitySection() {
  return (
    <section id="proximity" className="py-28 lg:py-40 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <p className="text-[#a11d2b] text-[10px] tracking-[0.35em] uppercase font-inter mb-4">
              Location
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#0f0e0c]">Proximity & Access</h2>
          </div>
          <p className="font-inter text-[#6b6861] text-sm leading-relaxed max-w-xs">
            Strategically placed at the heart of Nuwara Eliya's most beloved experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <div
              key={i}
              className="group bg-white border border-[#e8e6e1] overflow-hidden hover:border-[#a8a49e] transition-colors duration-400"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-playfair text-lg text-[#0f0e0c]">{loc.name}</h3>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[#a8a49e] font-inter ml-3 mt-1 flex-shrink-0">
                    {loc.type}
                  </span>
                </div>
                <p className="font-inter text-[#6b6861] text-sm mb-5 leading-relaxed">
                  {loc.description}
                </p>
                <div className="flex items-center gap-5 text-xs text-[#a8a49e] font-inter">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" />
                    {loc.distance}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {loc.time} by car
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
