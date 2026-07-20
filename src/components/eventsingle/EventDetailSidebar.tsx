import React from "react";
import Image from "next/image";

const Facebook = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Instagram = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const XLogo = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" stroke="none" fill="currentColor"/>
  </svg>
);

interface EventDetailSidebarProps {
  time: string;
  date: string;
  place: string;
  offerPrice: string;
}

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com" },
  { icon: XLogo, label: "X", href: "https://www.x.com" },
];

export default function EventDetailSidebar({
  time,
  date,
  place,
  offerPrice,
}: EventDetailSidebarProps) {
  return (
    <aside className="flex flex-col gap-8">
      {/* Event Details card */}
      <div className="border border-gray-300 bg-white p-6 sm:p-8">
        <h3 className="font-ubuntu text-[25px] font-bold leading-[28px] text-ink">
          Event Details
        </h3>
        <ul className="mt-6 flex flex-col gap-4">
          <li className="flex gap-2 font-inter text-[20px] leading-[30px] text-ink">
            <span className="text-orange">Place :</span> {place}
          </li>
          <li className="flex gap-2 font-inter text-[20px] leading-[30px] text-ink">
            <span className="text-orange">Date :</span> {date}
          </li>
          <li className="flex gap-2 font-inter text-[20px] leading-[30px] text-ink">
            <span className="text-orange">Time :</span> {time}
          </li>
        </ul>
      </div>

      {/* Follow Us card */}
      <div className="border border-gray-300 bg-white p-6 sm:p-8">
        <h3 className="font-ubuntu text-[25px] font-bold leading-[28px] text-ink">
          Follow Us
        </h3>
        <div className="mt-6 flex items-center gap-4">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex aspect-square w-[45px] items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-orange"
            >
              <Icon className="h-5 w-5" strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>

      {/* Offer promo card image */}
      <div className="overflow-hidden bg-white">
        <Image
          src="/images/event-single-offer-image.jpg"
          alt="Offer Promo"
          width={400}
          height={400}
          className="h-auto w-full object-cover"
        />
      </div>
    </aside>
  );
}
