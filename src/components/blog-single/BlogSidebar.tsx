import Image from "next/image";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";

const popularPosts = [
  {
    title: "Foodie Finds: Discover Hidden Culinary Gems",
    date: "12 Sep 2024",
    image: "/images/recent post image three.jpg",
  },
  {
    title: "Tasting Notes: Adventures in Flavor Exploration",
    date: "12 Sep 2024",
    image: "/images/recent post image four.jpg",
  },
  {
    title: "Cooking Chronicles: Tales from the Kitchen",
    date: "12 Sep 2024",
    image: "/images/recent post image three.jpg",
  },
];

const categories = ["Food", "Steps", "Dessert"];

export default function BlogSidebar() {
  return (
    <aside className="flex flex-col gap-10">
      {/* Search */}
      <form className="flex h-[55px] w-full overflow-hidden rounded-[6px] border border-[#fb5629]">
        <input
          type="text"
          placeholder="Search..."
          className="min-w-0 flex-1 bg-white px-5 font-inter text-[14px] text-[#4c4a49] outline-none placeholder:text-[#4c4a49]"
        />
        <button
          type="submit"
          aria-label="Search"
          className="flex w-[60px] shrink-0 items-center justify-center bg-[#fb5629] text-white transition-colors hover:bg-[#e14a1f]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>
      </form>

      {/* Popular Post */}
      <div className="border border-[#e7e7e7] bg-white p-6 sm:p-8">
        <h4 className="font-ubuntu text-[20px] font-bold leading-none text-black sm:text-[22px]">
          Popular Post
        </h4>
        <ul className="mt-6 space-y-5">
          {popularPosts.map((post, index) => (
            <li key={index} className="flex items-center gap-4">
              <div className="relative size-[70px] shrink-0 overflow-hidden rounded-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <Link href={`/blog/tasty`} className="group">
                  <p className="font-ubuntu text-[16px] font-semibold leading-[1.3] text-[#010005] transition-colors group-hover:text-[#fb5629]">
                    {post.title}
                  </p>
                </Link>
                <p className="mt-2 flex items-center gap-1.5 text-[14px] leading-none text-[#fb5629]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                  {post.date}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div className="border border-[#e7e7e7] bg-white p-6 sm:p-8">
        <h4 className="font-ubuntu text-[20px] font-bold leading-none text-black sm:text-[22px]">
          Categories
        </h4>
        <ul className="mt-2 flex flex-col">
          {categories.map((cat) => (
            <li key={cat} className="border-b border-[#e7e7e7]">
              <a
                href="#"
                className="group flex items-center gap-3 py-4 font-inter text-[16px] text-[#010005] transition-colors hover:text-[#fb5629] sm:text-[18px]"
              >
                <img 
                  src="/images/dual-right-arrow.svg" 
                  alt="arrow" 
                  className="w-[14px]" 
                />
                {cat}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
