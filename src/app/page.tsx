import Hero from "@/components/sections/Hero";
import Category from "@/components/sections/Category";
import ClientLogo from "@/components/sections/ClientLogo";
import Offers from "@/components/sections/Offers";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Menu from "@/components/sections/Menu";
import BookATable from "@/components/sections/BookATable";
import Testimonial from "@/components/sections/Testimonial";
import Blog from "@/components/sections/Blog";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="relative">
        <Hero />
      </div>
      <Category />
      <ClientLogo />
      <Offers />
      <WhyChooseUs />
      <Menu />
      <BookATable />
      <Testimonial />
      <Blog />
    </main>
  );
}
