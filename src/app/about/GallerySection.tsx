"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import SectionShell from "./SectionShell";
import SectionTitle from "@/components/ui/SectionTitle";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY_IMAGES = [
  { id: "gallery-01", src: "/images/gallery-image-01.jpg", alt: "Fresh green salad with vegetables" },
  { id: "gallery-02", src: "/images/gallery-image-02.jpg", alt: "Modern restaurant dining interior" },
  { id: "gallery-03", src: "/images/gallery-image-03.jpg", alt: "Gourmet appetizer skewers" },
  { id: "gallery-04", src: "/images/gallery-image-04.jpg", alt: "Hot ramen noodle bowl with egg" },
  { id: "gallery-05", src: "/images/gallery-image-05.jpg", alt: "Fluffy pancake stack with syrup" },
];

export default function GallerySection() {
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

  return (
    <SectionShell bg="white" contentClassName="flex flex-col gap-14">
      <SectionTitle
        eyebrow="Gallery"
        heading="Freshly Prepared Dishes"
        align="center"
        className="mx-auto"
      />

      <div className="flex flex-col gap-6 mb-[280px] sm:mb-[200px] lg:mb-[150px]">
        {/* Top Row — 55 / 45 split, same height */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[55fr_45fr]">
          <div 
            className="relative overflow-hidden group cursor-pointer"
            onClick={() => setSelectedIndex(0)}
          >
            <motion.img
              layoutId={GALLERY_IMAGES[0].id}
              src={GALLERY_IMAGES[0].src}
              alt={GALLERY_IMAGES[0].alt}
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={transitionSettings}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-10">
              <Plus className="text-white w-12 h-12" strokeWidth={1} />
            </div>
          </div>
          <div 
            className="relative overflow-hidden group cursor-pointer"
            onClick={() => setSelectedIndex(1)}
          >
            <motion.img
              layoutId={GALLERY_IMAGES[1].id}
              src={GALLERY_IMAGES[1].src}
              alt={GALLERY_IMAGES[1].alt}
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={transitionSettings}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-10">
              <Plus className="text-white w-12 h-12" strokeWidth={1} />
            </div>
          </div>
        </div>

        {/* Bottom Row — 3 equal columns, center image shorter & vertically centered */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:items-center">
          <div 
            className="relative overflow-hidden group cursor-pointer"
            onClick={() => setSelectedIndex(2)}
          >
            <motion.img
              layoutId={GALLERY_IMAGES[2].id}
              src={GALLERY_IMAGES[2].src}
              alt={GALLERY_IMAGES[2].alt}
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={transitionSettings}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-10">
              <Plus className="text-white w-12 h-12" strokeWidth={1} />
            </div>
          </div>
          <div 
            className="relative overflow-hidden group cursor-pointer"
            onClick={() => setSelectedIndex(3)}
          >
            <motion.img
              layoutId={GALLERY_IMAGES[3].id}
              src={GALLERY_IMAGES[3].src}
              alt={GALLERY_IMAGES[3].alt}
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={transitionSettings}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-10">
              <Plus className="text-white w-12 h-12" strokeWidth={1} />
            </div>
          </div>
          <div 
            className="relative overflow-hidden group cursor-pointer"
            onClick={() => setSelectedIndex(4)}
          >
            <motion.img
              layoutId={GALLERY_IMAGES[4].id}
              src={GALLERY_IMAGES[4].src}
              alt={GALLERY_IMAGES[4].alt}
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={transitionSettings}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-10">
              <Plus className="text-white w-12 h-12" strokeWidth={1} />
            </div>
          </div>
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

              {/* Previous Button */}
              <button 
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-20 pointer-events-auto p-2 rounded-full hover:bg-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex((selectedIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
                }}
              >
                <ChevronLeft className="w-10 h-10 md:w-16 md:h-16" strokeWidth={1} />
              </button>

              {/* Next Button */}
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
    </SectionShell>
  );
}
