import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  image: string;
  title: string;
  slug: string;
  date: string;
  time: string;
}

export default function EventCard({ image, title, slug, date, time }: EventCardProps) {
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
