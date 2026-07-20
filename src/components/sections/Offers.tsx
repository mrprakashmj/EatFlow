import SectionTitle from "@/components/ui/SectionTitle";
import Link from "next/link";

export default function Offers() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-20 lg:py-28">
      <SectionTitle
        align="center"
        eyebrow="Every Bite: A Crispy Delight"
        heading="Highly Rated Eats"
        className="mx-auto"
      />

      <div className="mt-14 flex flex-col gap-6 lg:flex-row">
        {/* Card 1 - Burger Special (tall, left column) */}
        <div
          className="relative flex h-[340px] w-full shrink-0 flex-col items-center overflow-hidden bg-[#111111] sm:h-[380px] lg:h-auto lg:w-[320px] xl:w-[360px]"
          style={{ backgroundImage: "url('/images/offer-list-bg-image- card one.png')" }}
        >
          <div className="relative z-10 pt-10 text-center">
            <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] sm:text-[18px] uppercase tracking-wide text-white">
              Burger Special
            </p>
            <p className="mt-1 font-[family-name:var(--font-inter)] font-black text-[38px] sm:text-[42px] xl:text-[45px] uppercase leading-tight text-yellow drop-shadow-[1px_7px_4.8px_rgba(60,60,60,0.39)]">
              Tasty Food
            </p>
          </div>

          {/* Badge */}
          <div className="absolute right-6 top-[110px] sm:top-[130px] z-20 flex h-[90px] w-[90px] sm:h-[100px] sm:w-[100px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            <img
              src="/images/offer-rating-pattern bg.svg"
              alt="Offer Badge Background"
              className="absolute inset-0 h-full w-full object-contain"
            />
            <div className="relative flex h-full w-full items-center justify-center text-center">
              <span className="font-[family-name:var(--font-inter)] font-extrabold uppercase leading-[1.1] text-[20px] sm:text-[22px] text-ink">
                35%<br />off
              </span>
            </div>
          </div>

          <img
            src="/images/offer-list-image-01.png"
            alt="Tasty Burgers"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 object-contain max-h-[65%]"
          />
        </div>

        {/* Right Column Container */}
        <div className="flex flex-1 flex-col gap-6">
          {/* Top Row: Cards 2 & 3 */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            {/* Card 2 - Mushroom Burger */}
            <div className="relative flex h-[220px] sm:h-[245px] flex-col justify-center overflow-hidden bg-[#222]">
              <img
                src="/images/offer-list-image-02-p-800.jpg"
                alt="Mushroom Burger"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-[#111]/90 via-[#111]/40 to-transparent" />

              <div className="relative z-10 pr-6 text-right sm:pl-20">
                <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] sm:text-[18px] uppercase tracking-wide text-white">
                  Mushroom
                </p>
                <p className="mt-1 font-[family-name:var(--font-inter)] font-black text-[32px] sm:text-[34px] lg:text-[38px] xl:text-[45px] uppercase leading-tight text-yellow drop-shadow-[1px_7px_4.8px_rgba(0,0,0,0.5)]">
                  Burger
                </p>
                <div className="mt-3 flex justify-end">
                  <Link href="/menu" className="flex h-[44px] sm:h-[45px] w-[120px] sm:w-[130px] items-center justify-center bg-orange font-heading font-medium text-[16px] text-white transition-colors hover:bg-green">
                    Order Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 - Friday Special Noodles */}
            <div
              className="relative flex h-[220px] sm:h-[245px] flex-col justify-center bg-[#ffce53] overflow-visible"
              style={{ backgroundImage: "url('/images/offer-list-bg-image- card three.png')" }}
            >
              <img
                src="/images/offer-list-image-03.png"
                alt="Noodles"
                className="absolute bottom-0 left-[2%] sm:left-[4%] z-0 h-[200px] sm:h-[295px] w-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
              />
              <div className="relative z-10 pl-[40%] sm:pl-[36%] xl:pl-[38%] pr-4 sm:pr-6 text-left">
                <p className="font-[family-name:var(--font-inter)] font-normal text-[15px] sm:text-[18px] text-ink">
                  Friday Special
                </p>
                <p className="mt-1 font-[family-name:var(--font-inter)] font-black text-[32px] sm:text-[34px] lg:text-[38px] xl:text-[45px] uppercase leading-tight text-ink">
                  Noodles
                </p>
                <Link href="/menu" className="mt-3 flex h-[44px] sm:h-[45px] w-[120px] sm:w-[130px] items-center justify-center bg-[#111] font-heading font-medium text-[16px] text-white transition-colors hover:bg-green">
                  Order Now
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4 - 50% Offer banner */}
          <div
            className="relative flex min-h-[170px] sm:min-h-[190px] flex-col justify-center overflow-hidden bg-[#4ab461] px-6 sm:px-8 py-8 sm:py-10 sm:flex-row sm:items-center sm:justify-start"
            style={{ backgroundImage: "url('/images/offer-list-bg-image- card four.png')" }}
          >
            <div className="relative z-10 text-left sm:text-left w-[65%] sm:w-auto">
              <p className="font-[family-name:var(--font-inter)] font-normal text-[15px] sm:text-[18px] uppercase tracking-wide text-white">
                For Limited Time Only
              </p>
              <p className="mt-1 font-[family-name:var(--font-inter)] font-black text-[32px] sm:text-[38px] xl:text-[45px] leading-tight text-white drop-shadow-sm">
                50% Offer
              </p>
            </div>

            <div className="relative z-10 mt-5 flex justify-start sm:ml-12 sm:mt-0">
              <Link href="/menu" className="flex h-[44px] sm:h-[45px] w-[140px] items-center justify-center bg-white font-heading font-bold text-[16px] sm:text-[17px] text-ink transition-colors hover:bg-orange hover:text-white">
                Order Now
              </Link>
            </div>

            <img
              src="/images/offer-list-image-04.png"
              alt="Chicken Nuggets"
              className="absolute -right-12 top-1/2 h-[180px] sm:h-[260px] w-auto -translate-y-1/2 object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.25)] sm:-right-16 lg:-right-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

