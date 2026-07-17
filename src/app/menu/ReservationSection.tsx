import Button from "@/components/ui/Button";

export default function ReservationSection() {
  return (
    <section className="w-full bg-yellow py-16 lg:py-24">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-10 px-6 lg:flex-row lg:items-center lg:gap-20">
        
        {/* Left Side: Title */}
        <div className="w-full lg:w-1/3">
          <h2 className="font-['Ubuntu',Helvetica,sans-serif] font-bold text-[40px] uppercase leading-[1.1] text-ink sm:text-[45px] lg:text-[60px] lg:leading-[66px]">
            Reserve<br />Your Table
          </h2>
          <p className="mt-4 font-[family-name:var(--font-inter)] font-normal text-[18px] leading-normal text-ink lg:text-[20px] lg:leading-[30px]">
            Explore Our Fresh Menu!
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-2/3">
          <form className="flex flex-col gap-4">
            {/* Top Row */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="text"
                placeholder="Name"
                className="h-[55px] w-full bg-white px-5 font-[family-name:var(--font-inter)] text-[16px] text-ink outline-none placeholder:text-ink/60 focus:ring-1 focus:ring-ink sm:w-1/2"
              />
              <div className="flex w-full gap-4 sm:w-1/2">
                <div className="relative w-1/2">
                  <input
                    type="text"
                    placeholder="yyyy/mm/dd"
                    className="h-[55px] w-full bg-white px-5 pr-10 font-[family-name:var(--font-inter)] text-[16px] text-ink outline-none placeholder:text-ink/60 focus:ring-1 focus:ring-ink"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <svg className="h-5 w-5 text-ink/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="1.5" />
                      <line x1="16" y1="2" x2="16" y2="6" strokeWidth="1.5" />
                      <line x1="8" y1="2" x2="8" y2="6" strokeWidth="1.5" />
                      <line x1="3" y1="10" x2="21" y2="10" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
                <div className="relative w-1/2">
                  <input
                    type="text"
                    placeholder="00.00-pm"
                    className="h-[55px] w-full bg-white px-5 pr-10 font-[family-name:var(--font-inter)] text-[16px] text-ink outline-none placeholder:text-ink/60 focus:ring-1 focus:ring-ink"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <svg className="h-5 w-5 text-ink/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                      <polyline points="12 6 12 12 16 14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="tel"
                placeholder="Phone Number"
                className="h-[55px] w-full bg-white px-5 font-[family-name:var(--font-inter)] text-[16px] text-ink outline-none placeholder:text-ink/60 focus:ring-1 focus:ring-ink sm:w-1/2"
              />
              <div className="relative w-full sm:w-1/2">
                <select 
                  defaultValue=""
                  className="h-[55px] w-full appearance-none bg-white px-5 pr-10 font-[family-name:var(--font-inter)] text-[16px] text-ink/60 outline-none focus:ring-1 focus:ring-ink"
                >
                  <option value="" disabled hidden>No of Person</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4+ Persons</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <svg className="h-4 w-4 text-ink/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-2 flex justify-center">
               <Button type="button" variant="ink" className="h-[55px] px-10 hover:bg-green hover:text-white">
                 Book A Table
               </Button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
