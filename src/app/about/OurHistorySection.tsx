import Image from "next/image";
import SectionShell from "./SectionShell";
import SectionTitle from "@/components/ui/SectionTitle";

const milestones = [
  {
    year: "2015",
    title: "Food Truck Beginnings",
    body: "Mobile beginnings, street food served, building customer base.",
    image: "/images/history-card-01.jpg",
  },
  {
    year: "2020",
    title: "Growth and Transition",
    body: "Menu expansion, loyal reputation, and plans to convert to restaurant.",
    image: "/images/history-card-02.jpg",
  },
  {
    year: "2025",
    title: "Our Restaurant Opening",
    body: "Restaurant realization, grand opening, and successful celebration.",
    image: "/images/history-card-03.jpg",
  },
];

const stats = [
  { icon: "/images/history-point-icon-01.svg", value: "15+", label: "Years of Experience" },
  { icon: "/images/history-point-icon-02.svg", value: "95%", label: "Happy Eaters" },
  { icon: "/images/history-point-icon-03.svg", value: "12+", label: "Chef Medals" },
];

export default function OurHistorySection() {
  return (
    <SectionShell bg="ink" contentClassName="flex flex-col gap-16">
      <SectionTitle
        eyebrow="Our History"
        heading="Our Story Adventure"
        align="center"
        light={true}
        className="mx-auto"
      />

      {/* Timeline */}
      <ol className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
        {milestones.map((m, i) => (
          <li key={m.year} className="flex flex-col gap-[50px]">
            <div className="flex items-center gap-3">
              <div className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-full bg-[#201f27]">
                <span className="h-[10px] w-[10px] rounded-full bg-orange" />
              </div>
              <span className="font-ubuntu text-2xl font-bold text-white">
                {m.year}
              </span>
              {i < milestones.length - 1 && (
                <span className="hidden h-px flex-1 bg-white/20 md:block" />
              )}
            </div>

            {/* Milestone Card */}
            <div className="flex flex-col bg-[#201f27] p-6 lg:p-8 rounded-none border border-white/5">
              <p className="font-heading text-xl lg:text-2xl font-bold text-white mb-2">
                {m.title}
              </p>
              <p className="font-inter text-sm lg:text-base leading-relaxed text-white/70 mb-6">
                {m.body}
              </p>
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </li>
        ))}
      </ol>

      <div className="border-t-[2px] border-dashed border-[#37363E] pt-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:divide-x sm:divide-[#fff]/20">
          {stats.map(({ icon, value, label }) => (
            <div
              key={label}
              className="flex items-center gap-5 px-0 sm:px-8 sm:first:pl-0"
            >
              <div className="flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-full bg-yellow">
                <div className="relative h-[50px] w-[50px]">
                  <Image
                    src={icon}
                    alt={label}
                    fill
                    sizes="50px"
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-ubuntu text-[45px] font-bold leading-[45px] text-yellow">
                  {value}
                </span>
                <span className="font-inter text-[18px] font-normal leading-[27px] text-white">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
