import AboutSection from "./components/AboutSection"
import RoomsSection from "./components/RoomsSection"
import ProximitySection from "./components/ProximitySection"
import AttractionsSection from "./components/AttractionsSection"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <AboutSection />
      <RoomsSection />
      <ProximitySection />
      <AttractionsSection />
      <Footer />
    </main>
  )
}
