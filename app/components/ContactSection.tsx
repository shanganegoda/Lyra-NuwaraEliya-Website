"use client";

import { useState } from "react";
import type React from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const socials = [
  {
    name: "Airbnb",
    icon: "/Lyra-Images/ContactUs-Logos/1.png",
    url: "https://www.airbnb.co.uk/rooms/1404692181738696422",
    label: "Book on Airbnb",
  },
  {
    name: "Instagram",
    icon: "/Lyra-Images/ContactUs-Logos/2.png",
    url: "https://www.instagram.com/reel/DM41EEMTDeG/",
    label: "Follow on Instagram",
  },
  {
    name: "Facebook",
    icon: "/Lyra-Images/ContactUs-Logos/3.png",
    url: "https://www.facebook.com/people/Lyra-Nuwara-Eliya/61574764959629/",
    label: "Like on Facebook",
  },
  {
    name: "TikTok",
    icon: "/Lyra-Images/ContactUs-Logos/4.png",
    url: "https://www.tiktok.com/@lyra.nuwaraeliya",
    label: "Watch on TikTok",
  },
  {
    name: "WhatsApp",
    icon: "/Lyra-Images/ContactUs-Logos/5.png",
    url: "https://wa.me/94777637260?text=Hello%20I%20am%20interested%20in%20booking%20Lyra%20NuwaraEliya",
    label: "Chat on WhatsApp",
  },
];

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    lines: ["123 Hill View Road", "Nuwara Eliya 22200", "Sri Lanka"],
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["+94 77 776 3726", "Available 24 / 7"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["info@lyravilla.lk", "Reply within 24 hours"],
  },
  {
    icon: Clock,
    label: "Hours",
    lines: ["Check-in: 2:00 PM – 8:00 PM", "Check-out: 8:00 AM – 11:00 AM"],
  },
];

const emptyForm = {
  name: "", email: "", phone: "",
  checkIn: "", checkOut: "", guests: "", message: "",
};

