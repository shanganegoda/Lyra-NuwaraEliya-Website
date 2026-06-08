import Image from "next/image";

const rooms = [
  {
    id: 1,
    name: "Night Lily",
    tag: "Mountain Suite",
    description:
      "Wake up to panoramic views of the Nuwara Eliya mountains. A spacious suite with a king-size bed, private balcony, and modern amenities with traditional Sri Lankan touches.",
    image: "/Lyra-Images/Images-OurRooms/IMG_6960.JPG",
    features: ["King Size Bed", "Private Balcony", "Mountain Views", "En-suite Bathroom"],
    capacity: "Up to 4 guests",
  },
  {
    id: 2,
    name: "Timber Lily",
    tag: "Tea Garden Room",
    description:
      "Immerse yourself in tea culture with direct views of our private tea garden. Comfort meets authentic Sri Lankan hospitality with curated design elements.",
    image: "/Lyra-Images/Images-OurRooms/IMG_6979.JPG",
    features: ["Queen Size Bed", "Tea Garden Views", "Traditional Decor", "Reading Nook"],
    capacity: "Up to 2 guests",
  },
  {
    id: 3,
    name: "White Lily",
    tag: "Family Suite",
    description:
      "Perfect for families or groups — multiple beds and a generous seating area surrounded by the beauty of hill country nature.",
    image: "/Lyra-Images/Images-OurRooms/IMG_7107.JPG",
    features: ["Multiple Beds", "Seating Area", "Family Friendly", "Extra Space"],
    capacity: "Up to 4 guests",
  },
];

export default function RoomsSection() {
  return (
    <section id="rooms" className="py-28 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <p className="text-[#a11d2b] text-[10px] tracking-[0.35em] uppercase font-inter mb-4">
              Accommodations
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#0f0e0c]">Our Rooms</h2>
          </div>
          <p className="font-inter text-[#6b6861] text-sm leading-relaxed max-w-xs">
            Three distinct rooms, each designed to offer comfort, character, and unforgettable views.
          </p>
        </div>

        {/* Grid — gap-px creates seamless tile borders */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8e6e1]">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white group flex flex-col">
              <div className="relative h-80 overflow-hidden flex-shrink-0">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <p className="text-[#a8a49e] text-[10px] tracking-[0.25em] uppercase font-inter mb-3">
                  {room.tag}
                </p>
                <h3 className="font-playfair text-2xl text-[#0f0e0c] mb-3">{room.name}</h3>
                <p className="font-inter text-[#6b6861] text-sm leading-relaxed mb-6 flex-1">
                  {room.description}
                </p>
                <div className="space-y-2 mb-6">
                  {room.features.map((f) => (
                    <p key={f} className="font-inter text-xs text-[#6b6861] flex items-center gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-[#a11d2b] flex-shrink-0" />
                      {f}
                    </p>
                  ))}
                </div>
                <p className="text-[10px] text-[#a8a49e] font-inter tracking-[0.2em] uppercase">
                  {room.capacity}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
