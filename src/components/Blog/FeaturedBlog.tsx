import { UtensilsCrossed, CalendarDays } from "lucide-react";

export default function FeaturedBlog() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-0">
        <div className="py-16 sm:py-20 lg:py-[100px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image placeholder */}
          <div className="relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#fb5629]/25 via-[#efefef] to-[#29af66]/20" />

          {/* Content */}
          <div>
            <div className="flex items-center gap-5">
              <span className="inline-flex items-center gap-[10px] rounded-[5px] text-[#fb5629] font-inter text-base sm:text-lg">
                <UtensilsCrossed className="size-[18px]" strokeWidth={2} />
                Food
              </span>
              <span className="h-[22px] w-px bg-[#4c4a49]/30 rotate-12" />
              <span className="inline-flex items-center gap-[10px] rounded-[5px] text-[#4c4a49] font-inter text-base sm:text-lg">
                <CalendarDays className="size-[18px]" strokeWidth={2} />
                10 Aug 25
              </span>
            </div>

            <h2 className="mt-6 font-ubuntu font-bold leading-[1.3] text-[#0d0c1e] text-2xl sm:text-3xl lg:text-[30px]">
              Local Flavors: Exploring Regional Delicacies Together
            </h2>

            <p className="mt-5 font-inter font-normal leading-[1.5] text-[#4c4a49] text-base sm:text-lg">
              Join us on a journey through local cuisine, celebrating the diverse
              flavors of our region.
            </p>

            <div className="mt-8 h-px w-full bg-[#4c4a49]/20" />

            <div className="mt-8 flex items-center gap-4">
              <div className="size-[50px] rounded-full bg-gradient-to-br from-[#fb5629] to-[#29af66] shrink-0" />
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
