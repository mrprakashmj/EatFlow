"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import SectionTitle from "@/components/ui/SectionTitle";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY_IMAGES = [
  { id: "gallery-01", src: "/images/gallery-image-01.jpg", alt: "Fresh green salad with vegetables" },
  { id: "gallery-02", src: "/images/gallery-image-02.jpg", alt: "Modern restaurant dining interior" },
  { id: "gallery-03", src: "/images/gallery-image-03.jpg", alt: "Gourmet appetizer skewers" },
  { id: "gallery-04", src: "/images/gallery-image-04.jpg", alt: "Hot ramen noodle bowl with egg" },
  { id: "gallery-05", src: "/images/gallery-image-05.jpg", alt: "Fluffy pancake stack with syrup" },
  { id: "gallery-06", src: "/images/gallery-image-06.jpg", alt: "Meat curry" },
  { id: "gallery-07", src: "/images/gallery-image-07.jpg", alt: "Shrimp curry" },
  { id: "gallery-08", src: "/images/gallery-image-08.jpg", alt: "Skewers" },
  { id: "gallery-09", src: "/images/gallery-image-09.jpg", alt: "Salmon" },
  { id: "gallery-10", src: "/images/gallery-image-10.jpg", alt: "Burger" },
];

export default function GalleryGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null);
      }
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const transitionSettings = { duration: 0.4, ease: "easeInOut" } as const;

  const renderImage = (index: number) => (
    <div 
      key={GALLERY_IMAGES[index].id}
      className="relative overflow-hidden group cursor-pointer h-[300px] sm:h-[400px] w-full"
      onClick={() => setSelectedIndex(index)}
    >
      <motion.img
        layoutId={GALLERY_IMAGES[index].id}
        src={GALLERY_IMAGES[index].src}
        alt={GALLERY_IMAGES[index].alt}
        className="h-full w-full object-cover"
        whileHover={{ scale: 1.05 }}
        transition={transitionSettings}
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-10">
        <Plus className="text-white w-12 h-12" strokeWidth={1} />
      </div>
    </div>
  );

  return (
    <section className="bg-white pt-20 pb-[320px] sm:pb-[260px] lg:pt-28 lg:pb-[230px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionTitle
          eyebrow="GALLERY"
          heading="We Make Fresh Dishes"
          align="center"
          className="mx-auto mb-16 lg:mb-20"
        />

        <div className="flex flex-col gap-6">
          {/* Row 1: 2 columns (55/45) */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-[55fr_45fr]">
            {renderImage(0)}
            {renderImage(1)}
          </div>

          {/* Row 2: 3 columns */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {renderImage(2)}
            {renderImage(3)}
            {renderImage(4)}
          </div>

          {/* Row 3: 2 columns */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {renderImage(5)}
            {renderImage(6)}
          </div>

          {/* Row 4: 3 columns */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {renderImage(7)}
            {renderImage(8)}
            {renderImage(9)}
          </div>
        </div>

        {mounted && createPortal(
          <AnimatePresence>
            {selectedIndex !== null && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transitionSettings}
                  className="absolute inset-0 bg-black/90"
                  onClick={() => setSelectedIndex(null)}
                />

                <button 
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-20 pointer-events-auto p-2 rounded-full hover:bg-white/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex((selectedIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
                  }}
                >
                  <ChevronLeft className="w-10 h-10 md:w-16 md:h-16" strokeWidth={1} />
                </button>

                <button 
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-20 pointer-events-auto p-2 rounded-full hover:bg-white/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex((selectedIndex + 1) % GALLERY_IMAGES.length);
                  }}
                >
                  <ChevronRight className="w-10 h-10 md:w-16 md:h-16" strokeWidth={1} />
                </button>

                <div className="relative z-10 w-full max-w-7xl h-full max-h-[90vh] p-4 md:p-12 pointer-events-none flex items-center justify-center">
                  <motion.img
                    key={GALLERY_IMAGES[selectedIndex].id}
                    layoutId={GALLERY_IMAGES[selectedIndex].id}
                    src={GALLERY_IMAGES[selectedIndex].src}
                    alt={GALLERY_IMAGES[selectedIndex].alt}
                    className="w-full h-full object-contain pointer-events-auto cursor-pointer"
                    onClick={() => setSelectedIndex(null)}
                    transition={transitionSettings}
                  />
                </div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
      </div>
    </section>
  );
}
