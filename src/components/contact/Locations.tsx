import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";

const branches = [
  {
    city: "London",
    address: ["The Shard, 31 London Bridge Street,", "London SE1 9SG, United Kingdom"],
    image: "/images/contact-image-1.jpg"
  },
  {
    city: "California",
    address: ["753 Main Street, Anytown, CA 84634, United States."],
    image: "/images/contact-image-2.jpg"
  },
];

export default function Locations() {
  return (
    <section className="bg-white px-[20px]">
      <div className="container mx-auto max-w-[1200px] py-10 md:py-20">
        <div className="flex justify-center mb-14">
          <SectionTitle
            eyebrow="Location"
            heading="Visit us Our Branches"
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {branches.map((branch) => (
            <div key={branch.city} className="group relative w-full overflow-hidden">
              <Image
                src={branch.image}
                alt={branch.city}
                width={580}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-4 sm:inset-6 lg:inset-8 bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6 sm:p-8">
                <h3 className="font-ubuntu font-bold text-ink text-2xl sm:text-3xl mb-4">
                  {branch.city}
                </h3>
                <p className="font-inter font-medium text-ink/70 text-[16px] tracking-[0.15em] uppercase mb-2">
                  Address:
                </p>
                <p className="font-inter text-ink text-[20px] font-medium">
                  {branch.address[0]}
                  <br />
                  {branch.address[1]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
