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
    <div className={`flex max-w-xl flex-col items-start gap-6 text-left ${className}`}>
      <h1 className="font-ubuntu text-[80px] font-bold leading-[88px] text-white">
        {title}
      </h1>
      <p className="font-inter text-[20px] leading-[30px] text-white/80">
        {description}
      </p>
    </div>
  );
}
