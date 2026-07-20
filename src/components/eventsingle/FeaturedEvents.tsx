import React from "react";
import Image from "next/image";
import Link from "next/link";

interface FeaturedEvent {
  title: string;
  slug: string;
  image: string;
  time: string;
  date: string;
}

interface FeaturedEventsProps {
  events: FeaturedEvent[];
}

function FeaturedEventCard({ title, slug, image, time, date }: FeaturedEvent) {
  return (
    <div className="flex h-full flex-col border border-gray-300 bg-white p-6 md:p-8">
      <Link href={`/event/${slug}`} className="relative w-full aspect-[4/3] overflow-hidden mb-6 cursor-pointer block">
        <Image src={image} alt={title} fill className="object-cover hover:scale-110 transition-all duration-300 ease-in-out" />
      </Link>

      <div className="flex flex-wrap items-center gap-6 mb-4">
        <span className="inline-flex items-center gap-2 bg-yellow p-2.5 font-inter font-normal text-[16px] leading-[18px] text-ink">
          <Image src="/images/events-calender-icon.svg" alt="Calendar" width={18} height={18} />
          {date}
        </span>
        <span className="inline-flex items-center gap-2 font-inter font-normal text-[16px] leading-[18px] text-ink">
          <Image src="/images/events-clock-icon.svg" alt="Clock" width={18} height={18} />
          {time}
        </span>
      </div>

      <Link href={`/event/${slug}`}>
        <h3 className="font-ubuntu font-bold text-[24px] leading-[1.2] md:text-[30px] md:leading-[33px] text-ink hover:text-orange transition-colors">
          {title}
        </h3>
      </Link>
    </div>
  );
}

export default function FeaturedEvents({ events }: FeaturedEventsProps) {
  return (
    <section className="bg-white pt-16 pb-[320px] sm:pb-[260px] md:pt-24 lg:pb-[230px]">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="mb-10 md:mb-14">
          <p className="mb-2 flex items-center gap-1 font-inter text-sm font-medium uppercase tracking-[1.6px] text-ink">
            Events
            <span className="font-bagel text-orange">.</span>
          </p>
          <h2 className="font-ubuntu text-[40px] md:text-[50px] font-bold leading-tight text-ink">
            Featured Events
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:gap-10">
          {events.map((event) => (
            <FeaturedEventCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
