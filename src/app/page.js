"use client";

import HeroSection from "@/components/HeroSection";
import GlimpsesSpiral from "@/components/GlimpsesScene";
import EventVideoSection from "@/components/EventVideoSection";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/assets/bookeh5.png')] bg-center bg-cover ">
        <HeroSection />
        <EventVideoSection />
        <GlimpsesSpiral />
        <section className="relative w-full py-20 bg-[url('/assets/bookeh5.png')] bg-cover text-white">
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">
              Partner With Us
            </h2>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Become a valued sponsor and showcase your brand at our flagship
              event. Connect with a dynamic audience and gain powerful
              visibility through strategic brand placement and engagement
              opportunities.
            </p>

            {/* Button */}
            <Link
              href="/sponsor-enquiry"
              className="relative z-20 inline-block px-8 py-4 bg-linear-to-r from-amber-400 to-amber-600 text-black font-bold rounded-full text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:shadow-[0_0_50px_rgba(245,158,11,0.7)]"
            >
              Become a Sponsor
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
