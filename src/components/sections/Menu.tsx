import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Link from "next/link";

const items = [
  { name: "Pepper Chicken", desc: "Chicken, black pepper, onions, spices", price: "$ 56.82 USD", image: "/images/shop-image-01.png" },
  { name: "Chicken Biryani", desc: "Chicken, rice, spices, onions, yogurt", price: "$ 38.92 USD", image: "/images/shop-image-02.png" },
  { name: "Pot Rice", desc: "Rice, vegetables, spices, oil, salt", price: "$ 10.38 USD", image: "/images/shop-image-03.png" },
  { name: "Mongolian Beef", desc: "Beef, soy sauce, garlic, ginger, green onions", price: "$ 72.85 USD", image: "/images/shop-image-04.png" },
];

export default function Menu() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-20 lg:py-28">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-0">
        <div className="lg:pb-10">
          <SectionTitle eyebrow="Food Menu" heading="Choose combo, order right away!" />
        </div>
        <div className="hidden lg:block"></div>

          <div 
            className="relative min-h-[250px] sm:min-h-[400px] lg:min-h-[580px] w-full overflow-hidden bg-cover bg-center rounded-[10px]"
            style={{ backgroundImage: "url('/images/menu-large - left.jpg')" }}
          >
            <div className="relative z-10 px-6 pt-8 sm:px-12 sm:pt-16 lg:pt-20">
              <p className="font-[family-name:var(--font-inter)] font-bold text-[14px] sm:text-[18px] uppercase tracking-wide text-white">
                TODAY SPECIAL
              </p>
              <p className="mt-1 font-[family-name:var(--font-inter)] font-black text-[32px] sm:text-[50px] lg:text-[55px] uppercase leading-tight text-yellow drop-shadow-[1px_7px_4.8px_rgba(0,0,0,0.5)]">
                TASTY FOOD
              </p>
            </div>

            {/* Badge */}
            <div className="absolute right-[5%] top-[15%] sm:top-[35%] sm:right-[10%] lg:right-[15%] z-20 flex h-[70px] w-[70px] sm:h-[120px] sm:w-[120px] drop-shadow-xl">
              <img 
                src="/images/menu-rating-icon.svg" 
                alt="Discount Badge" 
                className="absolute inset-0 h-full w-full object-contain"
              />
              <div className="relative flex h-full w-full items-center justify-center text-center">
                <span className="font-[family-name:var(--font-inter)] font-black uppercase leading-[1.1] text-[14px] sm:text-[24px] text-ink">
                  50%<br />off
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between lg:mt-0 lg:h-[580px]">
            <div className="flex flex-col">
              {items.map((item, i) => (
                <Link 
                  href={`/shop/${item.name.toLowerCase().replace(/ /g, '-')}`}
                  key={item.name} 
                  className={`group flex flex-col sm:flex-row cursor-pointer items-start sm:items-center gap-4 sm:gap-6 ${i !== 0 ? 'pt-5 sm:pt-6' : ''} ${i !== items.length - 1 ? 'pb-5 sm:pb-6 border-b border-[#f0f0f0]' : ''}`}
                >
                  <div className="flex h-[70px] w-[70px] sm:h-[80px] sm:w-[80px] shrink-0 items-center justify-center rounded-full bg-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.08)] border border-transparent transition-colors group-hover:border-orange">
                    <img src={item.image} alt={item.name} className="h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] rounded-full object-cover" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-center w-full">
                    <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2 sm:gap-3 w-full">
                      <p className="font-['Ubuntu',Helvetica,sans-serif] font-bold text-[18px] sm:text-[22px] lg:text-[24px] text-ink transition-colors group-hover:text-orange">
                        {item.name}
                      </p>
                      
                      {/* Mobile dashed line */}
                      <div className="block sm:hidden w-full border-b border-dashed border-ink/40 my-1" />
                      
                      {/* Desktop dashed line */}
                      <div className="hidden sm:block mb-[5px] min-w-[10px] sm:min-w-[75px] flex-1 border-b border-dashed border-ink/40" />
                      
                      <p className="whitespace-nowrap rounded-[4px] bg-[#ebebeb] px-3 py-[6px] font-['Ubuntu',Helvetica,sans-serif] font-bold text-[15px] sm:text-[17px] text-ink transition-colors group-hover:bg-green group-hover:text-white">
                        {item.price}
                      </p>
                    </div>
                    <p className="mt-3 sm:mt-2 text-[15px] sm:text-[18px] text-[#666] leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/menu" variant="orange" className="hover:bg-green">View Full Menu</Button>
            </div>
          </div>
        </div>
    </section>
  );
}
