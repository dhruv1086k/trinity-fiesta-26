"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function TextRevealVideo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6, once: true });
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setStart(true), 800);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      {/* VIDEO LAYER */}
      <motion.div
        initial={{ scale: 0.5, borderRadius: "50%" }}
        animate={start ? { scale: 1.2, borderRadius: "0%" } : {}}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <video
          src="/assets/videos/event.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}
