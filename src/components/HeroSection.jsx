"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [size, setSize] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    setMounted(true);

    const updateSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-screen bg-[url('/assets/bookeh5.png')] bg-center bg-cover relative overflow-hidden">
        <div className="w-full h-screen flex items-center justify-center">
          <div className="text-amber-500 text-2xl">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full h-screen relative overflow-hidden"
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      {/* Animated Particles/Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Small floating dots */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-amber-400/60 rounded-full"
            initial={{
              x: Math.random() * size.width,
              y: Math.random() * size.height,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * size.height],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Larger glowing orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-20 h-20 bg-amber-500/10 rounded-full blur-xl"
            initial={{
              x: Math.random() * size.width,
              y: Math.random() * size.height,
            }}
            animate={{
              x: [null, Math.random() * size.width],
              y: [null, Math.random() * size.height],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Fireworks/Sparkle Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Right Firework */}
        <motion.div
          className="absolute top-1/3 right-10 w-16 h-16"
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <div className="relative w-full h-full">
            {[...Array(12)].map((_, i) => (
              <div
                key={`firework-1-${i}`}
                className="absolute top-1/2 left-1/2 w-px h-6 bg-gradient-to-t from-amber-400 to-transparent"
                style={{
                  transform: `rotate(${i * 30}deg) translateY(-8px)`,
                  transformOrigin: "center",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom Left Firework */}
        <motion.div
          className="absolute bottom-32 left-10 w-16 h-16"
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
            delay: 0.5,
          }}
        >
          <div className="relative w-full h-full">
            {[...Array(12)].map((_, i) => (
              <div
                key={`firework-2-${i}`}
                className="absolute top-1/2 left-1/2 w-px h-6 bg-gradient-to-t from-amber-400 to-transparent"
                style={{
                  transform: `rotate(${i * 30}deg) translateY(-8px)`,
                  transformOrigin: "center",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Center Firework */}
        <motion.div
          className="absolute top-1/4 right-1/3 w-12 h-12"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
            rotate: [0, 90],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 3,
            delay: 1,
          }}
        >
          <div className="relative w-full h-full">
            {[...Array(8)].map((_, i) => (
              <div
                key={`firework-3-${i}`}
                className="absolute top-1/2 left-1/2 w-px h-4 bg-gradient-to-t from-pink-400 to-transparent"
                style={{
                  transform: `rotate(${i * 45}deg) translateY(-6px)`,
                  transformOrigin: "center",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Silhouette Crowd at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="w-full h-screen flex items-center justify-center flex-col relative z-10 px-4">
        {/* Glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative bg-[url('/assets/bg.png')] bg-center bg-cover rounded-3xl px-8 md:px-48 py-20 md:py-26 shadow-2xl mt-10 md:mt-0"
        >
          {/* Black center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.6),rgba(0,0,0,0.35),transparent_70%)] blur-3xl pointer-events-none z-0" />

          {/* Mandala Border Design */}
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ duration: 0.8 }}
            src="/assets/mandala.png"
            alt="Mandala Border"
            className="absolute top-0 left-0 w-24 md:w-48 opacity-80"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="/assets/mandala.png"
            alt="Mandala Border"
            className="absolute top-0 right-0 w-24 md:w-48 opacity-80 rotate-90"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            src="/assets/mandala.png"
            alt="Mandala Border"
            className="absolute bottom-0 left-0 w-24 md:w-48 opacity-80 -rotate-90"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            src="/assets/mandala.png"
            alt="Mandala Border"
            className="absolute bottom-0 right-0 w-24 md:w-48 opacity-80 rotate-180"
          />

          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-purple-500/5 rounded-3xl" />

          <div className="relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-[clamp(2.5rem,5vw,7rem)] font-bold text-amber-500 leading-tight"
              style={{
                textShadow: "0 0 30px rgba(245, 158, 11, 0.3)",
                fontFamily: "var(--font-ethno)",
              }}
            >
              Trinity Fiesta
            </motion.h1>

            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-2xl md:text-3xl my-6 text-amber-100 font-medium"
            >
              Annual Fest of Trinity Dwarka
            </motion.h4>

            <motion.h5
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-xl md:text-2xl font-medium text-amber-200/90"
            >
              Insanely Crafted For You
            </motion.h5>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-6 mt-12 justify-center"
            >
              <a href="https://linktr.ee/trinityfiesta" target="_blank">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(245, 158, 11, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold px-4 py-2 md:px-10 md:py-4 rounded-full shadow-lg hover:shadow-amber-500/50 transition-all cursor-pointer"
                >
                  Register Now
                </motion.button>
              </a>

              <a href="/events">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-amber-500 text-amber-400 font-semibold px-4 py-2 md:px-10 md:py-4 rounded-full hover:bg-amber-500/10 transition-all cursor-pointer"
                >
                  Explore Events
                </motion.button>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="absolute bottom-0 sm:bottom-4 left-0 right-0 flex justify-around items-center px-8 max-w-5xl mx-auto"
        >
          <a href="/events">
            <div className="text-center cursor-pointer group">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 md:h-12 md:w-12 mx-auto mb-2 flex items-center justify-center"
              >
                <img src="/assets/eventIcon.png" alt="" />
              </motion.div>
              <p className="text-amber-400 text-xs md:text-sm">Events</p>
            </div>
          </a>

          <a href="/venue">
            <div className="text-center cursor-pointer group">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 md:h-12 md:w-12 mx-auto mb-2 flex items-center justify-center"
              >
                <img src="/assets/venueIcon.png" alt="" />
              </motion.div>
              <p className="text-amber-400 text-xs md:text-sm">Venue</p>
            </div>
          </a>

          <a href="/schedule">
            <div className="text-center cursor-pointer group">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 md:h-12 md:w-12 mx-auto mb-2 flex items-center justify-center"
              >
                <img src="/assets/scheduleIcon.png" alt="" />
              </motion.div>
              <p className="text-amber-400 text-xs md:text-sm">Schedule</p>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
