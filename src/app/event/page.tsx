import EventsHero from "@/components/event/EventsHero";
import FeaturedEvent from "@/components/event/FeaturedEvent";
import EventsGrid from "@/components/event/EventsGrid";

export default function EventsPage() {
  return (
    <main>
      <EventsHero />
      <FeaturedEvent />
      <EventsGrid />
    </main>
  );
}
