const logos = [
  "/images/client-logo-01.svg",
  "/images/client-logo-02.svg",
  "/images/client-logo-03.svg",
  "/images/client-logo-04.svg",
  "/images/client-logo-05.svg",
];

const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

export default function ClientLogo() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-14 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
      
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
        <h3 className="shrink-0 font-heading text-[16px] sm:text-[20px] font-medium uppercase text-ink">
          Join our happy <span className="text-orange">1K+</span> sponsors worldwide!
        </h3>
        <div className="h-[2px] w-full bg-line" />
      </div>

      <div className="relative mt-14 flex w-full">
        {/* Edge Fade Masks */}
        <div className="pointer-events-none absolute -bottom-[25%] -left-[8%] z-10 min-h-[130px] min-w-[210px] bg-[linear-gradient(270deg,#ffffffa6_64%,#fff)] blur-[20px]" />
        <div className="pointer-events-none absolute -bottom-[25%] -right-[8%] z-10 min-h-[130px] min-w-[210px] bg-[linear-gradient(90deg,#ffffffa6_64%,#fff)] blur-[20px]" />

        <div className="flex w-max animate-marquee items-center gap-20 sm:gap-32">
          {duplicatedLogos.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Client logo`}
              className="h-10 w-auto shrink-0 transition-opacity sm:h-12"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
