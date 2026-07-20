import React from "react";
import Image from "next/image";
import PageHeading from "@/components/ui/PageHeading";

interface EventDetailHeroProps {
  title: string;
  highlight: string;
  titleSuffix?: string;
  description: string;
}

export default function EventDetailHero({
  title,
  highlight,
  titleSuffix = "",
  description,
}: EventDetailHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden lg:flex items-center justify-end pr-4 sm:pr-12 md:pr-24 lg:pr-10 xl:pr-16">
        <div className="relative w-full sm:w-[70%] md:w-[45%] lg:w-[50%] max-w-[800px] flex items-center">
          {/* Smooth gradient fade on the left edge to blend with bg-ink */}
          <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-ink to-transparent z-10" />
          <Image
            src="/images/events-single-bg-image.png"
            alt="Event Background"
            width={934}
            height={375}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 md:py-24 lg:py-32">
        <div className="flex max-w-xl flex-col items-start gap-6 text-left">
          <h1 className="font-ubuntu text-[40px] md:text-[55px] lg:text-[60px] font-bold leading-[1.1] text-white">
            {`${title} ${highlight} ${titleSuffix}`.trim()}
          </h1>
          <p className="font-inter text-[20px] leading-[30px] text-white/80">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
