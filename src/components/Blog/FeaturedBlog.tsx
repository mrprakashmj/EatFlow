import Image from "next/image";

export default function FeaturedBlog() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-0">
        <div className="bg-[#FFF2D4] p-[30px] lg:pr-[80px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative  w-full aspect-[4/3]">
            <Image
              src="/images/blog-thumbnail-01.jpg"
              alt="Local Flavors: Exploring Regional Delicacies Together"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-5 ">
              <span className="inline-flex items-center text-[#fb5629] font-inter text-base sm:text-lg">
                Food
              </span>
            </div>

            <h2 className="mt-[10px]  font-ubuntu font-bold leading-[1.3] text-[#0d0c1e] text-2xl sm:text-3xl lg:text-[32px]">
              Local Flavors: Exploring Regional Delicacies Together
            </h2>

            <p className="mt-5 font-inter font-normal leading-[1.5] text-[#4c4a49] text-base sm:text-lg">
              Join us on a journey through local cuisine, celebrating the diverse
              flavors of our region.
            </p>

            <div className="mt-8 h-px w-full bg-[#4c4a49]/30" />

            <div className="mt-8 flex items-center gap-4">
              <div className="relative size-[50px] rounded-full overflow-hidden shrink-0">
                <Image
                  src="/images/author-image-01.jpg"
                  alt="Emma Smith"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-ubuntu font-medium text-black text-lg sm:text-xl">
                  Emma Smith
                </p>
                <p className="font-inter font-normal text-black text-sm">Author</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
