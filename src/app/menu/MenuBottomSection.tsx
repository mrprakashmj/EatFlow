import Button from "@/components/ui/Button";
import Link from "next/link";

const dessertItems = [
  { name: "Pot Rice", desc: "Rice, vegetables, spices, oil, salt", price: "$ 10.38 USD", image: "/images/shop-image-03.png" },
  { name: "Mongolian Beef", desc: "Beef, soy sauce, garlic, ginger, green onions", price: "$ 72.85 USD", image: "/images/shop-image-04.png" },
  { name: "Broccoli with Meat", desc: "Broccoli, meat, soy sauce, garlic, ginger, green onions", price: "$ 42.85 USD", image: "/images/shop-image-02.png" },
  { name: "Orange Chicken", desc: "Chicken, orange juice, soy sauce, garlic, ginger", price: "$ 65.08 USD", image: "/images/shop-image-01.png" },
];

const beverageItems = [
  { name: "Fresh Cola", desc: "Serving a cola from a bottle to a glass", price: "$ 5.00 USD", image: "/images/shop-image-01.png" },
  { name: "Lemonade", desc: "Fresh lemons, sugar, water, ice", price: "$ 6.50 USD", image: "/images/shop-image-02.png" },
  { name: "Iced Tea", desc: "Black tea, lemon, mint, ice", price: "$ 4.00 USD", image: "/images/shop-image-03.png" },
  { name: "Mojito", desc: "White rum, sugar, lime juice, soda water, mint", price: "$ 8.00 USD", image: "/images/shop-image-04.png" },
];

export default function MenuBottomSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pt-20 pb-[320px] sm:pb-[260px] lg:pt-28 lg:pb-[230px]">
      {/* Desserts Section */}
      <div>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-[100px] lg:gap-y-0">
          
          {/* Left Side: Image and Title */}
          <div className="flex flex-col">
            <div className="mb-10">
              <h3 className="font-heading font-bold text-[32px] text-ink lg:text-[40px]">
                Desserts
              </h3>
            </div>
            <div 
              className="relative h-[500px] w-full overflow-hidden bg-cover bg-center lg:h-[580px]"
              style={{ backgroundImage: "url('/images/Desserts image.jpg')", backgroundColor: "#000" }}
            >
              {/* Note: Desserts section does not have the overlay text/badge in the design */}
            </div>
          </div>

          {/* Right Side: List */}
          <div className="flex flex-col justify-between mt-8 lg:mt-0 lg:h-[580px]">
            <div className="flex flex-col">
              {dessertItems.map((item, i) => (
                <Link 
                  href={`/shop/${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')}`}
                  key={item.name} 
                  className={`group flex flex-col sm:flex-row cursor-pointer items-start sm:items-center gap-4 sm:gap-6 ${i !== 0 ? 'pt-5 sm:pt-6' : ''} ${i !== dessertItems.length - 1 ? 'pb-5 sm:pb-6 border-b border-[#f0f0f0]' : ''}`}
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
      </div>

      {/* Beverages Section */}
      <div className="mt-20 lg:mt-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-[100px] lg:gap-y-0">
          
          {/* Left Side: List */}
          <div className="flex flex-col justify-between mt-8 lg:mt-0 lg:h-[580px] order-2 lg:order-1">
            <div className="flex flex-col">
              {beverageItems.map((item, i) => (
                <Link 
                  href={`/shop/${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')}`}
                  key={item.name} 
                  className={`group flex flex-col-reverse sm:flex-row cursor-pointer items-start sm:items-center gap-4 sm:gap-6 ${i !== 0 ? 'pt-5 sm:pt-6' : ''} ${i !== beverageItems.length - 1 ? 'pb-5 sm:pb-6 border-b border-[#f0f0f0]' : ''}`}
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
                Beverages
              </h3>
            </div>
            <div 
              className="relative h-[500px] w-full overflow-hidden bg-cover bg-center lg:h-[580px]"
              style={{ backgroundImage: "url('/images/Beverages image.jpg')", backgroundColor: "#000" }}
            >
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
