import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Link from "next/link";

const posts = [
  {
    id: "1",
    image: "/images/blog post image one.jpg",
    category: "Dessert",
    date: "16 Sep 2024",
    title: "Savoring Summer: Delicious Dishes Await!",
    excerpt: "Savor the essence of summer with delicious seasonal dishes.",
  },
  {
    id: "2",
    image: "/images/blog post image Two.jpg",
    category: "Steps",
    date: "12 Sep 2024",
    title: "Chef's Secrets: Unveiling Culinary Marvels",
    excerpt: "Unlock culinary expertise with insider tips from our chefs.",
  },
];

const recent = [
  {
    id: "3",
    image: "/images/recent post image one.jpg",
    title: "Foodie Finds: Discover Hidden Culinary Gems",
    date: "12 Sep 2024",
  },
  {
    id: "4",
    image: "/images/recent post image two.jpg",
    title: "Tasting Notes: Adventures in Flavor Exploration",
    date: "12 Sep 2024",
  },
  {
    id: "5",
    image: "/images/recent post image three.jpg",
    title: "Cooking Chronicles: Tales from the Kitchen",
    date: "12 Sep 2024",
  },
  {
    id: "6",
    image: "/images/recent post image four.jpg",
    title: "Farm to Table: Fresh, Local hygienic Ingredients",
    date: "12 Sep 2024",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="mx-auto max-w-[1200px] px-6 pt-20 pb-[230px] lg:pt-28 lg:pb-[230px]">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionTitle eyebrow="Our Blogs" heading="Explore Our Latest Blogs" />
        <Button href="/blog" variant="orange" className="h-[60px] min-w-[170px] shrink-0 font-['Ubuntu',Helvetica,sans-serif] font-medium text-[18px] text-white hover:!bg-green hover:!text-white">
          View Blogs
        </Button>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr_380px]">
        {posts.map((post, i) => (
          <div key={i} className="flex flex-col bg-[#f4f4f4] p-5 sm:p-6 h-fit">
            <Link href={`/blog/${post.id}`} className="block h-[280px] w-full overflow-hidden">
              <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
            </Link>
            <div className="flex items-center gap-4 text-[18px] mt-6">
              <span className="flex items-center gap-2 text-orange font-[family-name:var(--font-inter)]">
                <img src="/images/pen-tool-icon.svg" alt="Category" className="h-4 w-4" />
                {post.category}
              </span>
              <span className="text-[#d1d1d1]">|</span>
              <span className="flex items-center gap-2 text-ink font-[family-name:var(--font-inter)]">
                <img src="/images/calender-icon.svg" alt="Date" className="h-4 w-4" />
                {post.date}
              </span>
            </div>
            <Link href={`/blog/${post.id}`} className="mt-4 block">
              <p className="font-['Ubuntu',Helvetica,sans-serif] font-bold text-[25px] leading-[1.3] text-ink transition-colors hover:text-orange cursor-pointer">
                {post.title}
              </p>
            </Link>
            <p className="mt-3 font-[family-name:var(--font-inter)] text-[18px] leading-[1.6] text-muted">
              {post.excerpt}
            </p>
          </div>
        ))}

        <div className="bg-ink pt-[50px] px-[30px] pb-[35px] h-full">
          <p className="font-['Ubuntu',Helvetica,sans-serif] font-bold text-[22px] text-white mb-6">
            Recent Posts
          </p>
          <div className="flex flex-col gap-6">
            {recent.map((post, i) => (
              <div key={i} className={`flex items-center gap-5 ${i !== recent.length - 1 ? 'border-b border-white/10 pb-6' : ''}`}>
                <Link href={`/blog/${post.id}`} className="block h-[75px] w-[75px] shrink-0 overflow-hidden rounded-full">
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
                </Link>
                <div className="min-w-0">
                  <Link href={`/blog/${post.id}`} className="block">
                    <p className="font-['Ubuntu',Helvetica,sans-serif] text-[18px] font-medium text-white transition-colors hover:text-yellow cursor-pointer leading-snug">
                      {post.title}
                    </p>
                  </Link>
                  <span className="mt-2 flex items-center gap-2 text-[14px] text-orange font-[family-name:var(--font-inter)]">
                    <img src="/images/calender-icon-orange.svg" alt="Date" className="h-4 w-4" />
                    {post.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
