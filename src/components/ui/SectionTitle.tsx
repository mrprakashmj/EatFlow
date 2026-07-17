interface SectionTitleProps {
  eyebrow: string;
  heading: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  heading,
  align = "left",
  light = false,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <p
        className={`font-sans text-[18px] leading-[27px] font-medium uppercase tracking-[0.1em] ${light ? "text-white" : "text-ink"
          }`}
      >
        {eyebrow}
        <span className="font-[family-name:var(--font-display)] text-orange">.</span>
      </p>
      <h2
        className={`mt-3 font-heading font-bold text-[32px] sm:text-[40px] lg:text-[50px] leading-[1.2] ${light ? "text-white" : "text-ink"
          }`}
      >
        {heading}
      </h2>
    </div>
  );
}
