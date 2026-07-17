import Image from "next/image";

const categories = [
  { label: "All" },
  { label: "Starters" },
  { label: "Appetizers" },
  { label: "Main Courses" },
];

const socials = [
  { label: "Instagram", icon: "/images/Shop social Icon 1.svg", hoverIcon: "/images/Shop social Icon 1 hovor.svg" },
  { label: "Facebook", icon: "/images/Shop social Icon 2.svg", hoverIcon: "/images/Shop social Icon 2 hovor.svg" },
  { label: "Twitter", icon: "/images/Shop social Icon 3.svg", hoverIcon: "/images/Shop social Icon 3 hovor.svg" },
  { label: "Pinterest", icon: "/images/Shop social Icon 4.svg", hoverIcon: "/images/Shop social Icon 4 hovor.svg" },
];

export default function MenuSidebar({ 
  activeCategory, 
  onCategoryChange 
}: { 
  activeCategory: string; 
  onCategoryChange: (category: string) => void;
}) {
  return (
    <aside className="content-sidebar flex w-full flex-col gap-12">
      {/* Menu categories */}
      <div className="border-b border-hairline/60 pb-10">
        <h3 className="font-ubuntu text-[22px] font-bold leading-[33px] text-ink">Menu Category</h3>
        <ul className="mt-8 flex flex-col gap-5">
          {categories.map((category) => {
            const isActive = activeCategory === category.label;
            return (
              <li key={category.label}>
                <button
                  type="button"
                  onClick={() => onCategoryChange(category.label)}
                  className={`flex items-center gap-3 text-left font-inter text-[16px] transition-colors hover:text-orange ${
                    isActive ? "text-orange font-medium" : "text-ink/80"
                  }`}
                >
                  <span className={`flex size-[18px] items-center justify-center rounded-full border ${isActive ? "border-orange" : "border-ink/70"}`}>
                    {isActive && <span className="size-2 rounded-full bg-orange" />}
                  </span>
                  {category.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Special offer card */}
      <div className="relative flex flex-col items-center gap-4 px-8 py-12 text-center overflow-hidden bg-[#fdf5f0]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/offer-card bg.png"
            alt="Offer Background"
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-4 flex size-[120px] items-center justify-center overflow-hidden rounded-full border-4 border-white shadow-sm">
            <div className="relative h-full w-full bg-white">
              <Image src="/images/food 1.png" alt="Broccoli with Meat" fill sizes="120px" className="object-cover" />
            </div>
          </div>
          <h4 className="font-ubuntu text-[22px] font-bold leading-[33px] text-ink">Broccoli with Meat</h4>
          <p className="mt-3 text-[15px] leading-[1.6] text-ink/70">
            From climate emergency to food security, the way we farm is key to form
            which don't look even slightly believable.
          </p>
          <p className="mt-5 font-inter text-[16px] font-bold text-ink">
            Available at : $ 42.85 USD
          </p>
          <button
            type="button"
            className="mt-6 bg-ink px-10 py-3.5 font-inter text-[16px] font-bold text-white transition-colors hover:bg-orange hover:cursor-pointer"
          >
            Order Now
          </button>
        </div>
      </div>

      {/* Follow us */}
      <div className="border-b border-hairline/60 pb-10">
        <h3 className="font-ubuntu text-[22px] font-bold leading-[33px] text-ink">Follow Us</h3>
        <ul className="mt-8 flex flex-wrap gap-4">
          {socials.map(({ label, icon, hoverIcon }) => (
            <li key={label}>
              <a
                href="#"
                className="group relative flex items-center gap-2.5 rounded-full border border-hairline/60 px-5 py-2.5 text-[15px] text-ink transition-colors hover:border-orange hover:bg-orange hover:text-white"
              >
                <div className="relative size-4">
                  <Image src={icon} alt={label} fill sizes="16px" className="object-contain transition-opacity duration-300 group-hover:opacity-0" />
                  <Image src={hoverIcon} alt={label} fill sizes="16px" className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
