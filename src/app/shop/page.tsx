import type { Metadata } from "next";
import OrderHero from "@/components/order-online/OrderHero";
import MenuBrowser from "@/components/order-online/MenuBrowser";

export const metadata: Metadata = {
  title: "Shop | EatFlow",
};

export default function OrderOnlinePage() {
  return (
    <main id="top" className="flex flex-col">
      {/* Section: hero/banner (contains its own header) */}
      <OrderHero />

      {/* Section: menu browser */}
      <section className="bg-white">
        <div className="container mx-auto mb-[150px] w-full max-w-[1200px] px-6 py-20 sm:px-10 lg:px-6">
          <MenuBrowser />
        </div>
      </section>

    </main>
  );
}
