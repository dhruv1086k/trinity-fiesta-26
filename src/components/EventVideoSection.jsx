"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function TextRevealVideo() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const isInView = useInView(sectionRef, {
    amount: 0.6,
  });

  const [start, setStart] = useState(false);

  // Start animation when in view
  useEffect(() => {
    if (isInView) {
      setTimeout(() => setStart(true), 600);
    }
  }, [isInView]);

  // Control video playback based on visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView]);

  // Pause video when tab inactive
  useEffect(() => {
    const handleVisibility = () => {
      const video = videoRef.current;
      if (!video) return;

      if (document.hidden) {
        video.pause();
      } else if (isInView) {
        video.play().catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      {/* VIDEO LAYER */}
      <motion.div
        initial={{ scale: 0.6, borderRadius: "50%", opacity: 0 }}
        animate={start ? { scale: 1.15, borderRadius: "0%", opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 flex justify-center items-center"
      >
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-[80%] h-[80%] object-cover rounded-2xl"
        >
          <source
            src="https://res.cloudinary.com/deuzzyw0k/video/upload/v1771010486/event_-_Made_with_Clipchamp_1_1_ahfmcs.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Foreground Text */}
      <motion.h1
        initial={{ opacity: 1 }}
        animate={start ? { opacity: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-[10vw] font-extrabold text-white tracking-widest"
        style={{
          fontFamily: "var(--font-witch)",
        }}
      >
        TRINITY FIESTA
      </motion.h1>
    </section>
  );
}
