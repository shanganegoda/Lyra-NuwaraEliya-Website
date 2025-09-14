import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Villa Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 font-playfair">
              Lyra Nuwara Eliya
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed font-inter">
              Experience the magic of Nuwara Eliya from our luxury villa.
              Nestled in the heart of Sri Lanka's hill country, we offer
              unparalleled comfort and breathtaking views.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-secondary hover:bg-primary p-2 rounded-full transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-secondary hover:bg-primary p-2 rounded-full transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-secondary hover:bg-primary p-2 rounded-full transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-playfair">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-inter">
                    123 Hill View Road
                    <br />
                    Nuwara Eliya 22200
                    <br />
                    Sri Lanka
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-gray-300 text-sm font-inter">
                  +94 77 123 4567
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-gray-300 text-sm font-inter">
                  info@serenityvilla.lk
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-playfair">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/gallery"
                  className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm font-inter"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm font-inter"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#rooms"
                  className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm font-inter"
                >
                  Our Rooms
                </a>
              </li>
              <li>
                <a
                  href="#proximity"
                  className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm font-inter"
                >
                  Location
                </a>
              </li>
              <li>
                <a
                  href="#attractions"
                  className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm font-inter"
                >
                  Attractions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm font-inter"
                >
                  Booking
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0 font-inter">
              © {new Date().getFullYear()} Serenity Villa Nuwara Eliya. All
              rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors duration-200 font-inter"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors duration-200 font-inter"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors duration-200 font-inter"
              >
                Cancellation Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
