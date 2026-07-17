import Image from "next/image";
import { Star } from "lucide-react";
import Button from "@/components/ui/Button";

const stats = [
  { icon: "/images/offer-service-01.svg", label: "Discount\nVoucher" },
  { icon: "/images/offer-service-02.svg", label: "Fresh\nHealthy Food" },
  { icon: "/images/offer-service-03.svg", label: "Fast Serve\nOn Table" },
];

const avatars = [
  { src: "/images/recipe-image-01.jpg", alt: "Recipe 1" },
  { src: "/images/recipe-image-02.jpg", alt: "Recipe 2" },
  { src: "/images/recipe-image-03.jpg", alt: "Recipe 3" },
  { src: "/images/recipe-image-04.jpg", alt: "Recipe 4" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Full-bleed food photograph — bowl shifted right via objectPosition */}
      <div className="absolute inset-0 lg:left-[25%] lg:top-[-15%] lg:w-[85%]">
        <Image
          src="/images/home-banner-image.jpg"
          alt="Steaming bowl of delicious food"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 85vw"
          style={{ objectFit: "cover", objectPosition: "right center" }}
        />
      </div>
      {/* Gradient: solid ink on far-left for text, fades to transparent by ~55% */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" style={{ backgroundSize: '55% 100%', backgroundRepeat: 'no-repeat' }} />
      <div className="absolute inset-0 bg-gradient-to-r from-ink from-[30%] via-transparent to-transparent" />

      {/* Hero content */}
      <div className="relative mx-auto max-w-[1690px] px-6 pt-[150px] pb-[110px] lg:pt-[150px] lg:pb-[160px]">
        <h1 className="font-heading font-bold text-white text-[42px] leading-[1.15] sm:text-[56px] lg:text-[80px] lg:leading-[1.2] max-w-[690px]">
          Enjoy <span className="text-orange">Healthy</span> and{" "}
          <span className="text-orange">Delicious</span> Food
        </h1>

        <p className="mt-6 max-w-[680px] text-[17px] sm:text-[18px] leading-[1.6] text-white/85">
          Connect with other health enthusiasts in the EatFlow food community.
          Share tips, recipes, and support each other in your journey towards
          better habits.
        </p>

        <div className="mt-10 flex flex-wrap gap-5">
          <Button href="#" variant="green" className="hover:bg-[#fb5629]">Online Ordering</Button>
          <Button href="#" variant="orange" className="hover:bg-[#ffce53]">Reserve Table</Button>
        </div>

        {/* Stacked food avatars + rating */}
        <div className="mt-14 flex items-center gap-4">
          <div className="flex -space-x-3">
            {avatars.map(({ src, alt }, i) => (
              <span
                key={i}
                className="relative h-[55px] w-[55px] rounded-full border-[2px] border-white overflow-hidden block"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="55px"
                  style={{ objectFit: "cover" }}
                />
              </span>
            ))}
          </div>
          <div>
            <p className="font-heading font-medium text-[18px] sm:text-[20px] text-white">
              500+ Recipes
            </p>
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-yellow text-yellow" />
              <span className="text-[14px] text-white/90">4.8 (12k reviews)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stat strip */}
      <div className="relative border-white/15">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 px-6 sm:grid-cols-3">
          {stats.map(({ icon, label }, index) => (
            <div key={label} className="relative flex items-center gap-4 py-6 sm:justify-center sm:py-8">
              <span className="flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-full bg-yellow text-ink">
                <img src={icon} alt="" className="h-10 w-10" />
              </span>
              <span className="font-sans font-semibold text-[25px] leading-[28px] text-white whitespace-pre-line">
                {label}
              </span>
              {index < stats.length - 1 && (
                <div className="hidden sm:block absolute right-0 top-1/2 h-[85px] w-[1px] -translate-y-1/2 bg-white/15" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
