"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import Button from "@/components/ui/Button";

const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Blog", href: "#" },
  { label: "Events", href: "#" },
  { label: "Contact", href: "#" },
];

const utilityLinks = [
  { label: "Style Guide", href: "#" },
  { label: "Licenses", href: "#" },
  { label: "Changelog", href: "#" },
  { label: "Protected", href: "#" },
  { label: "Not found", href: "#" },
];

const socialIcons = [
  { default: "/images/footer - social-icon -01.svg", hover: "/images/footer - social-icon -01 hovor.svg" },
  { default: "/images/footer - social-icon -02.svg", hover: "/images/footer - social-icon -02 hovor.svg" },
  { default: "/images/footer - social-icon -03.svg", hover: "/images/footer - social-icon -03 hovor.svg" },
  { default: "/images/footer - social-icon -04.svg", hover: "/images/footer - social-icon -04 hovor.svg" },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink pt-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/footer-overlay-image.svg')" }}>
      {/* Newsletter CTA card */}
      <div className="mx-auto max-w-[1200px]  relative z-10">
        <div 
          className="relative -translate-y-1/2 flex flex-col items-center gap-8 overflow-hidden py-[80px] pr-[60px] pl-[50px] text-center sm:flex-row sm:justify-between sm:text-left bg-[#37A059] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/cta-bg-line.svg')" }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 text-left">
            <div className="flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-full bg-yellow">
              <img src="/images/CTA mail-icon.svg" alt="Mail" className="h-[40px] w-[51px]" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-['Ubuntu',Helvetica,sans-serif] font-bold text-[40px] leading-[44px] text-[#030406]">
                Subscribe to our<br />newsletter
              </h3>
              <p className="mt-2 font-[family-name:var(--font-inter)] text-[22px] leading-[33px] text-[#030406]">
                Join the 100K+ people that uses Flavory
              </p>
            </div>
          </div>
          <div className="flex w-full max-w-[471px] flex-col sm:flex-row items-center gap-5">
            <input
              type="email"
              placeholder="Enter your Email"
              className="h-[60px] w-full flex-1 bg-white px-6 text-[18px] text-[#030406] outline-none placeholder:text-[#030406]/70"
            />
            <Button variant="ink" className="h-[60px] !min-w-[160px] text-[18px] hover:!bg-[#ffce53] hover:!text-link">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 pb-12 -mt-4 relative z-10">
        <div className="flex flex-col gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/">
            <img src="/images/footer_eatflow-logo.svg" alt="EatFlow Logo" className="h-[40px] w-auto object-contain" />
          </Link>
          <div className="flex items-center gap-6">
            <span className="text-[20px] font-bold text-white font-heading">Follow</span>
            <div className="flex items-center gap-4">
              {socialIcons.map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="group flex items-center justify-center"
                >
                  <img src={icon.default} alt={`Social Icon ${i + 1}`} className="h-[26px] w-auto group-hover:hidden" />
                  <img src={icon.hover} alt={`Social Icon ${i + 1} Hover`} className="h-[26px] w-auto hidden group-hover:block" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4 text-white font-[family-name:var(--font-inter)] font-medium text-[20px] leading-[30px]">
              <img src="/images/mail-icon.svg" alt="Email" className="h-6 w-6 shrink-0 mt-1" /> 
              info@eatflow.com
            </div>
            <div className="flex items-start gap-4 text-white font-[family-name:var(--font-inter)] font-medium text-[20px] leading-[30px]">
              <img src="/images/phone-icon.svg" alt="Phone" className="h-6 w-6 shrink-0 mt-1" /> 
              (564)-643-4345
            </div>
            <div className="flex items-start gap-4 text-white font-[family-name:var(--font-inter)] font-medium text-[20px] leading-[30px]">
              <img src="/images/map-icon.svg" alt="Location" className="h-6 w-6 shrink-0 mt-1" /> 
              <span>12 Primrose Lane,<br />London.</span>
            </div>
          </div>

          <div className="lg:pl-8">
            <p className="font-['Ubuntu',Helvetica,sans-serif] font-medium text-[25px] leading-[28px] text-orange">
              Pages
            </p>
            <ul className="mt-6 flex flex-col gap-4 list-disc pl-5 marker:text-white/60">
              {pages.map(({ label, href }) => (
                <li key={label} className="pl-1">
                  <Link href={href} className="text-white hover:text-orange transition-colors font-[family-name:var(--font-inter)] font-normal text-[20px] leading-[30px]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-4">
            <p className="font-['Ubuntu',Helvetica,sans-serif] font-medium text-[25px] leading-[28px] text-orange">
              Utility
            </p>
            <ul className="mt-6 flex flex-col gap-4 list-disc pl-5 marker:text-white/60">
              {utilityLinks.map(({ label, href }) => (
                <li key={label} className="pl-1">
                  <Link href={href} className="text-white hover:text-orange transition-colors font-[family-name:var(--font-inter)] font-normal text-[20px] leading-[30px]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-['Ubuntu',Helvetica,sans-serif] font-medium text-[25px] leading-[28px] text-orange">
              Opening Hours
            </p>
            <ul className="mt-6 flex flex-col gap-4 list-disc pl-5 marker:text-white/60 text-white font-[family-name:var(--font-inter)] font-normal text-[20px] leading-[30px]">
              <li className="pl-1">Mon – Fri: 7.00am – 6.00pm</li>
              <li className="pl-1">Sat: 7.00am – 6.00pm</li>
              <li className="pl-1">Sun: 8.00am – 6.00pm</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-['Ubuntu',Helvetica,sans-serif] font-normal text-[22px] leading-[33px] text-white">
            Copyright © EatFlow. | Designed By VictorFlow - Powered By Next.js
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-orange text-white hover:bg-orange/90 transition shadow-lg shrink-0"
            aria-label="Back to top"
          >
            <img src="/images/footer- top arrow-icon.svg" alt="Up Arrow" className="h-[12PX] w-[19PX]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
