"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Camera, Home } from "lucide-react";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/Lyra-Images/General/Lyra-Logo.png"
              alt="Lyra Logo"
              width={60}
              height={60}
              className="rounded-lg object-contain"
            />
            {/* <span className="font-playfair font-semibold text-xl text-dark">
              Lyra | Nuwara Eliya
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="flex items-center space-x-1 text-secondary hover:text-primary transition-colors duration-200 font-inter"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>

            <Link
              href="/gallery"
              className="flex items-center space-x-1 text-secondary hover:text-primary transition-colors duration-200 font-inter"
            >
              <Camera className="w-4 h-4" />
              <span>Gallery</span>
            </Link>
            <Link
              href="/contact"
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-200 font-inter font-medium"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-dark" />
            ) : (
              <Menu className="w-6 h-6 text-dark" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link
                href="/gallery"
                className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors duration-200 font-inter"
                onClick={() => setIsOpen(false)}
              >
                <Camera className="w-4 h-4" />
                <span>Gallery</span>
              </Link>
              <Link
                href="/contact"
                className="bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-200 text-center font-inter font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
