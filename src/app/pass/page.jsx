"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Info } from "lucide-react";

export default function BuyPassPage() {
  return (
    <div
      className="min-h-screen bg-black text-white bg-[url('/assets/bookeh5.webp')] bg-center bg-cover flex flex-col items-center justify-center px-6 py-16"
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-12 text-center mt-14"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #F59E0B, #FBBF24, #D97706, #F59E0B)",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          fontFamily: "var(--font-ethno)",
        }}
      >
        Buy Event Pass
      </motion.h1>

      {/* Rupee Symbol Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-48 h-12 md:w-64 md:h-20 mb-12 "
      >
        <Image
          src="/assets/ruppee.webp"
          alt="Rupee Symbol"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Pass Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-3xl h-62.5 md:h-87.5 mb-8"
      >
        <Image
          src="/assets/pass.webp"
          alt="Event Pass"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Important Notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-8 max-w-2xl w-full"
      >
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
            <p className="text-amber-200 text-sm md:text-base leading-relaxed">
              <span className="font-bold text-amber-400">Important:</span>{" "}
              Please collect your physical pass at the event gate by showing
              your payment proof/receipt.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Buy Button */}
      <a
        href="https://pages.razorpay.com/pl_SF93AKWp3YBG2Z/view"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-500 text-black font-semibold px-10 py-2 rounded-full text-lg hover:bg-yellow-400 transition-all cursor-pointer shadow-lg shadow-yellow-500/30"
        >
          Buy Now
        </motion.button>
      </a>
    </div>
  );
}
