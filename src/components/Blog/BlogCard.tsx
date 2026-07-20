import Image from "next/image";
import Link from "next/link";

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  image?: string;
};

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.id}`} className="block h-full group">
      <article className="flex flex-col bg-[#f4f4f4] p-5 sm:p-6 h-full ">
        <div className="relative h-[200px] sm:h-[280px] w-full overflow-hidden">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
            className="object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#fb5629]/25 via-[#efefef] to-[#29af66]/20 transition-transform duration-300 hover:scale-110 cursor-pointer" />
          )}
        </div>

        <div className="flex flex-col flex-1 mt-6">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[15px] sm:text-[18px]">
            <span className="flex items-center gap-2 text-[#fb5629] font-inter whitespace-nowrap">
              <img src="/images/pen-tool-icon.svg" alt="Category" className="h-4 w-4" />
              {post.tag}
            </span>
            <span className="text-[#d1d1d1]">|</span>
            <span className="flex items-center gap-2 text-[#030406] font-inter whitespace-nowrap">
              <img src="/images/calender-icon.svg" alt="Date" className="h-4 w-4" />
              {post.date}
            </span>
          </div>

        <h3 className="mt-4 font-ubuntu font-bold leading-[1.3] text-[#030406] text-[20px] sm:text-[25px] transition-colors hover:text-[#fb5629] cursor-pointer">
            {post.title}
          </h3>

          <p className="mt-3 font-inter font-normal leading-[1.6] text-[#4c4a49] text-[15px] sm:text-[18px]">
            {post.excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}
