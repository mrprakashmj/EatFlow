import Image from "next/image";

interface BlogSingleHeroProps {
  title: string;
  category: string;
  date?: string;
  readTime?: string;
  authorName: string;
  authorRole: string;
  image?: string;
}

export default function BlogSingleHero({
  title,
  category,
  date,
  readTime = "13 Min. Read",
  authorName,
  authorRole,
  image = "/images/blog-thumbnail-01.jpg",
}: BlogSingleHeroProps) {
  return (
    <>
      {/* Black section — title only */}
      <div className="bg-[#030406] pt-20 sm:pt-28 lg:pt-[120px] pb-10 sm:pb-12 lg:pb-[50px]">
        <h1 className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-4 text-center font-ubuntu text-[32px] font-bold leading-[1.15] text-white sm:text-[42px] lg:text-[56px]">
          {title}
        </h1>
      </div>

      {/* Image section — black bg strip on top half, white on bottom half */}
      <div>
        {/* Full-width black background for the top half of the image */}
        <div className="bg-[#030406] h-[125px] sm:h-[175px] lg:h-[250px]" />
        {/* Full-width white background for the bottom half of the image */}
        <div className="bg-white h-[125px] sm:h-[175px] lg:h-[250px]" />
        {/* Image container — pulled up to cover both halves */}
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-4 -mt-[250px] sm:-mt-[350px] lg:-mt-[500px]">
          <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[500px]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* White section — author bar */}
      <div className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-4">
          {/* Author + meta bar */}
          <div className="mt-6 sm:mt-8 flex items-center justify-between pb-8 sm:pb-10">
            {/* Author */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <div className="relative size-[44px] sm:size-[50px] overflow-hidden rounded-full shrink-0">
                <Image
                  src="/images/author-image-01.jpg"
                  alt={authorName}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-ubuntu text-[15px] sm:text-[18px] font-bold leading-none text-[#030406]">
                  {authorName}
                </p>
                <p className="mt-[6px] font-inter text-[12px] sm:text-[14px] leading-none text-[#4c4a49]">
                  {authorRole}
                </p>
              </div>
            </div>

            {/* Divider line */}
            <div className="flex-1 border-t border-[#d1d1d1] mx-4 sm:mx-6" />

            {/* Read time + category */}
            <div className="flex items-center gap-3 sm:gap-5 shrink-0">
              <span className="font-inter text-[12px] sm:text-[14px] text-[#4c4a49]">
                {readTime}
              </span>
              <span className="flex items-center gap-2 font-inter text-[14px] sm:text-[16px] text-[#fb5629]">
                <img
                  src="/images/pen-tool-icon.svg"
                  alt="category"
                  className="size-[14px] sm:size-[16px]"
                />
                {category}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
