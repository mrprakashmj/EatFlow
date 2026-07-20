"use client";

import { useState } from "react";
import BlogCard, { type BlogPost } from "./BlogCard";
import { POSTS } from "@/data/blog";

const FILTERS = ["All", "Food", "Steps", "Restaurants"] as const;
type Filter = (typeof FILTERS)[number];

export default function BlogGrid() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filteredPosts = (
    activeFilter === "All" || activeFilter === "Steps"
      ? POSTS
      : POSTS.filter((post) => post.tag === activeFilter)
  ).filter(post => post.id !== "7");

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
              <h2 className="mt-3 font-ubuntu font-bold leading-[1.2] lg:leading-[55px] text-[#030406] text-3xl sm:text-4xl lg:text-[50px]">
                Latest Resources
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
                    className={`font-ubuntu font-medium text-base sm:text-[20px] sm:leading-[26px] text-center text-white px-6 sm:px-8 py-3 sm:py-[15px] transition-colors ${
                      isActive
                        ? "bg-[#fb5629]"
                        : "bg-[#030406] hover:bg-[#fb5629]"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid */}
          <div className="mt-12 mb-[100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