export default function ContactSection() {
  const [form, setForm]             = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted,  setSubmitted]  = useState(false);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1800));
    setSubmitted(true);
    setSubmitting(false);
    setTimeout(() => { setSubmitted(false); setForm(emptyForm); }, 4000);
  };

  const input =
    "w-full px-4 py-3 border border-[#e8e6e1] bg-white font-inter text-sm text-[#0f0e0c] placeholder-[#a8a49e] focus:outline-none focus:border-[#a11d2b] transition-colors duration-200";

  return (
    <>
      {/* Page header */}
      <section className="pt-36 pb-14 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-[#a11d2b] text-[10px] tracking-[0.35em] uppercase font-inter mb-5">
            Get in Touch
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl text-[#0f0e0c] mb-6">
            Contact Us
          </h1>
          <p className="font-inter text-[#6b6861] text-base max-w-lg leading-relaxed">
            Ready to experience the magic of Nuwara Eliya? Reach out for bookings,
            inquiries, or any questions about your stay at Lyra.
          </p>
        </div>
      </section>

      {/* Social links */}
      <section className="bg-[#faf9f6] pb-14 border-b border-[#e8e6e1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 border border-[#e8e6e1] bg-white hover:border-[#a8a49e] transition-colors duration-200 group"
              >
                <Image
                  src={s.icon}
                  alt={s.name}
                  width={18}
                  height={18}
                  className="object-contain"
                  unoptimized
                />
                <span className="font-inter text-sm text-[#6b6861] group-hover:text-[#0f0e0c] transition-colors">
                  {s.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Form */}
            <div>
              <h2 className="font-playfair text-3xl text-[#0f0e0c] mb-8">
                Send a Message
              </h2>

              {submitted ? (
                <div className="border border-[#e8e6e1] p-12 text-center">
                  <CheckCircle className="w-9 h-9 text-[#a11d2b] mx-auto mb-4" />
                  <h3 className="font-playfair text-xl text-[#0f0e0c] mb-2">Message Sent</h3>
                  <p className="font-inter text-sm text-[#6b6861]">
                    Thank you — we'll be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-inter text-[10px] text-[#a8a49e] tracking-[0.2em] uppercase mb-2">Full Name *</label>
                      <input type="text" name="name" value={form.name} onChange={onChange} required placeholder="Your full name" className={input} />
                    </div>
                    <div>
                      <label className="block font-inter text-[10px] text-[#a8a49e] tracking-[0.2em] uppercase mb-2">Email *</label>
                      <input type="email" name="email" value={form.email} onChange={onChange} required placeholder="you@example.com" className={input} />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-inter text-[10px] text-[#a8a49e] tracking-[0.2em] uppercase mb-2">Phone</label>
                      <input type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="+94 77 123 4567" className={input} />
                    </div>
                    <div>
                      <label className="block font-inter text-[10px] text-[#a8a49e] tracking-[0.2em] uppercase mb-2">Guests</label>
                      <select name="guests" value={form.guests} onChange={onChange} className={input}>
                        <option value="">Select guests</option>
                        {["1","2","3","4","5","6","7","8","9","10","11","12"].map((n) => (
                          <option key={n} value={n}>{n} Guest{n !== "1" ? "s" : ""}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-inter text-[10px] text-[#a8a49e] tracking-[0.2em] uppercase mb-2">Check-in</label>
                      <input type="date" name="checkIn" value={form.checkIn} onChange={onChange} className={input} />
                    </div>
                    <div>
                      <label className="block font-inter text-[10px] text-[#a8a49e] tracking-[0.2em] uppercase mb-2">Check-out</label>
                      <input type="date" name="checkOut" value={form.checkOut} onChange={onChange} className={input} />
                    </div>
                  </div>

                  <div>
                    <label className="block font-inter text-[10px] text-[#a8a49e] tracking-[0.2em] uppercase mb-2">Message</label>
                    <textarea name="message" value={form.message} onChange={onChange} rows={5} placeholder="Tell us about your stay, special requests, or any questions…" className={`${input} resize-none`} />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#0f0e0c] text-white py-4 font-inter text-sm tracking-widest hover:bg-[#a11d2b] transition-colors duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {submitting ? (
                      <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /><span>Sending…</span></>
                    ) : (
                      <><Send className="w-4 h-4" /><span>Send Message</span></>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div>
              <h2 className="font-playfair text-3xl text-[#0f0e0c] mb-8">Find Us</h2>

              <div className="space-y-8 mb-12">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex gap-5">
                      <div className="flex-shrink-0 w-9 h-9 border border-[#e8e6e1] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#a11d2b]" />
                      </div>
                      <div>
                        <p className="font-inter text-[10px] text-[#a8a49e] tracking-[0.2em] uppercase mb-1.5">{item.label}</p>
                        {item.lines.map((line, i) => (
                          <p key={i} className="font-inter text-sm text-[#6b6861] leading-relaxed">{line}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Villa image */}
              <div className="relative h-52 overflow-hidden mb-5">
                <Image src="/Lyra-Images/Images-AboutUs/IMG_7193.JPG" alt="Lyra Villa" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/25 flex items-end p-5">
                  <div className="text-white">
                    <p className="font-playfair text-lg">Lyra Nuwara Eliya</p>
                    <p className="font-inter text-xs text-white/70 mt-0.5">Hill Country, Sri Lanka</p>
                  </div>
                </div>
              </div>

              {/* Availability CTA */}
              <div className="border border-[#e8e6e1] p-5 flex items-center justify-between gap-4">
                <div>
                  <p className="font-playfair text-base text-[#0f0e0c]">Check Availability</p>
                  <p className="font-inter text-xs text-[#a8a49e] mt-0.5">
                    View live dates from our Airbnb listings
                  </p>
                </div>
                <a
                  href="/availability"
                  className="flex-shrink-0 px-5 py-2.5 border border-[#a11d2b] text-[#a11d2b] font-inter text-xs tracking-wider hover:bg-[#a11d2b] hover:text-white transition-all duration-300"
                >
                  View Calendar →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
