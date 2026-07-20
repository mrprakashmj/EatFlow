"use client";

import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { Mail, Clock3, Phone } from "lucide-react";
import Image from "next/image";

export default function BookingSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          
          {/* Form column */}
          <div className="bg-[#f2f2f2] p-8 md:p-10 lg:p-12 order-2 lg:order-1">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center gap-6 text-center h-full min-h-[300px]">
                <div className="flex size-[80px] items-center justify-center rounded-full bg-green text-white shadow-[0_0_20px_rgba(43,185,55,0.4)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-['Ubuntu',Helvetica,sans-serif] font-bold text-[32px] text-ink">Table Reserved!</h3>
                  <p className="mt-3 font-[family-name:var(--font-inter)] text-[16px] text-ink/80 max-w-[400px] mx-auto leading-relaxed">
                    Thank you for choosing Eatflow. We have received your reservation request and will contact you shortly to confirm details.
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 w-full bg-ink text-white font-inter font-bold text-[18px] leading-[27px] py-4 hover:bg-orange transition-colors cursor-pointer"
                >
                  Book Another Table
                </button>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="w-full bg-white px-5 py-4 font-inter font-normal text-[16px] leading-[24px] text-ink placeholder:text-ink/70 outline-none focus:ring-1 focus:ring-orange"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="w-full bg-white px-5 py-4 font-inter font-normal text-[16px] leading-[24px] text-ink placeholder:text-ink/70 outline-none focus:ring-1 focus:ring-orange"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone"
                  className="w-full bg-white px-5 py-4 font-inter font-normal text-[16px] leading-[24px] text-ink placeholder:text-ink/70 outline-none focus:ring-1 focus:ring-orange"
                />
                <div className="relative">
                  <select
                    name="guests"
                    required
                    className="w-full bg-white px-5 py-4 font-inter font-normal text-[16px] leading-[24px] text-ink placeholder:text-ink/70 outline-none focus:ring-1 focus:ring-orange appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>Person</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4+ People</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-ink">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="date"
                  required
                  placeholder="yyyy/mm/dd"
                  className="w-full bg-white px-5 py-4 font-inter font-normal text-[16px] leading-[24px] text-ink placeholder:text-ink/70 outline-none focus:ring-1 focus:ring-orange"
                />
                <input
                  type="text"
                  name="time"
                  required
                  placeholder="00.00-pm"
                  className="w-full bg-white px-5 py-4 font-inter font-normal text-[16px] leading-[24px] text-ink placeholder:text-ink/70 outline-none focus:ring-1 focus:ring-orange"
                />
              </div>
              <textarea
                name="request"
                required
                placeholder="Your message..."
                rows={5}
                className="w-full bg-white px-5 py-4 font-inter font-normal text-[16px] leading-[24px] text-ink placeholder:text-ink/70 resize-none outline-none focus:ring-1 focus:ring-orange"
              />
              <button
                type="submit"
                className="w-full bg-ink text-white font-inter font-bold text-[18px] leading-[27px] py-4 hover:bg-orange transition-colors cursor-pointer mt-1"
              >
                Book A Table
              </button>
            </form>
            )}
          </div>

          {/* Content column */}
          <div className="order-1 lg:order-2 mt-0 lg:mt-6">
            <SectionTitle eyebrow="BOOK TABLE" heading="Reserve Your Table Now" />
            <p className="font-inter text-[#4c4a49] text-[16px] sm:text-[18px] leading-[150%] mt-6 max-w-lg">
              Delicious dishes await at our restaurant. Explore our menu and find your new favorite flavors. Come dine with us today!
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap gap-8 sm:gap-12 lg:gap-16">
              <div>
                <div className="flex items-center gap-3">
                  <Image src="/images/hour-icon.svg" alt="Clock" width={25} height={26} />
                  <h3 className="font-ubuntu font-bold text-ink text-[22px] sm:text-[25px]">
                    Opening Hours
                  </h3>
                </div>
                <div className="mt-4 font-inter font-normal text-ink text-[17px] sm:text-[20px] leading-[30px] space-y-1">
                  <p>Mon – Fri: 7.00am – 6.00pm</p>
                  <p>Sat: 7.00am – 6.00pm</p>
                  <p>Sun: 8.00am – 6.00pm</p>
                </div>
              </div>

              <div className="flex flex-col justify-end pb-1 gap-5">
                <div className="flex items-center gap-4">
                  <Image src="/images/resveration_phone-icon.svg" alt="Phone" width={20} height={20} />
                  <a href="tel:564-643-4345" className="font-inter font-normal text-ink text-[18px] sm:text-[20px] leading-[30px] hover:text-orange transition-colors">
                    (564)-643-4345
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Image src="/images/resveration_mail_icon.svg" alt="Email" width={20} height={20} />
                  <a href="mailto:info@eatflow.com" className="font-inter font-normal text-ink text-[18px] sm:text-[20px] leading-[30px] hover:text-orange transition-colors">
                    info@eatflow.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
