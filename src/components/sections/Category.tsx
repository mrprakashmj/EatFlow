"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";

const dishes = [
  { name: "Pepper Chicken", image: "/images/food%201.png" },
  { name: "Chicken Biryani", image: "/images/food%202.png" },
  { name: "Pot Rice", image: "/images/food%20three.png" },
  { name: "Mongolian Beef", image: "/images/food%205.png" },
];

export default function Category() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const itemsToShow = 3;
  const maxIndex = Math.max(0, dishes.length - itemsToShow);
  
  const nextSlide = () => setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    setTouchStart(clientX);
    setTouchEnd(null);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (touchStart === null) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    setTouchEnd(clientX);
  };

  const handleDragEnd = () => {
    if (touchStart === null || touchEnd === null) {
      setTouchStart(null);
      return;
    }
    const distance = touchStart - touchEnd;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section id="menu" className="mx-auto max-w-[1200px] px-6 py-20 lg:py-28">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionTitle eyebrow="Every Bite: A Crispy Delight" heading="Highly Rated Eats" />

        <div className="hidden sm:flex gap-4 pb-2">
          <button 
            onClick={prevSlide}
            aria-label="Previous slide" 
            className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-gray-200 text-orange hover:bg-orange hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button 
            onClick={nextSlide}
            aria-label="Next slide" 
            className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-gray-200 text-orange hover:bg-orange hover:text-white transition-colors"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div 
        className="mt-14 overflow-hidden cursor-grab active:cursor-grabbing" 
        style={{ "--slide-index": currentIndex } as React.CSSProperties}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={() => setTouchStart(null)}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <div className="flex gap-8 transition-transform duration-500 ease-in-out translate-x-[calc(var(--slide-index)*-100%_-_var(--slide-index)*2rem)] sm:translate-x-[calc(var(--slide-index)*-50%_-_var(--slide-index)*1rem)] lg:translate-x-[calc(var(--slide-index)*-33.3333%_-_var(--slide-index)*0.6667rem)]">
          {dishes.map((dish, index) => (
            <div
              key={`${dish.name}-${index}`}
              className="group relative flex w-full shrink-0 sm:w-[calc(50%_-_1rem)] lg:w-[calc(33.3333%_-_1.3333rem)] flex-col items-center justify-between overflow-hidden bg-[#FDF6E3] px-6 py-12 text-center transition-colors duration-300 hover:bg-yellow"
            >
            <div className="relative mb-6 flex h-[250px] w-[250px] shrink-0 items-center justify-center rounded-full bg-white shadow-[0_15px_40px_rgba(0,0,0,0.06)]">
              <img src={dish.image} alt={dish.name} className="h-[210px] w-[210px] rounded-full object-cover" />
            </div>

            <h4 className="font-heading font-bold text-[24px] text-ink mb-6">
              {dish.name}
            </h4>

            <Link href={`/shop/${dish.name.toLowerCase().replace(/ /g, '-')}`} aria-label={`Order ${dish.name}`} className="group/btn relative flex h-[50px] w-[50px] overflow-hidden items-center rounded-full bg-orange px-[15px] text-white shadow-md transition-all duration-300 hover:w-[150px]">
              <span className="font-sans font-medium whitespace-nowrap opacity-0 transition-all duration-300 group-hover/btn:opacity-100 cursor-pointer">
                Order Now
              </span>
              <ArrowRight className="absolute right-[15px] h-5 w-5 shrink-0" />
            </Link>
          </div>
        ))}
      </div>
    </div>

      {/* Pagination Dots */}
      <div className="mt-12 flex items-center justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`} 
            className={`h-2 w-2 rounded-full transition-colors ${
              currentIndex === idx ? "bg-ink" : "bg-gray-300 hover:bg-ink/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
