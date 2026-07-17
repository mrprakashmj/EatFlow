"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import FoodCard from "./FoodCard";
import { menuItems as items } from "@/data/menu";



export default function MenuList({ activeCategory }: { activeCategory: string }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = items.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="content-menu-list">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <h2 className="font-ubuntu text-[42px] font-bold text-ink sm:text-[48px]">Delecious Menus</h2>
        <div className="flex items-center gap-3 border border-hairline/60 bg-white px-5 py-3">
          <Search className="size-4 text-hairline" strokeWidth={2} />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-40 bg-transparent text-sm text-ink placeholder:text-hairline focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <FoodCard key={item.name} item={item} searchQuery={searchQuery} />)
        ) : (
          <p className="text-ink/60">No items found matching your criteria.</p>
        )}
      </div>
    </div>
  );
}
