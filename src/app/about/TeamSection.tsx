import Image from "next/image";
import SectionShell from "./SectionShell";
import SectionTitle from "@/components/ui/SectionTitle";

const chefs = [
  {
    name: "Alex Johnson",
    role: "Head Chef",
    image: "/images/About_team-image-01.jpg",
  },
  {
    name: "Michael Ramirez",
    role: "Sous Chef",
    image: "/images/About_team-image-02.jpg",
  },
  {
    name: "David Thompson",
    role: "Pastry Chef",
    image: "/images/About_team-image-03.jpg",
  },
];

const socials = [
  {
    name: "Instagram",
    normal: "/images/About_team-social-icon-01.svg",
    hover: "/images/About_team-social-icon-01%20hovor.svg",
    href: "https://instagram.com",
  },
  {
    name: "Facebook",
    normal: "/images/About_team-social-icon-02.svg",
    hover: "/images/About_team-social-icon-02%20hovor.svg",
    href: "https://facebook.com",
  },
  {
    name: "X",
    normal: "/images/About_team-social-icon-03.svg",
    hover: "/images/About_team-social-icon-03%20hovor.svg",
    href: "https://x.com",
  },
];

export default function TeamSection() {
  return (
    <SectionShell bg="white" contentClassName="flex flex-col gap-14">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionTitle
          eyebrow="Best Chefs"
          heading="Introducing Our Chefs"
          align="left"
        />
        <a
          href="#join"
          className="inline-flex items-center justify-center bg-orange px-8 py-4 font-ubuntu text-base font-medium text-white transition-colors hover:bg-ink shrink-0"
        >
          Join Our Team
        </a>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {chefs.map((chef) => (
          <div
            key={chef.name}
            className="flex flex-col gap-6 border border-[#e2e2e2] bg-white p-8 hover:bg-cream transition-all duration-300 ease-in-out"
          >
            <div className="flex flex-col gap-1">
              <h3 className="font-ubuntu text-[25px] font-semibold text-ink">
                {chef.name}
              </h3>
              <p className="font-inter text-[18px] text-muted">{chef.role}</p>
            </div>

            <div className="relative mx-auto my-[50px] h-[245px] w-[245px] overflow-hidden rounded-full">
              <Image
                src={chef.image}
                alt={chef.name}
                fill
                sizes="245px"
                className="object-cover"
              />
            </div>

            <div className="border-t border-[#e2e2e2]" />

            <div className="flex items-center justify-center gap-3">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${chef.name} ${social.name}`}
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f5f5] transition-colors hover:bg-ink"
                >
                  <img
                    src={social.normal}
                    alt={social.name}
                    className="h-[18px] w-auto transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img
                    src={social.hover}
                    alt={`${social.name} Hover`}
                    className="absolute h-[18px] w-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
