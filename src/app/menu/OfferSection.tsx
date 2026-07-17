import React from "react";

export default function OfferSection() {
  return (
    <section className="mx-auto max-w-[1720px] px-6 pb-20 lg:pb-28">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">

        {/* Card 1 */}
        <div
          className="relative min-h-[490px] w-full overflow-hidden bg-cover bg-center "
          style={{ backgroundImage: "url('/images/menu-card-image-1.jpg')" }}
        >
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent opacity-80"></div>
          
          {/* Content */}
          <div className="relative z-10 p-8 sm:p-12">
            <h3 className="font-heading font-bold text-[50px] leading-none lg:text-[70px] text-orange drop-shadow-md">
              Grill Chicken
            </h3>
            <p className="mt-3 font-[family-name:var(--font-inter)] text-[18px] text-white">
              Grilled juicy steak cooking in fire
            </p>
          </div>

          {/* Badge */}
          <div className="absolute right-6 top-[15%] lg:right-[15%] lg:top-[20%] z-20 flex h-[140px] w-[140px] lg:h-[180px] lg:w-[180px] drop-shadow-xl">
            <img 
              src="/images/menu-rating-inner-star 1.svg" 
              alt="50% Off Badge" 
              className="absolute inset-0 h-full w-full object-contain"
            />
            <div className="relative flex h-full w-full flex-col items-center justify-center text-center pt-1">
              <span className="font-[family-name:var(--font-inter)] font-bold text-[34px] lg:text-[42px] leading-none text-orange">
                50%
              </span>
              <span className="font-[family-name:var(--font-inter)] font-bold text-[24px] lg:text-[30px] leading-[1.2] text-ink">
                OFF
              </span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div 
          className="relative min-h-[490px] w-full overflow-hidden bg-cover bg-center "
          style={{ backgroundImage: "url('/images/menu-card-image-2.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent opacity-80"></div>

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-12">
            <h3 className="font-heading font-bold text-[50px] leading-none lg:text-[70px] text-orange drop-shadow-md">
              Cool Drinks
            </h3>
            <p className="mt-3 font-[family-name:var(--font-inter)] text-[18px] text-white">
              Serving a cola from a bottle to a glass
            </p>
          </div>

          {/* Badge */}
          <div className="absolute left-6 top-[55%] -translate-y-1/2 lg:left-[10%] z-20 flex h-[140px] w-[140px] lg:h-[180px] lg:w-[180px] drop-shadow-xl">
            <img 
              src="/images/menu-rating-inner-star-2.svg" 
              alt="$29.99 for 2 Person" 
              className="absolute inset-0 h-full w-full object-contain"
            />
            <div className="relative flex h-full w-full flex-col items-center justify-center text-center pt-1">
              <span className="font-[family-name:var(--font-inter)] font-bold text-[28px] lg:text-[36px] leading-none text-orange">
                $29.99
              </span>
              <span className="font-[family-name:var(--font-inter)] font-bold text-[18px] lg:text-[24px] leading-[1.4] text-ink">
                2 Person
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
