import React from "react";

interface PageHeadingProps {
  title: React.ReactNode;
  description: React.ReactNode;
  className?: string;
}

export default function PageHeading({
  title,
  description,
  className = "",
}: PageHeadingProps) {
  return (
    <div className={`flex max-w-xl flex-col items-start gap-4 sm:gap-6 text-left ${className}`}>
      <h1 className="font-ubuntu text-[40px] sm:text-[56px] lg:text-[72px] xl:text-[80px] font-bold leading-[1.1] sm:leading-[1.15] lg:leading-[88px] text-white">
        {title}
      </h1>
      <p className="font-inter text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[30px] text-white/80">
        {description}
      </p>
    </div>
  );
}
