import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Link from "next/link";

const items = [
  { name: "Pepper Chicken", desc: "Chicken, black pepper, onions, spices", price: "$ 56.82 USD", image: "/images/shop-image-01.png" },
  { name: "Chicken Biryani", desc: "Chicken, rice, spices, onions, yogurt", price: "$ 38.92 USD", image: "/images/shop-image-02.png" },
  { name: "Pot Rice", desc: "Rice, vegetables, spices, oil, salt", price: "$ 10.38 USD", image: "/images/shop-image-03.png" },
  { name: "Mongolian Beef", desc: "Beef, soy sauce, garlic, ginger, green onions", price: "$ 72.85 USD", image: "/images/shop-image-04.png" },
];

const mainCourseItems = [
  { name: "Chicken Biryani", desc: "Chicken, rice, spices, onions, yogurt", price: "$ 38.92 USD", image: "/images/shop-image-02.png" },
  { name: "Pot Rice", desc: "Rice, vegetables, spices, oil, salt", price: "$ 10.38 USD", image: "/images/shop-image-03.png" },
  { name: "Mongolian Beef", desc: "Beef, soy sauce, garlic, ginger, green onions", price: "$ 72.85 USD", image: "/images/shop-image-04.png" },
  { name: "Broccoli with Meat", desc: "Broccoli, meat, soy sauce, garlic, ginger, green onions", price: "$ 42.85 USD", image: "/images/shop-image-01.png" },
];



