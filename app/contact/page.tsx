import ContactSection from "../components/ContactSection"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

export const metadata = {
  title: "Contact Us | Serenity Villa Nuwara Eliya",
  description:
    "Get in touch with Serenity Villa for bookings, inquiries, and more information about your perfect mountain retreat in Nuwara Eliya.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <ContactSection />
      <Footer />
    </main>
  )
}
