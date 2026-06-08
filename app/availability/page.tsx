import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AvailabilityCalendar from "../components/AvailabilityCalendar";

export const metadata = {
  title: "Check Availability | Lyra Nuwara Eliya",
  description:
    "Check real-time availability for Lyra villa and individual rooms — synced live from our Airbnb listings.",
};

export default function AvailabilityPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6]">
      <Navigation />
      <AvailabilityCalendar />
      <Footer />
    </main>
  );
}
