"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Michael Nguyen",
    role: "Software Engineer",
    image: "/images/testimonial-image-01.jpg",
    rating: "4.5",
    text: "I discovered this eatery, and it has been a game changer. Their menu has a variety of good alternatives, and delivery is timely. It has been my go-to option for quenching my hunger without the bother.",
  },
  {
    name: "Sarah Johnson",
    role: "Teacher",
    image: "/images/testimonial-image-02.jpg",
    rating: "4.5",
    text: "With my busy schedule, I love this restaurant for a soothing dinner. The food is wonderful, and the staff is always nice. It's my go-to for a hearty supper after a hard day.",
  },
  {
    name: "Emily Patel",
    role: "Local Guide",
    image: "/images/testimonial-image-03.jpg",
    rating: "4.5",
    text: "This eatery has been a lifeline for me. The cuisine is not only delicious, but also feels healthy. The internet ordering mechanism is really useful for someone with a busy schedule like mine.",
  },
  {
    name: "Michael Nguyen",
    role: "Software Engineer",
    image: "/images/testimonial-image-04.jpg",
    rating: "4.5",
    text: "I discovered this eatery, and it has been a game changer. Their menu has a variety of good alternatives, and delivery is timely. It has been my go-to option for quenching my hunger without the bother.",
  },
];

export default function Testimonial({ className = "" }: { className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <section className={`mx-auto max-w-[1200px] px-6 py-10 lg:py-10 ${className}`}>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[45%_55%] items-center">
        {/* Left Side */}
        <div className="flex flex-col justify-center bg-yellow pt-8 pb-6 sm:pt-[45px] sm:pb-[30px] pr-6 sm:pr-[55px] pl-6 sm:pl-[30px]">
          <h2 className="font-['Ubuntu',Helvetica,sans-serif] font-bold text-[30px] sm:text-[40px] lg:text-[45px] leading-[1.2] text-ink">
            What Our<br /> Customers Says<br /> About Us
          </h2>
          <div className="mt-8 bg-white p-5 w-max">
            <p className="font-['Ubuntu',Helvetica,sans-serif] font-bold text-[18px] text-ink">
              Our Reviewers
            </p>
            <div className="mt-4 flex -space-x-3">
              <img
                src="/images/testimonial- left -review-01.jpg"
                alt="Reviewer 1"
                className="h-[47px] w-[47px] rounded-full border-2 border-white object-cover"
              />
              <img
                src="/images/testimonial- left -review-02.jpg"
                alt="Reviewer 2"
                className="h-[47px] w-[47px] rounded-full border-2 border-white object-cover"
              />
              <img
                src="/images/testimonial- left -review-03.jpg"
                alt="Reviewer 3"
                className="h-[47px] w-[47px] rounded-full border-2 border-white object-cover"
              />
              <span className="flex h-[47px] w-[47px] items-center justify-center rounded-full border-2 border-white bg-green text-[13px] font-bold text-ink">
                15k+
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex h-full flex-col justify-center bg-white p-8 sm:p-10 lg:p-[50px] border border-[#f0f0f0] overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", duration: 0.4, ease: "easeInOut" },
                opacity: { duration: 0.4, ease: "easeInOut" },
              }}
              className="flex flex-col"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img 
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="h-[60px] w-[60px] shrink-0 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-['Ubuntu',Helvetica,sans-serif] font-medium text-[25px] leading-[28px] text-ink">
                      {currentTestimonial.name}
                    </p>
                    <p className="font-[family-name:var(--font-inter)] text-[18px] leading-[27px] text-black">
                      {currentTestimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <img key={i} src="/images/testimonial-star-icon.svg" alt="Star" className="h-5 w-5" />
                  ))}
                  <span className="ml-2 font-[family-name:var(--font-inter)] font-bold text-[15px] text-ink">({currentTestimonial.rating})</span>
                </div>
              </div>

              <p className="mt-8 font-[family-name:var(--font-inter)] text-[18px] italic leading-[27px] text-muted min-h-[100px]">
                {currentTestimonial.text}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex gap-4">
            <button onClick={handlePrev} className="flex h-[45px] w-[45px] items-center justify-center rounded-full border border-[#e2e2e2] transition-colors hover:border-orange hover:bg-orange group">
              <img src="/images/testimonial- left - arrow.svg" alt="Prev" className="group-hover:hidden" />
              <img src="/images/testimonial- left - arrow - hovor.svg" alt="Prev" className="hidden group-hover:block" />
            </button>
            <button onClick={handleNext} className="flex h-[45px] w-[45px] items-center justify-center rounded-full border border-[#e2e2e2] transition-colors hover:border-orange hover:bg-orange group">
              <img src="/images/testimonial- right  - arrow.svg" alt="Next" className="group-hover:hidden" />
              <img src="/images/testimonial- right  - arrow  hovor.svg" alt="Next" className="hidden group-hover:block" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
