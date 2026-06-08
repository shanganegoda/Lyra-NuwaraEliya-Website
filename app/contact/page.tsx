import ContactSection from "../components/ContactSection";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact & Book | Lyra Nuwara Eliya",
  description:
    "Get in touch with Lyra for bookings and inquiries about your luxury mountain retreat in Nuwara Eliya.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6]">
      <Navigation />
      <ContactSection />
      <Footer />
    </main>
  );
}
