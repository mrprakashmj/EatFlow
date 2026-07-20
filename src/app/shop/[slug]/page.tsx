import Image from "next/image";
import { notFound } from "next/navigation";
import { menuItems } from "@/data/menu";
import AddToCartForm from "@/components/shop/AddToCartForm";
import Testimonial from "@/components/sections/Testimonial";
import Link from "next/link";

export default async function SingleItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const item = menuItems.find((i) => i.slug === resolvedParams.slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="bg-ink min-h-screen mb-[150px]">
      <div className="container mx-auto max-w-[1200px] px-6 pt-[50px] pb-[100px]">

        {/* Breadcrumb / Back Link */}
        <div className="mb-12">
          <Link href="/shop" className="text-white/60 hover:text-orange transition-colors font-inter text-[14px]">
            &larr; Back to Menu
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column: Image */}
          <div className="relative w-full max-w-[500px] aspect-square mx-auto lg:mx-0">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 500px"
              priority
            />
          </div>

          {/* Right Column: Details */}
          <div className="flex flex-col">

            {/* Veg/Non-veg Indicator */}
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={item.isVeg ? "/images/shop-icon veg.svg" : "/images/shop-icon-non veg.svg"}
                alt={item.isVeg ? "Veg" : "Non-veg"}
                width={16}
                height={16}
              />
              <span className="font-inter text-[14px] text-white">
                {item.isVeg ? "Veg" : "Non-veg"}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-ubuntu text-[48px] sm:text-[56px] font-bold text-white leading-tight mb-8">
              {item.name}
            </h1>

            <div className="h-[1px] w-full bg-white/10 mb-8" />

            {/* Description */}
            <p className="font-inter text-[16px] leading-[28px] text-white/80 mb-8 max-w-[500px]">
              {/* Using a placeholder text if the user wants exactly what's in the screenshot, or use item.description */}
              {/* Screenshot says: "From climate emergency to food security, the way we farm is key to form which don't look even slightly believable." */}
              From climate emergency to food security, the way we farm is key to form which don't look even slightly believable.
              <br /><br />
              {item.description}
            </p>

            {/* Price */}
            <div className="flex items-end gap-4 mb-8">
              <span className="font-inter text-[32px] sm:text-[40px] font-bold text-orange leading-none">
                {item.price}
              </span>
              {item.originalPrice && (
                <span className="font-inter text-[18px] text-[#A98E71] line-through mb-1">
                  {item.originalPrice}
                </span>
              )}
            </div>

            <div className="h-[1px] w-full bg-white/10 mb-8" />

            {/* Quantity & Add to Cart */}
            <div className="mb-8">
              <AddToCartForm item={item} />
            </div>

            <div className="h-[1px] w-full bg-white/10 mb-8" />

            {/* Social Share */}
            <div className="flex items-center gap-6">
              <span className="font-inter text-[16px] font-bold text-white">Share this:</span>
              <div className="flex gap-4">
                {/* Re-using the popup icons from the navbar for social sharing */}
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="group relative flex h-6 w-6 items-center justify-center text-white transition-colors">
                  <img src="/images/popup-icon-01.svg" alt="Facebook" className="absolute transition-opacity duration-300 group-hover:opacity-0 w-full h-full object-contain opacity-80" />
                  <img src="/images/popup-icon-01%20hovor.svg" alt="Facebook Hover" className="absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100 w-full h-full object-contain" />
                </a>
                <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="group relative flex h-6 w-6 items-center justify-center text-white transition-colors">
                  <img src="/images/popup-icon-03.svg" alt="X" className="absolute transition-opacity duration-300 group-hover:opacity-0 w-full h-full object-contain opacity-80" />
                  <img src="/images/popup-icon-03%20hovor.svg" alt="X Hover" className="absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100 w-full h-full object-contain" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="group relative flex h-6 w-6 items-center justify-center text-white transition-colors">
                  <img src="/images/popup-icon-04.svg" alt="LinkedIn" className="absolute transition-opacity duration-300 group-hover:opacity-0 w-full h-full object-contain opacity-80" />
                  <img src="/images/popup-icon-04%20hovor.svg" alt="LinkedIn Hover" className="absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100 w-full h-full object-contain" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="group relative flex h-6 w-6 items-center justify-center text-white transition-colors">
                  <img src="/images/popup-icon-02.svg" alt="Instagram" className="absolute transition-opacity duration-300 group-hover:opacity-0 w-full h-full object-contain opacity-80" />
                  <img src="/images/popup-icon-02%20hovor.svg" alt="Instagram Hover" className="absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100 w-full h-full object-contain" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white ">
        <Testimonial />
      </div>

    </main>
  );
}
