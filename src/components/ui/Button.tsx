import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type Variant = "orange" | "green" | "ink" | "white";

const variants: Record<Variant, string> = {
  orange: "bg-orange text-white",
  green: "bg-green text-white",
  ink: "bg-ink text-white",
  white: "bg-white text-ink",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
  href?: string;
}

export default function Button({
  variant = "orange",
  className = "",
  children,
  href,
  ...props
}: ButtonProps) {
  const commonClasses = `inline-flex h-[45px] sm:h-[55px] lg:h-[60px] min-w-[140px] sm:min-w-[180px] lg:min-w-[200px] items-center justify-center px-4 sm:px-[14px] font-heading font-medium text-[16px] sm:text-[18px] lg:text-[20px] transition-colors cursor-pointer whitespace-nowrap ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={commonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={commonClasses} {...props}>
      {children}
    </button>
  );
}
