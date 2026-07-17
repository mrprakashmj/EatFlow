import SectionTitle from "@/components/ui/SectionTitle";

const points = [
  {
    icon: "/images/why-choose-icon-01.svg",
    title: "Premium Dining",
    copy: "An elite affair with great gastronomic pleasures.",
  },
  {
    icon: "/images/why-choose-icon-02.svg",
    title: "Expert Chef",
    copy: "Talented chef preparing amazing foods for you.",
  },
  {
    icon: "/images/why-choose-icon-03.svg",
    title: "Quick Serve",
    copy: "Quick, efficient dining with instant delivery on your table.",
  },
  {
    icon: "/images/why-choose-icon-04.svg",
    title: "Free Delivery",
    copy: "Enjoy free delivery service on us, right to your doorstep.",
  },
];

export default function ReservationWhyChooseUs() {
  return (
    <section className="bg-ink py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionTitle
          align="left"
          light
          eyebrow="Why Choose Us"
          heading="Healthy Foods for Happy Minds"
        />

        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {points.map(({ icon, title, copy }) => (
              <div key={title} className="flex flex-col gap-5">
                <span className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-yellow">
                  <img src={icon} alt={title} className="h-[32px] w-auto object-contain" />
                </span>
                <div>
                  <p className="font-inter font-semibold text-[22px] leading-[24px] text-white">
                    {title}
                  </p>
                  <p className="mt-3 max-w-[260px] font-inter font-normal text-[18px] leading-[27px] text-white">
                    {copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
