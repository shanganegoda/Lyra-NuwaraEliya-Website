import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

const navLinks = [
  { label: "Gallery", href: "/gallery" },
  { label: "Availability", href: "/availability" },
  { label: "Our Rooms", href: "#rooms" },
  { label: "Location", href: "#proximity" },
  { label: "Attractions", href: "#attractions" },
  { label: "Book a Stay", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f0e0c] text-white">

      {/* CTA banner */}
      <div className="border-b border-white/10 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div>
            <p className="text-white/40 text-[10px] tracking-[0.35em] uppercase font-inter mb-6">
              Ready to escape?
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
              Begin your stay<br className="hidden md:block" /> at Lyra.
            </h2>
          </div>
          <a
            href="/contact"
            className="inline-block flex-shrink-0 border border-white/25 text-white px-9 py-4 text-sm font-inter tracking-widest hover:bg-white hover:text-[#0f0e0c] transition-all duration-400 self-start md:self-center"
          >
            Book Your Stay
          </a>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/Lyra-Images/General/Lyra-Logo.png"
              alt="Lyra"
              width={42}
              height={42}
              className="object-contain mb-7 brightness-0 invert"
            />
            <p className="font-inter text-white/45 text-sm leading-relaxed max-w-xs mb-8">
              A luxury mountain retreat in Nuwara Eliya, Sri Lanka. Where tranquility
              meets modern comfort in the heart of hill country.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="text-white/35 hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="text-white/35 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-inter text-[10px] tracking-[0.25em] uppercase text-white/35 mb-7">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-white/25 mt-0.5 flex-shrink-0" />
                <p className="font-inter text-white/55 text-sm leading-relaxed">
                  Nuwara Eliya 22200<br />Sri Lanka
                </p>
              </div>
              <div className="flex gap-3">
                <Phone className="w-4 h-4 text-white/25 flex-shrink-0" />
                <p className="font-inter text-white/55 text-sm">+94 77 123 4567</p>
              </div>
              <div className="flex gap-3">
                <Mail className="w-4 h-4 text-white/25 flex-shrink-0" />
                <p className="font-inter text-white/55 text-sm">info@lyravilla.lk</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-inter text-[10px] tracking-[0.25em] uppercase text-white/35 mb-7">
              Navigate
            </h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-inter text-sm text-white/45 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-xs text-white/25">
            © {new Date().getFullYear()} Lyra Nuwara Eliya. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-inter text-xs text-white/25 hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-inter text-xs text-white/25 hover:text-white/60 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
