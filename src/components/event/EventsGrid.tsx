import EventCard from "./EventCard";

const events = [
  {
    image: "/images/event-thumbnail-02.jpg",
    title: "Global Gastronomy Series",
    slug: "global-gastronomy-series",
    date: "9 Sep 2024",
    time: "6:30 PM - 9:30 PM",
  },
  {
    image: "/images/event-thumbnail-03.jpg",
    title: "Exclusive Dining Experiences",
    slug: "exclusive-dining-experiences",
    date: "9 Sep 2024",
    time: "7:30 PM - 10:30 PM",
  },
  {
    image: "/images/event-thumbnail-04.jpg",
    title: "Wine Pairing Dinners",
    slug: "wine-pairing-dinners",
    date: "9 Sep 2024",
    time: "5:00 PM - 8:00 PM",
  },
  {
    image: "/images/event-thumbnail-05.jpg",
    title: "Sunday Brunch Buffet",
    slug: "sunday-brunch-buffet",
    date: "9 Sep 2024",
    time: "11:00 AM - 2:00 PM",
  },
];

export default function EventsGrid() {
  return (
    <section className="bg-white mb-[250px]">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
