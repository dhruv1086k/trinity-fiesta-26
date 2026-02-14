"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
        className="text-4xl md:text-6xl font-bold mb-12 text-center"
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

      {/* Pass Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-3xl h-[250px] md:h-[350px] mb-12"
      >
        <Image
          src="/assets/pass.webp"
          alt="Event Pass"
          fill
          className="object-contain rounded-2xl shadow-2xl"
        />
      </motion.div>

      {/* Buy Button */}
      <a
        href="https://pages.razorpay.com/pl_SF93AKWp3YBG2Z/view"
        target="_blank"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-500 text-black font-semibold px-10 py-2 rounded-full text-lg hover:bg-yellow-400 transition-all cursor-pointer"
        >
          Buy Now
        </motion.button>
      </a>
    </div>
  );
}
