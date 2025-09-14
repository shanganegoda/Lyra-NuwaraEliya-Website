import Image from "next/image";
import { Clock, MapPin, Car } from "lucide-react";

const proximityData = [
  {
    name: "Gregory Lake",
    description: "Scenic lake perfect for boating and picnics",
    image: "/lyra-images/images-proximityandaccess/1.jpg?height=300&width=400",
    distance: "2.5 km",
    time: "5 min drive",
    type: "Recreation",
  },
  {
    name: "Nuwara Eliya Golf Club",
    description: "Historic 18-hole golf course with mountain views",
    image: "/lyra-images/images-proximityandaccess/2.jpg?height=300&width=400",
    distance: "3.2 km",
    time: "7 min drive",
    type: "Sports",
  },
  {
    name: "Victoria Park",
    description: "Beautiful botanical garden in the city center",
    image: "/lyra-images/images-proximityandaccess/3.jpg?height=300&width=400",
    distance: "4.1 km",
    time: "8 min drive",
    type: "Nature",
  },
  {
    name: "Tea Factory & Museum",
    description: "Learn about Sri Lankan tea production",
    image: "/lyra-images/images-proximityandaccess/4.jpg?height=300&width=400",
    distance: "1.8 km",
    time: "4 min drive",
    type: "Culture",
  },
  {
    name: "Hakgala Botanical Garden",
    description: "Stunning botanical garden with rare plants",
    image: "/lyra-images/images-proximityandaccess/5.webp?height=300&width=400",
    distance: "8.5 km",
    time: "15 min drive",
    type: "Nature",
  },
  {
    name: "Seetha Amman Temple",
    description: "Historic Hindu temple with cultural significance",
    image: "/lyra-images/images-proximityandaccess/6.jpg?height=300&width=400",
    distance: "9.2 km",
    time: "18 min drive",
    type: "Culture",
  },
];

export default function ProximitySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-4 font-playfair">
            Proximity & Access
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-secondary max-w-3xl mx-auto font-inter">
            Strategically located to give you easy access to Nuwara Eliya's most
            beloved attractions and experiences. Everything you need is just
            minutes away.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proximityData.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={location.image || "/placeholder.svg"}
                  alt={location.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium font-playfair">
                  {location.type}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2 font-playfair">
                  {location.name}
                </h3>
                <p className="text-secondary mb-4 text-sm leading-relaxed font-inter">
                  {location.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-secondary">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-medium font-inter">
                        {location.distance}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 text-secondary">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium font-inter">
                        {location.time}
                      </span>
                    </div>
                  </div>
                  <Car className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-dark mb-4 font-playfair">Perfect Location for Exploration</h3>
            <p className="text-secondary leading-relaxed font-inter">
              Our villa's prime location puts you at the center of Nuwara Eliya's attractions. Whether you're interested
              in nature, culture, recreation, or adventure, everything is within easy reach. We provide detailed
              directions and can arrange transportation to help you make the most of your stay.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
