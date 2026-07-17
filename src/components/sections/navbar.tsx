"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart, ChevronDown, Menu as MenuIcon, X, Phone, Mail } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CartSidebar from "./CartSidebar";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Shop", href: "/shop" },
  { 
    label: "Pages", 
    href: "#", 
    hasChevron: true,
    dropdownItems: [
      { label: "Gallery", href: "/gallery" },
      { label: "Events", href: "/event" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" }
    ]
  },
  { label: "Reservation", href: "/reservation", isReservation: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { toggleCart, itemCount } = useCart();

  return (
    <header className="relative z-30 bg-ink">
      <div className="mx-auto flex h-[80px] lg:h-[100px] max-w-[1920px] items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex h-full items-center bg-ink px-6 lg:px-10">
          <span className="font-[family-name:var(--font-display)] text-[26px] lg:text-[32px] text-white">
            EatFlow<span className="text-orange">.</span>
          </span>
        </a>

        {/* Nav links */}
        <nav className="hidden xl:flex items-center gap-10">
          {navLinks.map((link) => (
            <div key={link.label} className="group relative">
              <a
                href={link.href}
                className="relative flex items-center gap-1 font-heading font-medium text-[18px] text-white group-hover:text-orange transition-colors duration-300"
              >
                {link.label}
                {link.hasChevron && <ChevronDown className="h-4 w-4" />}
                <span className="absolute -bottom-[3px] left-0 h-[2px] w-full rounded-full bg-orange origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
              </a>

              {/* Dropdown Menu */}
              {link.dropdownItems && (
                <div className="absolute left-0 top-full pt-6 w-[130px] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                  <div className="bg-white rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex flex-col py-3">
                    {link.dropdownItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="px-5 py-2.5 font-[family-name:var(--font-inter)] text-[16px] font-medium text-ink hover:text-orange transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right side: Cart + Hamburger */}
        <div className="flex h-full items-center">
          <div className="flex items-center pr-6 lg:pr-10">
            <button
              aria-label="Cart"
              onClick={toggleCart}
              className="relative flex h-[50px] w-[50px] items-center justify-center rounded-full border border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-[5px] -right-[5px] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-orange text-[10px] font-bold text-white">
                {itemCount}
              </span>
            </button>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(true)}
            className="flex h-full items-center justify-center bg-orange px-6 lg:px-[40px] text-white hover:bg-orange/90 transition-colors"
          >
            <MenuIcon className="h-8 w-8 stroke-[1.5]" />
          </button>
        </div>
      </div>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 transition-opacity"
            onClick={() => setOpen(false)}
          />
          <div className="fixed top-0 right-0 z-50 h-screen w-full max-w-[500px] bg-ink px-[50px] py-[50px] flex flex-col overflow-y-auto shadow-2xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setOpen(false)}
                className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-white/40 text-white hover:bg-white/10 transition-colors"
              >
                <X className="h-10 w-10 stroke-[1.5]" />
              </button>
            </div>

            <div className="mb-6">
              <img
                src="/images/popup-brand-logo.svg"
                alt="EatFlow Logo"
                className="h-[43px] w-auto"
              />
            </div>

            <p className="font-sans text-[18px] leading-[27px] font-normal text-white mb-10 pr-4">
              EatFlow helps you adopt healthier eating habits by providing personalized meal plans and nutritional advice tailored to your lifestyle.
            </p>

            <div className="flex gap-3 mb-12">
              <a href="https://www.facebook.com/" className="group relative flex h-[60px] w-[60px] items-center justify-center bg-white/10 text-white transition-colors">
                <img src="/images/popup-icon-01.svg" alt="Facebook" className="absolute transition-opacity duration-300 group-hover:opacity-0" />
                <img src="/images/popup-icon-01%20hovor.svg" alt="Facebook Hover" className="absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
              <a href="https://www.pinterest.com/" className="group relative flex h-[60px] w-[60px] items-center justify-center bg-white/10 text-white transition-colors">
                <img src="/images/popup-icon-02.svg" alt="Pinterest" className="absolute transition-opacity duration-300 group-hover:opacity-0" />
                <img src="/images/popup-icon-02%20hovor.svg" alt="Pinterest Hover" className="absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
              <a href="https://www.x.com/" className="group relative flex h-[60px] w-[60px] items-center justify-center bg-white/10 text-white transition-colors">
                <img src="/images/popup-icon-03.svg" alt="X (Twitter)" className="absolute transition-opacity duration-300 group-hover:opacity-0" />
                <img src="/images/popup-icon-03%20hovor.svg" alt="X (Twitter) Hover" className="absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
              <a href="https://www.instagram.com/" className="group relative flex h-[60px] w-[60px] items-center justify-center bg-white/10 text-white transition-colors">
                <img src="/images/popup-icon-04.svg" alt="Instagram" className="absolute transition-opacity duration-300 group-hover:opacity-0" />
                <img src="/images/popup-icon-04%20hovor.svg" alt="Instagram Hover" className="absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
            </div>

            <h3 className="font-heading text-[24px] font-bold text-white mb-6">Get In Touch</h3>
            <div className="h-[1px] w-full bg-white/20 mb-8" />

            <div className="flex flex-col gap-8 mb-12">
              <div className="flex items-center gap-5">
                <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-white/10 shrink-0">
                  <Phone className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <p className="text-[15px] text-white/70 mb-1">For Booking</p>
                  <a href="tel:5646434345" className="block font-sans text-[25px] leading-[38px] font-medium text-white hover:text-[#29af66] transition-colors">
                    (564)-643-4345
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-white/10 shrink-0">
                  <Mail className="h-6 w-6 text-orange" />
                </div>
                <div>
                  <p className="text-[15px] text-white/70 mb-1">For Private Dining</p>
                  <a href="mailto:info@eatflow.com" className="block font-sans text-[25px] leading-[38px] font-medium text-white hover:text-[#29af66] transition-colors">
                    info@eatflow.com
                  </a>
                </div>
              </div>
            </div>

            <Link href="/reservation" className="flex mt-auto w-full h-[60px] bg-orange font-heading items-center justify-center text-[18px] font-medium text-white hover:bg-green transition-colors">
              Table Reservation
            </Link>
          </div>
        </>
      )}

      {/* Cart Sidebar rendered inside Header */}
      <CartSidebar />
    </header>
  );
}
