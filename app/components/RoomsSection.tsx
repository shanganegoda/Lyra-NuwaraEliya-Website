import Image from "next/image"
import { Bed, Users, Mountain } from "lucide-react"

const rooms = [
  {
    id: 1,
    name: "Night Lily",
    description:
      "Wake up to panoramic views of the Nuwara Eliya mountains. This spacious suite features a king-size bed, private balcony, and modern amenities with traditional Sri Lankan touches.",
    image: "/lyra-images/images-ourrooms/img_6960.jpg?height=400&width=600",
    features: ["King Size Bed", "Private Balcony", "Mountain Views", "En-suite Bathroom"],
    capacity: "4 Guests",
    icon: Mountain,
  },
  {
    id: 2,
    name: "Timber Lily",
    description:
      "Immerse yourself in the tea culture with direct views of our private tea garden. This cozy room combines comfort with authentic Sri Lankan hospitality and design elements.",
    image: "/lyra-images/images-ourrooms/img_6979.jpg?height=400&width=600",
    features: ["Queen Size Bed", "Tea Garden Views", "Traditional Decor", "Reading Nook"],
    capacity: "2 Guests",
    icon: Bed,
  },
  {
    id: 3,
    name: "White Lily",
    description:
      "Perfect for families or groups, this spacious room features multiple beds and a comfortable seating area. Enjoy quality time together while surrounded by nature's beauty.",
    image: "/lyra-images/images-ourrooms/img_7107.jpg?height=400&width=600",
    features: ["Multiple Beds", "Seating Area", "Family Friendly", "Extra Space"],
    capacity: "4 Guests",
    icon: Users,
  },
]

export default function RoomsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-4 font-playfair">Our Rooms</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-secondary max-w-3xl mx-auto font-inter">
            Each room is thoughtfully designed to provide comfort, luxury, and unforgettable views of Nuwara Eliya's
            stunning landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => {
            const IconComponent = room.icon
            return (
              <div
                key={room.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={room.image || "/placeholder.svg"}
                    alt={room.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-1 text-sm font-medium text-secondary font-playfair">
                      <IconComponent className="w-4 h-4" />
                      <span>{room.capacity}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-dark mb-3 font-playfair">{room.name}</h3>
                  <p className="text-secondary mb-4 leading-relaxed font-inter">{room.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-dark text-sm uppercase tracking-wide font-playfair">Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {room.features.map((feature, index) => (
                        <span
                          key={index}
                          className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-playfair"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
