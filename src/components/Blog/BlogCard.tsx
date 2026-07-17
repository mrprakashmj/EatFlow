import { UtensilsCrossed, CalendarDays } from "lucide-react";

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  tag: "Food" | "Restaurants";
  date: string;
};

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-[#efefef] rounded-2xl overflow-hidden flex flex-col h-full">
      <div className="relative w-full aspect-[16/13] bg-gradient-to-br from-[#fb5629]/25 via-[#efefef] to-[#29af66]/20" />

      <div className="flex flex-col flex-1 p-6 sm:p-8">
        <div className="flex items-center gap-5">
          <span className="inline-flex items-center gap-[10px] text-[#fb5629] font-inter text-base">
            <UtensilsCrossed className="size-[18px]" strokeWidth={2} />
            {post.tag}
          </span>
          <span className="h-[22px] w-px bg-[#4c4a49]/30 rotate-12" />
          <span className="inline-flex items-center gap-[10px] text-[#4c4a49] font-inter text-base">
            <CalendarDays className="size-[18px]" strokeWidth={2} />
            {post.date}
          </span>
        </div>

        <h3 className="mt-5 font-ubuntu font-bold leading-[1.2] text-[#23222a] text-xl sm:text-2xl">
          {post.title}
        </h3>

        <p className="mt-4 font-inter font-normal leading-[1.5] text-[#4c4a49] text-base sm:text-lg">
          {post.excerpt}
        </p>
      </div>
    </article>
  );
}
