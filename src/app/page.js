"use client";

import HeroSection from "@/components/HeroSection";
import GlimpsesSpiral from "@/components/GlimpsesScene";
import EventVideoSection from "@/components/EventVideoSection";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/assets/bookeh5.png')] bg-center bg-cover ">
        <HeroSection />
        <EventVideoSection />
        <GlimpsesSpiral />
        <section className="w-full py-20 bg-[url('/assets/bookeh5.png')] text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">
              Partner With Us
            </h2>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Become a valued sponsor and showcase your brand at our flagship event.
              Connect with a dynamic audience and gain powerful visibility through
              strategic brand placement and engagement opportunities.
            </p>

            {/* Button */}
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold rounded-full text-lg hover:scale-105 transition-transform duration-300 shadow-lg">
              Become a Sponsor
            </button>

          </div>
        </section>
      </div>
    </>
  );
}
