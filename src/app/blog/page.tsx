import BlogHero from "@/components/Blog/BlogHero";
import FeaturedBlog from "@/components/Blog/FeaturedBlog";
import BlogGrid from "@/components/Blog/BlogGrid";

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <FeaturedBlog />
      <BlogGrid />
    </main>
  );
}
