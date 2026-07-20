"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function BookATable() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section 
      id="contact" 
      className="relative bg-ink py-20 lg:py-28 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/reservation-pattern.png')" }}
    >
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col justify-center">
          <p className="font-[family-name:var(--font-inter)] text-[16px] font-bold uppercase tracking-[0.1em] text-white">
            Booking Table<span className="text-orange">.</span>
          </p>
          <h2 className="mt-3 max-w-[560px] font-['Ubuntu',Helvetica,sans-serif] font-bold text-[32px] sm:text-[40px] lg:text-[45px] leading-[1.1] text-white">
            Want dinner tonight?<br /> Reserve your table<br /> with ease!
          </h2>
          <p className="mt-6 font-[family-name:var(--font-inter)] text-[18px] sm:text-[20px] text-white">
            Discover our New Menu !
          </p>

          <div className="mt-10 flex items-center gap-5">
            <span className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-green">
              <img src="/images/call-icon.svg" alt="Call" className="h-6 w-6" />
            </span>
            <div className="flex flex-col justify-center">
              <p className="font-[family-name:var(--font-inter)] text-[16px] text-white">For quick orders</p>
              <a 
                href="tel:564-643-4345"
                className="font-['Ubuntu',Helvetica,sans-serif] font-bold text-[24px] sm:text-[28px] text-yellow hover:text-green transition-colors block"
              >
                (564)-643-4345
              </a>
            </div>
          </div>
        </div>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center gap-6 bg-[#f0f0f0] p-8 sm:p-12 text-center h-full min-h-[500px]">
            <div className="flex size-[80px] items-center justify-center rounded-full bg-green text-white shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="font-['Ubuntu',Helvetica,sans-serif] font-bold text-[28px] text-ink">Booking Confirmed!</h3>
              <p className="mt-3 font-[family-name:var(--font-inter)] text-[16px] text-ink/80 max-w-[350px] mx-auto leading-relaxed">
                Thank you for choosing Eatflow. We have received your request and will contact you shortly to confirm your table.
              </p>
            </div>
            <Button onClick={() => setIsSubmitted(false)} variant="orange" className="mt-4 hover:bg-green">
              Book Another Table
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-[#f0f0f0] p-8 sm:p-12">
            <input
              type="text"
              placeholder="Name"
              required
              className="h-[55px] w-full bg-white px-5 font-[family-name:var(--font-inter)] text-[16px] text-ink outline-none placeholder:text-ink/80 focus:ring-1 focus:ring-ink"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="h-[55px] w-full bg-white px-5 font-[family-name:var(--font-inter)] text-[16px] text-ink outline-none placeholder:text-ink/80 focus:ring-1 focus:ring-ink"
            />
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="tel"
                placeholder="Phone"
                required
                className="h-[55px] w-full bg-white px-5 font-[family-name:var(--font-inter)] text-[16px] text-ink outline-none placeholder:text-ink/80 focus:ring-1 focus:ring-ink sm:w-1/2"
              />
              <div className="relative sm:w-1/2">
                <select 
                  defaultValue=""
                  required
                  className="h-[55px] w-full appearance-none bg-white px-5 font-[family-name:var(--font-inter)] text-[16px] text-ink/80 outline-none focus:ring-1 focus:ring-ink"
                >
                  <option value="" disabled hidden>Person</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 to 4</option>
                  <option value="3">4 to 8</option>
                  <option value="4">More than 10</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <svg className="h-4 w-4 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="text"
                placeholder="yyyy/mm/dd"
                required
                className="h-[55px] w-full bg-white px-5 font-[family-name:var(--font-inter)] text-[16px] text-ink outline-none placeholder:text-ink/80 focus:ring-1 focus:ring-ink sm:w-1/2"
              />
              <input
                type="text"
                placeholder="00.00-pm"
                required
                className="h-[55px] w-full bg-white px-5 font-[family-name:var(--font-inter)] text-[16px] text-ink outline-none placeholder:text-ink/80 focus:ring-1 focus:ring-ink sm:w-1/2"
              />
            </div>
            <textarea
              placeholder="Your message..."
              rows={4}
              className="w-full bg-white px-5 py-4 font-[family-name:var(--font-inter)] text-[16px] text-ink outline-none placeholder:text-ink/80 focus:ring-1 focus:ring-ink"
            />
            <Button type="submit" variant="ink" className="mt-2 w-full h-[60px] text-[18px] hover:bg-yellow hover:text-ink">
              Book A Table
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
