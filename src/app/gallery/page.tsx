import Banner from "./Banner";
import GalleryGrid from "./GalleryGrid";

export const metadata = {
  title: "Gallery | EatFlow",
  description: "Gallery offers an exquisite dining experience with a curated menu, elegant ambiance, and memorable moments.",
};

export default function GalleryPage() {
  return (
    <main>
      <Banner />
      <GalleryGrid />
    </main>
  );
}
