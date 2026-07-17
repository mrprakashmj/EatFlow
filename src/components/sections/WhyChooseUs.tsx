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
    title: "Fast Serve On Table",
    copy: "Quick, efficient dining with instant delivery on your table.",
  },
  {
    icon: "/images/why-choose-icon-04.svg",
    title: "Free Delivery",
    copy: "Enjoy free delivery service on us, right to your doorstep.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 lg:py-28">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: "url('/images/why-choose- bg line.png')" }}
      />
      
      {/* Sushi Stick Image */}
      <img 
        src="/images/why-choose-overlay stick.png" 
        alt="Sushi Chopsticks" 
        className="absolute -right-[15%] top-[60%] z-10 hidden w-[65%] max-w-[800px] -translate-y-1/2 object-contain lg:block xl:-right-[5%]"
      />

      <div className="relative z-20 mx-auto max-w-[1200px] px-6">
        <SectionTitle
          align="center"
          light
          eyebrow="Why Choose Us"
          heading="Healthy Foods for Happy Minds"
          className="mx-auto max-w-[550px]"
        />

        <div className="mt-16 lg:w-[60%]">
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
            {points.map(({ icon, title, copy }) => (
              <div key={title} className="flex flex-col gap-4">
                <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-yellow">
                  <img src={icon} alt={title} className="h-[32px] w-auto object-contain" />
                </span>
                <div>
                  <p className="font-[family-name:var(--font-inter)] font-semibold text-[22px] leading-[24px] text-white">
                    {title}
                  </p>
                  <p className="mt-2 max-w-[260px] font-[family-name:var(--font-inter)] font-normal text-[18px] leading-[27px] text-white">
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
