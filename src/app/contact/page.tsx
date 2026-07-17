import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import Locations from "@/components/contact/Locations";
import FaqSection from "@/components/contact/FaqSection";

export const metadata: Metadata = {
  title: "Contact Us | Foodie",
  description:
    "Get in touch, find our branches, and read answers to frequently asked questions.",
};

export default function ContactPage() {
  return (
    <>
      <main>
        <ContactHero />
        <ContactForm />
        <Locations />
        <FaqSection />
      </main>
    </>
  );
}
