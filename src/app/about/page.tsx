import Banner from "./Banner";
import AboutSection from "./AboutSection";
import OurHistorySection from "./OurHistorySection";
import TeamSection from "./TeamSection";
import GallerySection from "./GallerySection";
import Testimonial from "@/components/sections/Testimonial";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <Banner />
      <AboutSection />
      <OurHistorySection />
      <TeamSection />
      <Testimonial />
      <GallerySection />
    </main>
  );
}

