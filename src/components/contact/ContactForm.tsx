import SectionTitle from "@/components/ui/SectionTitle";
import { Clock, Mail } from "lucide-react";
import Image from "next/image";

const socials = [
  { img: "/images/popup-icon-04.svg", href: "#", label: "Instagram" },
  { img: "/images/popup-icon-01.svg", href: "#", label: "Facebook" },
  { img: "/images/popup-icon-03.svg", href: "#", label: "X" },
];

export default function ContactForm() {
  return (
    <section className="bg-white">
      <div className="container mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-14 lg:gap-10 items-start">
          
          {/* Info column */}
          <div>
            <SectionTitle eyebrow="Contact us" heading="Send Us a Message" />
            <p className="font-inter text-ink text-[18px] leading-[150%] mt-5 max-w-md">
              Delicious dishes await at our restaurant. Explore our menu and find your new favorite flavors. Come dine with us today!
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex items-center gap-6">
                <span className="shrink-0 flex items-center justify-center rounded-full bg-[#3baf6d] text-ink w-[70px] h-[70px]">
                  <Image src="/images/phone-icon-dark.svg" alt="Phone" width={26} height={26} style={{ width: "auto", height: "auto" }} />
                </span>
                <div>
                  <p className="font-inter font-medium text-ink text-[18px] leading-[150%]">For Booking</p>
                  <p className="font-ubuntu font-bold text-ink text-[30px] leading-[150%] ">(564)-643-4345</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <span className="shrink-0 flex items-center justify-center rounded-full bg-[#ffcf60] text-ink w-[70px] h-[70px]">
                  <Image src="/images/mail-icon-dark.svg" alt="Mail" width={26} height={26} style={{ width: "auto", height: "auto" }} />
                </span>
                <div>
                  <p className="font-inter font-medium text-ink text-[18px] leading-[150%]">For Private Dining</p>
                  <p className="font-ubuntu font-bold text-ink text-[30px] leading-[150%]">info@eatflow.com</p>
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
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="font-ubuntu font-medium text-ink text-[20px] leading-[30px] block mb-3">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
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
          </div>
          
        </div>
      </div>
    </section>
  );
}
