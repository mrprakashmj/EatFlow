import Image from "next/image";
import SectionShell from "./SectionShell";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

const features = [
  {
    icon: "/images/about _intro-icon-01.svg",
    title: "Premium Dining",
    body: "An elite affair with great gastronomic pleasures.",
  },
  {
    icon: "/images/about _intro-icon-02.svg",
    title: "Expert Chef",
    body: "Talented chef preparing amazing foods.",
  },
];

export default function AboutSection() {
  return (
    <SectionShell
      bg="white"
      contentClassName="grid grid-cols-1 items-center gap-12 lg:grid-cols-[547px_1fr] lg:gap-[60px]"
    >
      {/* Image container – sharp corners as per mockup */}
      <div className="relative order-2 aspect-square md:aspect-[4/4.5] w-full max-w-[547px] overflow-hidden lg:order-1">
        <Image
          src="/images/About.jpg"
          alt="About Us"
          fill
          sizes="(max-width: 1200px) 100vw, 547px"
          className="object-cover"
          priority
        />
      </div>

      <div className="order-1 flex flex-col gap-8 lg:order-2">
        <SectionTitle
          eyebrow="About Us"
          heading="Wellness Begins with Food"
          align="left"
          className="max-w-[637px]"
        />

        <p className="font-inter max-w-[629px] text-base leading-relaxed text-muted md:text-lg">
          At our restaurant, we believe that wellness begins with what you
          eat. We are passionate about creating recipes that not only taste
          good but also nurture the body and soul.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {features.map(({ icon, title, body }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-none border border-[#e2e2e2] bg-white p-6 transition-all duration-300 hover:shadow-[0_12px_11px_#cfcfcf40]"
            >
              <div className="relative h-12 w-12 shrink-0">
                <Image
                  src={icon}
                  alt={title}
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-ubuntu text-xl font-bold text-ink">
                  {title}
                </p>
                <p className="font-inter text-sm leading-relaxed text-muted">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-8 pt-2">
          <Button href="#order" variant="ink" className="hover:!bg-[#ffce53] hover:!text-ink">Online Ordering</Button>

          <a
            href="tel:5646434345"
            className="flex items-center gap-4 text-ink"
          >
            <div className="flex h-[55px] w-[55px] shrink-0 items-center justify-center rounded-full border-[6px] border-orange/20 bg-orange bg-clip-padding">
              <div className="relative h-[22px] w-[22px]">
                <Image
                  src="/images/_story-call-icon.svg"
                  alt="Call Icon"
                  fill
                  sizes="22px"
                  className="object-contain"
                />
              </div>
            </div>
            <span className="flex flex-col">
              <span className="font-inter text-sm text-ink/70">
                For quick orders
              </span>
              <span className="font-inter text-xl font-bold text-orange transition-all duration-300 hover:text-[#29af66]">
                (564)-643-4345
              </span>
            </span>
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
