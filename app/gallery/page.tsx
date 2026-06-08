import GallerySection from "../components/GallerySection";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata = {
  title: "Gallery | Lyra Nuwara Eliya",
  description:
    "Explore Lyra villa and the stunning landscapes of Nuwara Eliya through our curated photo gallery.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6]">
      <Navigation />
      <GallerySection />
      <Footer />
    </main>
  );
}
