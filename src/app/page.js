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
      </div>
    </>
  );
}
