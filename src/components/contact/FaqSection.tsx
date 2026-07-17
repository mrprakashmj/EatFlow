"use client";

import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const faqs = [
  {
    question: "1. What are your signature dishes?",
    answer: "Our signature dishes include gourmet burgers and handcrafted pasta dishes.",
  },
  {
    question: "2. Are your dishes suitable for dietary restrictions?",
    answer:
      "Yes, we offer a variety of options including gluten-free, vegan, and dairy-free dishes to accommodate dietary restrictions.",
  },
  {
    question: "3. How are the dishes prepared?",
    answer: "Our dishes are prepared fresh daily using locally sourced ingredients by our expert chefs.",
  },
  {
    question: "4. Can I customize my order?",
    answer: "Absolutely! Feel free to ask your server about customizing any dish to your preference.",
  },
  {
    question: "5. Are there vegetarian or vegan options available?",
    answer: "Certainly, we have a variety of delicious vegetarian and vegan options are referred.",
  },
  {
    question: "6. What are your most popular dishes?",
    answer: "Our most popular menu dishes include our savory steak and seafood specialties.",
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white mb-[150px]">
      <div className="container mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">

          {/* Left: title + CTA */}
          <div>
            <SectionTitle eyebrow="FAQ" heading="Your questions answered." />
            <p className="font-inter text-ink/70 text-[18px] leading-[150%] mt-5 max-w-md">
              We follow strict quality control measures and source our ingredients from trusted suppliers. Our team regularly inspects the food to ensure
            </p>

            <div className="mt-10 bg-[#f5c64b] p-6 sm:p-8 flex items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="shrink-0 flex items-center justify-center bg-[#c29623] w-[70px] h-[70px]">
                  <span className="flex items-center justify-center rounded-full bg-white text-[#c29623] font-bold text-2xl w-10 h-10">
                    ?
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-ubuntu font-bold text-ink text-xl">More queries? Ask!</p>
                  <p className="font-inter text-ink/80 text-sm mt-1">Serving delicious dishes in a table<br />with cozy atmosphere.</p>
                </div>
              </div>

              <button className="shrink-0 flex items-center justify-center rounded-full bg-ink text-white w-12 h-12 hover:bg-orange transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right: accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question} className="bg-white border border-[#e5e3e2]">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-ubuntu font-medium text-[#0d0c1e] text-[22px] leading-[29px]">{faq.question}</span>
                    <span className={`relative shrink-0 flex items-center justify-center rounded-full w-6 h-6 text-white transition-all duration-500 ease-in-out ${isOpen ? 'bg-orange rotate-180' : 'bg-ink rotate-0'}`}>
                      <Plus className={`absolute w-4 h-4 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-0 scale-50 rotate-90' : 'opacity-100 scale-100 rotate-0'}`} />
                      <Minus className={`absolute w-4 h-4 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-90'}`} />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-inter font-normal text-[#3f3f3f] text-[18px] leading-[27px] px-6 pb-5">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
