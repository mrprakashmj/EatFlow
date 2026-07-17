import React from "react";
import Image from "next/image";

interface EventDetailContentProps {
  image?: string;
  title: string;
  paragraphs: string[];
}

export default function EventDetailContent({
  image = "/images/event-thumbnail-01.jpg",
  title,
  paragraphs,
}: EventDetailContentProps) {
  return (
    <div className="flex flex-col gap-8">
      {/* Article image */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <h2 className="font-ubuntu text-4xl font-bold leading-tight text-ink md:text-[45px]">
        {title}
      </h2>

      <div className="flex flex-col gap-5 text-base leading-relaxed text-[#4c4a49] sm:text-lg">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
