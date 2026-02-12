"use client";

import HeroSection from "@/components/HeroSection";
import GlimpsesSpiral from "@/components/GlimpsesScene";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/assets/bookeh5.png')] bg-center bg-cover ">
        <HeroSection />
        <GlimpsesSpiral />
      </div>
    </>
  );
}
