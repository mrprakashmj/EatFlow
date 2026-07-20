import Image from "next/image";
import Link from "next/link";

export default function FeaturedEvent() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-[20px] lg:px-[20px] ">
        <div className="bg-[#f2f2f2] p-[25px] md:p-[25px] lg:p-[30px] grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 md:order-1 relative w-full aspect-[4/3] overflow-hidden">
            <Link href="/event/culinary-heritage-nights" className="block w-full h-full">
              <Image
                src="/images/event-thumbnail-01.jpg"
                alt="Culinary Heritage Nights"
                fill
                className="object-cover hover:scale-110 transition-all duration-300 ease-in-out"
              />
            </Link>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-6">
              <span className="inline-flex items-center justify-center gap-2 bg-yellow px-4 py-2 font-inter font-medium text-ink">
                <Image src="/images/events-calender-icon.svg" alt="Calendar" width={18} height={18} />
                9 Sep 2024
              </span>
              <span className="inline-flex items-center gap-2 font-inter font-medium text-ink">
                <Image src="/images/events-clock-icon.svg" alt="Clock" width={18} height={18} />
                9:30 - 10:30 AM
              </span>
            </div>

            <Link href="/event/culinary-heritage-nights">
              <h2 className="font-ubuntu font-bold text-[45px] md:text-5xl lg:text-[45px] leading-[1.1] text-ink hover:text-orange transition-colors">
                Culinary Heritage Nights
              </h2>
            </Link>

            <p className="font-inter font-normal text-lg text-ink/70 leading-relaxed max-w-md">
              Indulge in authentic flavors celebrating rich culinary
              traditions from around the globe.
            </p>

            <Link
              href="/reservation"
              className="mt-4 self-start bg-ink px-10 py-4 font-inter font-medium text-[18px] text-white transition-colors hover:bg-orange"
            >
              Book a Table
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