export default function MenuSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-20 lg:py-28">
      <SectionTitle
        eyebrow="MENU"
        heading="Take Your Dining Experience Higher"
        align="center"
        className="mx-auto mb-8 max-w-[600px] lg:mb-10"
      />

      <div className="mb-10">
        <h3 className="font-heading font-bold text-[32px] text-ink lg:text-[40px]">
          Appetizers
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-0">
        <div
          className="relative h-[500px] w-full overflow-hidden bg-cover bg-center lg:h-[580px]"
          style={{ backgroundImage: "url('/images/Appetizers menu image.jpg')" }}
        >
          <div className="relative z-10 px-8 pt-16 sm:px-12 lg:pt-20">
            <p className="font-[family-name:var(--font-inter)] font-bold text-[18px] uppercase tracking-wide text-yellow">
              TODAY SPECIAL
            </p>
            <p className="mt-1 font-[family-name:var(--font-inter)] font-black text-[45px] uppercase leading-tight text-yellow drop-shadow-[1px_7px_4.8px_rgba(0,0,0,0.5)] sm:text-[55px]">
              TASTY FOOD
            </p>
          </div>

          {/* Badge */}
          <div className="absolute left-8 top-[55%] sm:top-[50%] lg:top-[35%] z-20 flex h-[120px] w-[120px] drop-shadow-xl lg:left-[10%]">
            <img
              src="/images/menu-rating-icon yellow.svg"
              alt="Discount Badge"
              className="absolute inset-0 h-full w-full object-contain"
            />
            <div className="relative flex h-full w-full items-center justify-center text-center">
              <span className="font-[family-name:var(--font-inter)] font-black uppercase leading-[1.1] text-[24px] text-ink">
                50%<br />off
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between lg:h-[580px]">
          <div className="flex flex-col">
              {items.map((item, i) => (
                <Link 
                  href={`/shop/${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')}`}
                  key={item.name} 
                  className={`group flex flex-col sm:flex-row cursor-pointer items-start sm:items-center gap-4 sm:gap-6 ${i !== 0 ? 'pt-5 sm:pt-6' : ''} ${i !== items.length - 1 ? 'pb-5 sm:pb-6 border-b border-[#f0f0f0]' : ''}`}
                >
                  <div className="flex h-[70px] w-[70px] sm:h-[80px] sm:w-[80px] shrink-0 items-center justify-center rounded-full bg-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.08)] border border-transparent transition-colors group-hover:border-orange">
                    <img src={item.image} alt={item.name} className="h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] rounded-full object-cover" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-center w-full">
                    <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2 sm:gap-3 w-full">
                      <p className="font-['Ubuntu',Helvetica,sans-serif] font-bold text-[18px] sm:text-[22px] lg:text-[24px] text-ink whitespace-nowrap transition-colors group-hover:text-orange">
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
                    <p className="mt-3 sm:mt-2 text-[15px] sm:text-[18px] text-[#666] leading-snug truncate w-full">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              ))}
          </div>

          <div className="mt-8 flex justify-start">
            <Button href="/shop" variant="ink" className="hover:bg-[#fb5629] hover:text-white transition-all duration-300 ease-in-out">Order Now</Button>
          </div>
        </div>
      </div>

      {/* Main Courses Section */}
      <div className="mt-20 lg:mt-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-0">

          {/* Left Side: List */}
          <div className="flex flex-col justify-between mt-8 lg:mt-0 lg:h-[580px] order-2 lg:order-1">
            <div className="flex flex-col">
              {mainCourseItems.map((item, i) => (
                <Link 
                  href={`/shop/${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')}`}
                  key={item.name} 
                  className={`group flex flex-col-reverse sm:flex-row cursor-pointer items-start sm:items-center gap-4 sm:gap-6 ${i !== 0 ? 'pt-5 sm:pt-6' : ''} ${i !== mainCourseItems.length - 1 ? 'pb-5 sm:pb-6 border-b border-[#f0f0f0]' : ''}`}
                >
                  <div className="flex min-w-0 flex-1 flex-col justify-center w-full">
                    <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2 sm:gap-3 w-full">
                      <p className="font-['Ubuntu',Helvetica,sans-serif] font-bold text-[18px] sm:text-[22px] lg:text-[24px] text-ink whitespace-nowrap transition-colors group-hover:text-orange">
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
                    <p className="mt-3 sm:mt-2 text-[15px] sm:text-[18px] text-[#666] leading-snug truncate w-full">
                      {item.desc}
                    </p>
                  </div>
                  <div className="flex h-[70px] w-[70px] sm:h-[80px] sm:w-[80px] shrink-0 items-center justify-center rounded-full bg-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.08)] border border-transparent transition-colors group-hover:border-orange">
                    <img src={item.image} alt={item.name} className="h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] rounded-full object-cover" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex justify-start">
              <Button href="/shop" variant="ink" className="hover:bg-[#fb5629] hover:text-white transition-all duration-300 ease-in-out">Order Now</Button>
            </div>
          </div>

          {/* Right Side: Image and Title */}
          <div className="flex flex-col order-1 lg:order-2">
            <div className="mb-10">
              <h3 className="font-heading font-bold text-[32px] text-ink lg:text-[40px]">
                Main Courses
              </h3>
            </div>
            <div
              className="relative h-[500px] w-full overflow-hidden bg-cover bg-center lg:h-[580px]"
              style={{ backgroundImage: "url('/images/Main Courses image.jpg')", backgroundColor: "#000" }}
            >
              <div className="relative z-10 px-8 pt-16 sm:px-12 lg:pt-20">
                <p className="font-[family-name:var(--font-inter)] font-bold text-[18px] uppercase tracking-wide text-yellow">
                  TODAY SPECIAL
                </p>
                <p className="mt-1 font-[family-name:var(--font-inter)] font-black text-[45px] uppercase leading-tight text-yellow drop-shadow-[1px_7px_4.8px_rgba(0,0,0,0.5)] sm:text-[55px]">
                  TASTY FOOD
                </p>
              </div>

              {/* Badge */}
              <div className="absolute right-8 top-[55%] sm:top-[50%] lg:top-[35%] z-20 flex h-[120px] w-[120px] drop-shadow-xl lg:right-8">
                <img
                  src="/images/menu-rating-icon-red.svg"
                  alt="Discount Badge"
                  className="absolute inset-0 h-full w-full object-contain"
                />
                <div className="relative flex h-full w-full items-center justify-center text-center">
                  <span className="font-[family-name:var(--font-inter)] font-black uppercase leading-[1.1] text-[24px] text-white">
                    50%<br />off
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
