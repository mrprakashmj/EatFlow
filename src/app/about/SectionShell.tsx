import { ReactNode } from "react";

type SectionShellProps = {
  children: ReactNode;
  id?: string;
  bg?: "white" | "ink" | "muted";
  className?: string;
  containerClassName?: string;
  contentClassName?: string;
};

const bgClass: Record<NonNullable<SectionShellProps["bg"]>, string> = {
  white: "bg-white",
  ink: "bg-ink",
  muted: "bg-[#efefef]",
};

/**
 * Enforces section -> container -> content nesting.
 * - section: full-bleed background + vertical rhythm (padding only, no fixed height)
 * - container: horizontal max-width clamp + gutter padding (no fixed width)
 * - content: the section's actual layout (grid/flex), margin/padding only
 */
export default function SectionShell({
  children,
  id,
  bg = "white",
  className = "",
  containerClassName = "",
  contentClassName = "",
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`${bgClass[bg]} py-8 md:py-12 lg:py-28 ${className}`}
    >
      <div
        className={`mx-auto w-full max-w-7xl px-[20px]  ${containerClassName}`}
      >
        <div className={`w-full ${contentClassName}`}>{children}</div>
      </div>
    </section>
  );
}
