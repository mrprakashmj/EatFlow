import React from "react";
import EventDetailHero from "@/components/eventsingle/EventDetailHero";
import EventDetailContent from "@/components/eventsingle/EventDetailContent";
import EventDetailSidebar from "@/components/eventsingle/EventDetailSidebar";
import FeaturedEvents from "@/components/eventsingle/FeaturedEvents";

// Replace with a real data fetch (CMS / API) keyed on params.slug
const eventData = {
  hero: {
    title: "Culinary",
    highlight: "Heritage",
    titleSuffix: "Nights",
    description:
      "Discover an array of delectable dishes carefully crafted to tantalize your taste buds on our enticing menu.",
  },
  content: {
    title: "Dynamic Community Gathering",
    paragraphs: [
      "Amidst the bustling cityscape, under a canopy of dazzling lights, an air of excitement pervades the environment as people from all walks of life gather at the event site. Laughter and banter blend with the hum of expectancy.",
      "The paths are lined with booths decked with colourful banners and appealing displays, providing participants with a fascinating selection of activities to discover. Delicious fragrances flow through the air, emanating from food stalls selling culinary treats from all over the world, tantalizing taste buds and sparking gastronomic excursions.",
      "Meanwhile, artisans demonstrate their skills, transforming raw materials into pieces of beauty that enchant viewers. Amidst the hustle and bustle, moments of calm can be discovered in quiet places, where people can pause to observe nature's beauty or engage in emotional conversations with new acquaintances.",
    ],
  },
  sidebar: {
    time: "09:30 - 10:30 AM",
    date: "05 Mar 2025",
    place: "Cuisine Garden",
    offerPrice: "29",
  },
  featured: [
    { title: "Culinary Heritage Nights", slug: "culinary-heritage-nights", image: "/images/event-thumbnail-01.jpg", time: "9:30 - 10:30 AM", date: "9 Sep 2024" },
    { title: "Global Gastronomy Series", slug: "global-gastronomy-series", image: "/images/event-thumbnail-02.jpg", time: "6:30 PM - 9:30 PM", date: "9 Sep 2024" },
  ],
};

export default function EventDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { hero, content, sidebar, featured } = eventData;

  return (
    <main>
      <EventDetailHero
        title={hero.title}
        highlight={hero.highlight}
        titleSuffix={hero.titleSuffix}
        description={hero.description}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
            <EventDetailContent
              title={content.title}
              paragraphs={content.paragraphs}
            />
            <EventDetailSidebar
              time={sidebar.time}
              date={sidebar.date}
              place={sidebar.place}
              offerPrice={sidebar.offerPrice}
            />
          </div>
        </div>
      </section>

      <FeaturedEvents events={featured} />
    </main>
  );
}
