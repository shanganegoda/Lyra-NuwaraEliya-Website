import GallerySection from "../components/GallerySection"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

export const metadata = {
  title: "Gallery | Serenity Villa Nuwara Eliya",
  description: "Explore our beautiful villa and the stunning landscapes of Nuwara Eliya through our photo gallery.",
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <GallerySection />
      <Footer />
    </main>
  )
}
