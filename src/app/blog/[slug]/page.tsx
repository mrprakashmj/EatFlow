import { notFound } from "next/navigation";
import BlogSingleHero from "@/components/blog-single/BlogSingleHero";
import BlogContent from "@/components/blog-single/BlogContent";
import BlogSidebar from "@/components/blog-single/BlogSidebar";
import RelatedBlogs from "@/components/blog-single/RelatedBlogs";
import { POSTS } from "@/data/blog";

export default async function BlogSinglePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.id === slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      {/* Section: Hero banner */}
      <BlogSingleHero
        title={post.title}
        category={post.tag}
        date={post.date}
        readTime="13 Min. Read"
        authorName="David Davis"
        authorRole="Author"
        image={post.image}
      />

      {/* Section: Article + Sidebar */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-4">
          <div className="grid grid-cols-1 gap-12 pt-8 sm:pt-10 pb-16 sm:pb-20 lg:grid-cols-[1fr_380px] lg:gap-16 lg:pt-10 lg:pb-28">
            <BlogContent />
            <BlogSidebar />
          </div>
        </div>
      </section>

      {/* Section: Related blogs */}
      <RelatedBlogs />
    </main>
  );
}
