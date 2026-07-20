"use client";

import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { Clock, Mail } from "lucide-react";
import Image from "next/image";

const socials = [
  { img: "/images/popup-icon-04.svg", href: "https://www.instagram.com", label: "Instagram" },
  { img: "/images/popup-icon-01.svg", href: "https://www.facebook.com", label: "Facebook" },
  { img: "/images/popup-icon-03.svg", href: "https://www.x.com", label: "X" },
];

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  return (
    <section className="bg-white">
      <div className="container mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] gap-14 lg:gap-10 items-start">
          
          {/* Info column */}
          <div>
            <SectionTitle eyebrow="Contact us" heading="Send Us a Message" />
            <p className="font-inter text-ink text-[18px] leading-[150%] mt-5 max-w-md">
              Delicious dishes await at our restaurant. Explore our menu and find your new favorite flavors. Come dine with us today!
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="shrink-0 flex items-center justify-center rounded-full bg-[#3baf6d] text-ink size-[50px] sm:size-[70px]">
                  <Image src="/images/phone-icon-dark.svg" alt="Phone" width={26} height={26} className="w-[18px] sm:w-[26px] h-auto" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-inter font-medium text-ink text-[16px] sm:text-[18px] leading-[150%]">For Booking</p>
                  <a href="tel:5646434345" className="font-ubuntu font-bold text-ink text-[18px] sm:text-[24px] lg:text-[30px] leading-[1.3] hover:text-orange transition-colors block break-words">(564)-643-4345</a>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-6">
                <span className="shrink-0 flex items-center justify-center rounded-full bg-[#ffcf60] text-ink size-[50px] sm:size-[70px]">
                  <Image src="/images/mail-icon-dark.svg" alt="Mail" width={26} height={26} className="w-[18px] sm:w-[26px] h-auto" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-inter font-medium text-ink text-[16px] sm:text-[18px] leading-[150%]">For Private Dining</p>
                  <a href="mailto:info@eatflow.com" className="font-ubuntu font-bold text-ink text-[18px] sm:text-[24px] lg:text-[30px] leading-[1.3] hover:text-orange transition-colors block break-words">info@eatflow.com</a>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="font-ubuntu font-bold text-ink text-xl">Follow Us</p>
              <div className="flex items-center gap-4 mt-4">
                {socials.map(({ img, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-full bg-ink w-12 h-12 hover:bg-orange transition-colors"
                  >
                    <img src={img} alt={label} className="w-5 h-5 object-contain" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-3">
                <Image src="/images/hour-icon.svg" alt="Clock" width={25} height={26} />
                <p className="font-ubuntu font-bold text-ink text-[25px] ">Opening Hours</p>
              </div>
              <div className="font-inter text-ink text-[20px] leading-[30px] mt-4 space-y-1">
                <p>Mon – Fri: 7.00am – 6.00pm</p>
                <p>Sat: 7.00am – 6.00pm</p>
                <p>Sun: 8.00am – 6.00pm</p>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="bg-[#f2f2f2] p-8 md:p-12">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center gap-6 text-center h-full min-h-[300px]">
                <div className="flex size-[80px] items-center justify-center rounded-full bg-green text-white shadow-[0_0_20px_rgba(43,185,55,0.4)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-['Ubuntu',Helvetica,sans-serif] font-bold text-[32px] text-ink">Message Sent!</h3>
                  <p className="mt-3 font-[family-name:var(--font-inter)] text-[16px] text-ink/80 max-w-[400px] mx-auto leading-relaxed">
                    Thank you for contacting Eatflow. We have received your message and will get back to you shortly.
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 w-full bg-orange text-white font-inter font-bold text-[20px] leading-[30px] py-4 hover:bg-green transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="font-ubuntu font-medium text-ink text-[20px] leading-[30px] block mb-3">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full bg-white px-5 py-4 font-inter font-normal text-[20px] leading-[29px] text-ink placeholder:text-ink/60 outline-none focus:ring-1 focus:ring-orange"
                />
              </div>

              <div>
                <label htmlFor="phone" className="font-ubuntu font-medium text-ink text-[20px] leading-[30px] block mb-3">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="+589 852 3874"
                  className="w-full bg-white px-5 py-4 font-inter font-normal text-[20px] leading-[29px] text-ink placeholder:text-ink/60 outline-none focus:ring-1 focus:ring-orange"
                />
              </div>

              <div>
                <label htmlFor="email" className="font-ubuntu font-medium text-ink text-[20px] leading-[30px] block mb-3">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Your email"
                  className="w-full bg-white px-5 py-4 font-inter font-normal text-[20px] leading-[29px] text-ink placeholder:text-ink/60 outline-none focus:ring-1 focus:ring-orange"
                />
              </div>

              <div>
                <label htmlFor="message" className="font-ubuntu font-medium text-ink text-[20px] leading-[30px] block mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  placeholder="Your message..."
                  className="w-full bg-white px-5 py-4 font-inter font-normal text-[20px] leading-[29px] text-ink placeholder:text-ink/60 outline-none focus:ring-1 focus:ring-orange resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange text-white font-inter font-bold text-[20px] leading-[30px] py-4 hover:bg-green  transition-colors cursor-pointer"
              >
                Send Message
              </button>
            </form>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
