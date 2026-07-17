"use client";

import { useState } from "react";
import MenuSidebar from "./MenuSidebar";
import MenuList from "./MenuList";

export default function MenuBrowser() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="content-menu-browser grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,320px)_1fr]">
      <MenuSidebar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      <MenuList activeCategory={activeCategory} />
    </div>
  );
}
