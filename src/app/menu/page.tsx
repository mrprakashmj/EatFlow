import Banner from "./Banner";
import MenuSection from "./MenuSection";
import OfferSection from "./OfferSection";
import ReservationSection from "./ReservationSection";
import MenuBottomSection from "./MenuBottomSection";

export const metadata = {
  title: "Menu | EatFlow",
  description: "Discover an array of delectable dishes carefully crafted to tantalize your taste buds on our enticing menu.",
};

export default function MenuPage() {
  return (
    <main>
      <Banner />
      <MenuSection />
      <OfferSection />
      <ReservationSection />
      <MenuBottomSection />
    </main>
  );
}
