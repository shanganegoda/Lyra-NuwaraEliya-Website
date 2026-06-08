"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const linkClass = scrolled
    ? "text-[#6b6861] hover:text-[#0f0e0c]"
    : "text-white/80 hover:text-white";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/96 backdrop-blur-md border-b border-[#e8e6e1]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/Lyra-Images/General/Lyra-Logo.png"
              alt="Lyra"
              width={44}
              height={44}
              className="object-contain"
            />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className={`text-sm font-inter tracking-wide transition-colors duration-200 ${linkClass}`}
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className={`text-sm font-inter tracking-wide transition-colors duration-200 ${linkClass}`}
            >
              Gallery
            </Link>
            <Link
              href="/availability"
              className={`text-sm font-inter tracking-wide transition-colors duration-200 ${linkClass}`}
            >
              Availability
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-inter font-medium tracking-wider px-6 py-2.5 border transition-all duration-300 ${
                scrolled
                  ? "border-[#a11d2b] text-[#a11d2b] hover:bg-[#a11d2b] hover:text-white"
                  : "border-white/60 text-white hover:bg-white hover:text-[#0f0e0c]"
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-1.5 transition-colors ${
              scrolled ? "text-[#0f0e0c]" : "text-white"
            }`}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-[#e8e6e1] py-7 px-2">
            <div className="flex flex-col gap-6">
              <Link
                href="/"
                className="text-sm font-inter text-[#6b6861] hover:text-[#0f0e0c] tracking-wide transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/gallery"
                className="text-sm font-inter text-[#6b6861] hover:text-[#0f0e0c] tracking-wide transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/availability"
                className="text-sm font-inter text-[#6b6861] hover:text-[#0f0e0c] tracking-wide transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Availability
              </Link>
              <Link
                href="/contact"
                className="text-sm font-inter font-medium border border-[#a11d2b] text-[#a11d2b] px-6 py-3 text-center hover:bg-[#a11d2b] hover:text-white transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
