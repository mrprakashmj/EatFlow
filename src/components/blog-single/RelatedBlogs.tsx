import BlogCard, { BlogPost } from "../Blog/BlogCard";

const relatedPosts: BlogPost[] = [
  {
    id: "chefs-secrets",
    title: "Chef's Secrets: Unveiling Culinary Marvels",
    excerpt: "Unlock culinary expertise with insider tips from our chefs.",
    tag: "Steps",
    date: "12 Sep 2024",
    image: "/images/recent post image one.jpg", // placeholder, will adjust
  },
  {
    id: "foodie-finds",
    title: "Foodie Finds: Discover Hidden Culinary Gems",
    excerpt: "Discover culinary treasures and must-try dining destinations.",
    tag: "Food",
    date: "12 Sep 2024",
    image: "/images/recent post image two.jpg",
  },
  {
    id: "tasting-notes",
    title: "Tasting Notes: Adventures in Flavor Exploration",
    excerpt: "Embark on flavorful journeys through unique tastes and textures.",
    tag: "Food",
    date: "12 Sep 2024",
    image: "/images/recent post image four.jpg",
  },
];

export default function RelatedBlogs() {
  return (
    <section className="bg-white mb-[250px] ">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-4">
        <div >
          <p className="font-inter text-[16px] font-medium uppercase tracking-[1.6px] text-[#4c4a49]">
            Our Blogs<span className="text-[#fb5629]">.</span>
          </p>
          <h2 className="mt-4 font-ubuntu text-[34px] font-bold leading-[1.2] text-[#010005] sm:text-[42px] lg:text-[50px]">
            Related Post
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
