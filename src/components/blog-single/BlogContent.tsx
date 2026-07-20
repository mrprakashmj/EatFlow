import Image from "next/image";
import { Quote } from "lucide-react";

const traditionPoints = [
  "Evokes nostalgia, comforting memories.",
  "Honors heritage, preserves cultural legacy.",
  "Appeals to diverse palates, generations.",
  "Seamlessly blends tradition with innovation.",
  "Creates unforgettable culinary experiences.",
];

const artistryPoints = [
  "Captivates eyes instantly, enhancing anticipation.",
  "Delights taste buds profoundly, ensuring satisfaction.",
  "Creates lasting impressions, fostering loyalty.",
];

export default function BlogContent() {
  return (
    <article className="min-w-0">
      <p className="font-inter text-[16px] leading-[1.6] text-[#4c4a49] sm:text-[18px]">
        Everyone takes pleasure in creating outstanding culinary experiences
        that tickle the taste buds and leave a lasting impact. Join us as we
        explore the heart of our kitchen and discover the secrets behind our
        delectable dishes.
      </p>

      {/* A Taste of Tradition */}
      <div className="mt-10 sm:mt-12">
        <h2 className="font-ubuntu text-[28px] font-bold leading-none text-[#010005] sm:text-[36px]">
          A Taste of Tradition
        </h2>
        <p className="mt-6 font-inter text-[16px] leading-[1.6] text-[#4c4a49] sm:text-[18px]">
          From classic comfort nourishment to time-honored classics with a
          modern twist, each dish represents the dedication that we have to
          conserving the spirit of traditional cuisine while welcoming
          innovation.
        </p>

        <ul className="mt-6 space-y-3">
          {traditionPoints.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-1.5 flex shrink-0 text-[#4c4a49]">
                <svg width="6" height="8" viewBox="0 0 6 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 0L5 4L1 8V0Z" />
                </svg>
              </span>
              <span className="font-inter text-[16px] leading-[1.6] text-[#4c4a49] sm:text-[18px]">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Farm-to-Table Freshness */}
      <div className="mt-10 sm:mt-12">
        <h3 className="font-ubuntu text-[24px] font-bold leading-none text-[#010005] sm:text-[30px]">
          Farm-to-Table Freshness
        </h3>
        <p className="mt-6 font-inter text-[16px] leading-[1.6] text-[#4c4a49] sm:text-[18px]">
          Experience the essence of culinary perfection with our commitment to
          farm-to-table freshness. At the heart of every excellent dish is the
          promise of high-quality ingredients carefully selected for your
          delight.
        </p>

        {/* Feature image */}
        <div className="relative mt-8 aspect-[770/320] w-full overflow-hidden">
          <Image 
            src="/images/blog-details-image.jpg" 
            alt="Farm to table freshness" 
            fill 
            className="object-cover"
          />
        </div>

        <p className="mt-8 font-inter text-[16px] leading-[1.6] text-[#4c4a49] sm:text-[18px]">
          We take pleasure in using the freshest fruit, locally sourced
          meats, and responsibly obtained seafood to create dishes that both delight
          your taste buds and feed your body. Our commitment to the
          farm-to-table philosophy ensures that each bite is a symphony of
          taste.
        </p>
      </div>

      {/* Quote */}
      <div className="mt-10 flex flex-col items-center justify-center bg-[#f9c34a] px-6 py-12 text-center sm:mt-12 sm:px-16 sm:py-16">
        <span className="mb-6 flex size-[54px] shrink-0 items-center justify-center rounded-full bg-[#1a1b21]">
          <Quote className="size-[20px] text-white" fill="white" strokeWidth={0} />
        </span>
        <p className="font-inter text-[18px] italic leading-[1.6] text-[#010005] sm:text-[20px] max-w-[650px]">
          &ldquo;Enjoy the essence of freshness with farm-to-table with food
          preparation, where each bite honors seasonal bounty and culinary
          brilliance.&rdquo;
        </p>
      </div>

      {/* Artistry on a Plate */}
      <div className="mt-10 sm:mt-12">
        <h3 className="font-ubuntu text-[24px] font-bold leading-none text-[#010005] sm:text-[30px]">
          Artistry on a Plate
        </h3>
        <p className="mt-6 font-inter text-[16px] leading-[1.6] text-[#4c4a49] sm:text-[18px]">
          Step into a world where culinary inventiveness knows no
          limitations, and ordinary becomes extraordinary with each stroke
          of our culinary artists&apos; talent. In our kitchen, fresh foods
          are more than just components; they are the foundation of
          gastronomic masterpieces.
        </p>

        <ol className="mt-6 space-y-4">
          {artistryPoints.map((point, index) => (
            <li
              key={point}
              className="font-inter text-[16px] font-semibold leading-[1.6] text-[#4c4a49] sm:text-[18px]"
            >
              {index + 1}. {point}
            </li>
          ))}
        </ol>

        <p className="mt-6 font-inter text-[16px] leading-[1.6] text-[#4c4a49] sm:text-[18px]">
          As you indulge in our creations, you&apos;ll find yourself
          immersed in a world where culinary excellence reigns supreme.
        </p>
      </div>
    </article>
  );
}
