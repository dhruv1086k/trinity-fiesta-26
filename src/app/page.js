"use client";

import HeroSection from "@/components/HeroSection";
import GlimpsesSpiral from "@/components/GlimpsesScene";
import EventVideoSection from "@/components/EventVideoSection";
import Link from "next/link";
import EnquirySection from "@/components/EnquirySection";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/assets/bookeh5.webp')] bg-center bg-cover ">
        <HeroSection />
        <EventVideoSection />
        <GlimpsesSpiral />
        <EnquirySection />
      </div>
    </>
  );
}
