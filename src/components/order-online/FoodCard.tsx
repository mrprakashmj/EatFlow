"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { type FoodItem } from "@/data/menu";

export default function FoodCard({ item, searchQuery = "" }: { item: FoodItem, searchQuery?: string }) {
  const { name, description, price, originalPrice, badge, featured, image, isVeg } = item;
  const { addToCart } = useCart();

  const renderHighlighted = (text: string, highlight: string) => {
    if (!highlight.trim()) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="text-orange">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <article
      className={`content-food-card relative flex w-full flex-col gap-5 border border-dashed border-[#d8d8d8] hover:border-orange transition-colors duration-300 p-8 sm:flex-row sm:items-center sm:gap-8`}
    >
      {/* Badge */}
      {badge && (
        <span className="absolute left-0 top-0 -translate-y-1/2 rounded-sm bg-orange px-3 py-1 font-inter text-[11px] font-bold tracking-wider text-white sm:left-6 z-10">
          {badge}
        </span>
      )}

      {/* Veg/Non-veg icon */}
      <div className="absolute right-6 top-6">
        <Image
          src={isVeg ? "/images/shop-icon veg.svg" : "/images/shop-icon-non veg.svg"}
          alt={isVeg ? "Vegetarian" : "Non-Vegetarian"}
          width={18}
          height={18}
        />
      </div>

      {/* Image */}
      <div className="relative shrink-0 self-start sm:self-center">
        <div className="flex size-[120px] items-center justify-center rounded-full overflow-hidden border-4 border-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] bg-white">
           <div className="relative h-full w-full">
             <Image src={image} alt={name} fill sizes="120px" className="object-cover" />
           </div>
        </div>
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <Link href={`/shop/${item.slug}`} className="hover:text-orange transition-colors">
          <h3 className="font-ubuntu text-[22px] font-bold leading-[33px] text-ink hover:text-orange transition-colors">
            {renderHighlighted(name, searchQuery)}
          </h3>
        </Link>
        <p className="mt-2 font-inter text-[15px] text-ink/70">{description}</p>
        <div className="mt-4 flex items-baseline gap-3">
          <span className="font-inter text-[18px] font-bold text-ink">{price}</span>
          {originalPrice && (
            <span className="font-inter text-[14px] text-ink/40 line-through">{originalPrice}</span>
          )}
        </div>
      </div>

      {/* Add button */}
      <button
        type="button"
        onClick={() => addToCart(item)}
        className="content-add-button flex shrink-0 items-center justify-center self-start px-8 py-2.5 font-inter text-[16px] font-bold transition-colors sm:self-center bg-ink text-white hover:bg-orange hover:cursor-pointer"
      >
        Add
      </button>
    </article>
  );
}
