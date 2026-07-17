import ReservationHero from "@/components/reservation/ReservationHero";
import BookingSection from "@/components/reservation/BookingSection";
import ReservationWhyChooseUs from "@/components/reservation/ReservationWhyChooseUs";
import FaqSection from "@/components/contact/FaqSection";

export default function ReservationsPage() {
  return (
    <main>
      <ReservationHero />
      <BookingSection />
      <ReservationWhyChooseUs />
      <FaqSection />
    </main>
  );
}
