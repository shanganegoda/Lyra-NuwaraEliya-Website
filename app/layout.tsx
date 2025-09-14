import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lyra Nuwara Eliya | Luxury Mountain Retreat in Sri Lanka",
  description:
    "Experience luxury and tranquility at Lyra, your perfect mountain retreat in Nuwara Eliya, Sri Lanka. Stunning views, modern amenities, and easy access to tea plantations and attractions.",
  keywords:
    "Nuwara Eliya villa, Sri Lanka accommodation, mountain retreat, tea plantation views, luxury villa, hill country",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
