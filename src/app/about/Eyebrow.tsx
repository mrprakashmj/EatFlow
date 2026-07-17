type EyebrowProps = {
  children: string;
  tone?: "ink" | "white";
  align?: "left" | "center";
};

export default function Eyebrow({
  children,
  tone = "ink",
  align = "left",
}: EyebrowProps) {
  return (
    <p
      className={`font-inter text-sm font-medium uppercase tracking-[0.1em] ${
        tone === "white" ? "text-white" : "text-ink"
      } ${align === "center" ? "text-center" : "text-left"}`}
    >
      {children}
      <span className="font-bagel text-orange">.</span>
    </p>
  );
}
