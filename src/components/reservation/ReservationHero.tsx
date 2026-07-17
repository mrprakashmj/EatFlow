import PageHeading from "@/components/ui/PageHeading";
import Image from "next/image";

export default function ReservationHero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-end pr-4 sm:pr-12 md:pr-24 lg:pr-40">
        <div className="relative w-full sm:w-[70%] md:w-[45%] lg:w-[50%] max-w-[800px] flex items-center -translate-y-7 md:-translate-y-8">
          {/* Smooth gradient fade on the left edge to blend with bg-ink */}
          <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-ink to-transparent z-10" />
          <Image
            src="/images/reservation-bg.png"
            alt="Reservation Background"
            width={934}
            height={375}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:py-32 lg:py-40">
        <PageHeading
          title="Reservations"
          description="Secure your dining experience with ease - reserve your table online now for an unforgettable meal at our restaurant."
        />
      </div>
    </section>
  );
}
