"use client";

import type React from "react";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  {
    name: "Airbnb",
    icon: "/lyra-images/ContactUs-Logos/1.png?height=80&width=80",
    url: "https://www.airbnb.co.uk/rooms/1404692181738696422?check_out=2025-11-12&viralityEntryPoint=1&unique_share_id=09DB0DE5-E050-4122-B7C1-0F87924239D9&slcid=dfad7b15b41a40579be66f27f5f20bae&s=76&adults=1&check_in=2025-11-07&slug=yqKkAae2&source_impression_id=p3_1757827971_P33nPJL2Tk_x70c3",
    color: "bg-[#FF5A5F]",
  },
  {
    name: "Instagram",
    icon: "/lyra-images/ContactUs-Logos/2.png?height=60&width=60",
    url: "https://www.instagram.com/reel/DM41EEMTDeG/",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  {
    name: "Facebook",
    icon: "/lyra-images/ContactUs-Logos/3.png?height=60&width=60",
    url: "https://www.facebook.com/people/Lyra-Nuwara-Eliya/61574764959629/",
    color: "bg-[#1877F2]",
  },
  {
    name: "TikTok",
    icon: "/lyra-images/ContactUs-Logos/4.png?height=60&width=60",
    url: "https://www.tiktok.com/@lyra.nuwaraeliya",
    color: "bg-black",
  },
  {
    name: "WhatsApp",
    icon: "/lyra-images/ContactUs-Logos/5.png?height=60&width=60",
    url: "https://wa.me/94777637260?text=Hello%20I%20am%20interested%20in%20booking%20Lyra%20NuwraEliya",
    color: "bg-[#25D366]",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-dark mb-4 font-playfair">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-secondary max-w-3xl mx-auto font-inter">
            Ready to experience the magic of Nuwara Eliya? Get in touch with us
            for bookings, inquiries, or any questions about your perfect
            mountain retreat.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="group relative"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${social.color} flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300`}
                >
                  <Image
                    src={social.icon || "/placeholder.svg"}
                    alt={social.name}
                    width={92}
                    height={92}
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-inter">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-dark mb-6 font-playfair">
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-dark mb-2 font-playfair">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-secondary font-inter">
                    Thank you for your inquiry. We'll get back to you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-dark mb-2 font-playfair"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 font-inter"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-dark mb-2 font-playfair"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 font-inter"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-dark mb-2 font-playfair"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 font-inter"
                        placeholder="+94 77 123 4567"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="guests"
                        className="block text-sm font-medium text-dark mb-2 font-playfair"
                      >
                        Number of Guests
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 font-inter"
                      >
                        <option value="">Select guests</option>
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5+">5+ Guests</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="checkIn"
                        className="block text-sm font-medium text-dark mb-2 font-playfair"
                      >
                        Check-in Date
                      </label>
                      <input
                        type="date"
                        id="checkIn"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 font-inter"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="checkOut"
                        className="block text-sm font-medium text-dark mb-2 font-playfair"
                      >
                        Check-out Date
                      </label>
                      <input
                        type="date"
                        id="checkOut"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 font-inter"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-dark mb-2 font-playfair"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 font-inter resize-none"
                      placeholder="Tell us about your stay preferences, special requests, or any questions you have..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-4 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-200 font-inter font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-dark mb-6 font-playfair">
                  Get in Touch
                </h2>
                <p className="text-secondary font-inter mb-8">
                  We're here to help make your stay at Serenity Villa
                  unforgettable. Reach out to us through any of the following
                  channels, and we'll respond promptly to assist you with your
                  booking or answer any questions.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1 font-playfair">
                      Address
                    </h3>
                    <p className="text-secondary font-inter">
                      123 Hill View Road
                      <br />
                      Nuwara Eliya 22200
                      <br />
                      Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1 font-playfair">
                      Phone
                    </h3>
                    <p className="text-secondary font-inter">+94 77 123 4567</p>
                    <p className="text-sm text-secondary font-inter">
                      Available 24/7 for emergencies
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1 font-playfair">
                      Email
                    </h3>
                    <p className="text-secondary font-inter">
                      info@serenityvilla.lk
                    </p>
                    <p className="text-sm text-secondary font-inter">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1 font-playfair">
                      Response Time
                    </h3>
                    <p className="text-secondary font-inter">
                      Check-in: 2:00 PM - 8:00 PM
                      <br />
                      Check-out: 8:00 AM - 11:00 AM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative h-64 bg-gray-200 rounded-2xl overflow-hidden">
                <Image
                  src="/lyra-images/images-aboutus/img_7193.jpg?height=300&width=500"
                  alt="Serenity Villa Location Map"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-white text-center">
                    <MapPin className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold font-playfair">
                      Serenity Villa
                    </p>
                    <p className="text-sm font-inter">
                      Nuwara Eliya, Sri Lanka
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
