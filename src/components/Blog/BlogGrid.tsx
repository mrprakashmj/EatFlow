"use client";

import { useState } from "react";
import BlogCard, { type BlogPost } from "./BlogCard";

const FILTERS = ["All", "Food", "Steps", "Restaurants"] as const;
type Filter = (typeof FILTERS)[number];

const POSTS: BlogPost[] = [
  {
    id: "1",
    title: "The top 10 most famous Indian Dishes.",
    excerpt: "Iterative corporate strategy foster thinking the work place diversity",
    tag: "Food",
    date: "10 Aug 25",
  },
  {
    id: "2",
    title: "Chef's Secrets: Unveiling Culinary Marvels",
    excerpt: "Unlock culinary expertise with insider tips from our chefs.",
    tag: "Restaurants",
    date: "10 Aug 25",
  },
  {
    id: "3",
    title: "Foodie Finds: Hidden Gems Unveiled Here",
    excerpt: "Discover culinary treasures and must-try dining destinations.",
    tag: "Food",
    date: "10 Aug 25",
  },
  {
    id: "4",
    title: "From Farm to Table: Freshness Defined",
    excerpt: "Iterative corporate strategy foster thinking the work place diversity",
    tag: "Restaurants",
    date: "10 Aug 25",
  },
  {
    id: "5",
    title: "Cooking Chronicles: Tales from the Kitchen",
    excerpt: "Iterative corporate strategy foster thinking the work place diversity",
    tag: "Food",
    date: "10 Aug 25",
  },
  {
    id: "6",
    title: "Tasting Notes: Adventures in Flavor Exploration",
    excerpt: "Iterative corporate strategy foster thinking the work place diversity",
    tag: "Restaurants",
    date: "10 Aug 25",
  },
];

export default function BlogGrid() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filteredPosts =
    activeFilter === "All" || activeFilter === "Steps"
      ? POSTS
      : POSTS.filter((post) => post.tag === activeFilter);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-0">
        <div className="py-16 sm:py-20 lg:pb-[100px]">
          {/* Section heading + filters */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <p className="font-inter font-medium uppercase tracking-[1.6px] text-[#23222a] text-sm sm:text-base">
                OUR BLOGS<span className="font-bagel text-[#fb5629]">.</span>
              </p>
              <h2 className="mt-3 font-ubuntu font-bold leading-[1.2] text-[#23222a] text-3xl sm:text-4xl lg:text-[50px]">
                Latest Blogs
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {FILTERS.map((filter) => {
                const isActive = filter === activeFilter;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`font-ubuntu font-medium text-base sm:text-lg text-center text-white rounded-full px-6 sm:px-8 py-3 sm:py-[21px] transition-colors ${
                      isActive
                        ? "bg-[#fb5629]"
                        : "bg-[#23222a] hover:bg-[#fb5629]"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
