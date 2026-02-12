// src/components/LoadingScreen.jsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Scroll to top immediately when component mounts
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const startTime = Date.now();
    const minDuration = 5000; // 5 seconds for animation

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / minDuration) * 100, 100);

      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsLoading(false);
          window.scrollTo({ top: 0, behavior: "instant" });
        }, 500);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-9999 flex items-center justify-center flex-col bg-linear-to-br from-purple-950 via-purple-900 to-black overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        style={{ fontFamily: "var(--font-ethno)" }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`,
            }}
          />
        </div>

        {/* Main Content */}
        <div className="text-center max-w-4xl px-10 md:px-6 relative z-10 ">
          {/* Animated Letters - T I P S with Border Reveal */}
          <div className="flex justify-center items-center gap-4 md:gap-8 mb-12">
            {/* T */}
            <motion.svg
              className="w-24 h-24 md:w-32 md:h-32"
              viewBox="0 0 100 100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.path
                d="M 20 20 L 80 20 M 50 20 L 50 80"
                stroke="url(#gradient1)"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="200"
                initial={{ strokeDashoffset: 200 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#FBBF24" />
                </linearGradient>
              </defs>
            </motion.svg>

            {/* I */}
            <motion.svg
              className="w-24 h-24 md:w-32 md:h-32"
              viewBox="0 0 100 100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <motion.path
                d="M 40 20 L 60 20 M 50 20 L 50 80 M 40 80 L 60 80"
                stroke="url(#gradient2)"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="200"
                initial={{ strokeDashoffset: 200 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient
                  id="gradient2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#FBBF24" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
              </defs>
            </motion.svg>

            {/* P */}
            <motion.svg
              className="w-24 h-24 md:w-32 md:h-32"
              viewBox="0 0 100 100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <motion.path
                d="M 30 20 L 30 80 M 30 20 L 60 20 Q 75 20 75 35 Q 75 50 60 50 L 30 50"
                stroke="url(#gradient3)"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="250"
                initial={{ strokeDashoffset: 250 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient
                  id="gradient3"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#D97706" />
                </linearGradient>
              </defs>
            </motion.svg>

            {/* S */}
            <motion.svg
              className="w-24 h-24 md:w-32 md:h-32"
              viewBox="0 0 100 100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.9 }}
            >
              <motion.path
                d="M 70 30 Q 70 20 55 20 L 45 20 Q 30 20 30 35 Q 30 50 45 50 L 55 50 Q 70 50 70 65 Q 70 80 55 80 L 45 80 Q 30 80 30 70"
                stroke="url(#gradient4)"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="300"
                initial={{ strokeDashoffset: 300 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.5, delay: 0.9, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient
                  id="gradient4"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#FBBF24" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
              </defs>
            </motion.svg>
          </div>

          {/* Percentage Counter */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-amber-500 to-amber-600">
              {Math.round(progress)}%
            </div>

            {/* Progress Bar - Below Counter */}
            <motion.div
              className="w-64 md:w-80 mx-auto mt-6 h-2 bg-black/60 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <motion.div
                className="h-full bg-linear-to-r from-amber-400 via-amber-500 to-amber-600 shadow-[0_0_20px_rgba(245,158,11,0.6)]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </motion.div>
          </motion.div>

          {/* Trinity Fiesta Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wider mb-2">
              Trinity Fiesta
            </h2>
            <motion.div
              className="h-1 w-48 mx-auto rounded-full bg-linear-to-r from-amber-400 to-amber-600"
              initial={{ width: 0 }}
              animate={{ width: 192 }}
              transition={{ delay: 2.3, duration: 0.8 }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-lg md:text-xl text-amber-400 uppercase tracking-widest font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 0.8 }}
          >
            Trinity Institute of Professional Studies
          </motion.p>

          {/* Loading Message */}
          <motion.p
            className="text-sm text-gray-400 mt-6 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2, duration: 0.8 }}
          >
            Preparing your experience...
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
