"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";

export default function Home() {

  const [mounted, setMounted] = useState(false);
  const [size, setSize] = useState({ width: 0, height: 0 });

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

  if (!mounted) return null;

  return (
    <div className="w-full h-screen bg-[url('/assets/bookeh5.png')] bg-center bg-cover relative overflow-hidden">
      {/* Animated Particles/Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Small floating dots */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/60 rounded-full"
            initial={{
              x: Math.random() * size.width,
              y: Math.random() * size.height,
              opacity: 0,
            }}
            animate={{
              y: Math.random() * size.height,
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
              x: Math.random() * size.width,
              y: Math.random() * size.height,
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
                key={i}
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
          }}
        >
          <div className="relative w-full h-full">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
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
                key={i}
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

          {/* black center glow */}
          <div
            className="
    absolute
    top-1/2
    left-1/2
    -translate-1/2
    w-[1000px]
    h-[1000px]
    bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.6),rgba(0,0,0,0.35),transparent_90%)]
    blur-3xl
    pointer-events-none
    z-0
  "
          />

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
                fontFamily: "var(--font-ethno)", // Use your custom font
              }}
            >
              Trinity Fiesta
            </motion.h1>

            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-2xl md:text-3xl my-6 text-amber-100 font-light"
            >
              Annual Fest of Trinity Dwarka
            </motion.h4>

            <motion.h5
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-xl md:text-2xl text-amber-200/90"
            >
              Insanely Crafted For You
            </motion.h5>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-6 mt-12 justify-center"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(245, 158, 11, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold px-4 py-2 md:px-10 md:py-4 rounded-full shadow-lg hover:shadow-amber-500/50 transition-all"
              >
                Register Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-amber-500 text-amber-400 font-semibold px-4 py-2 md:px-10 md:py-4 rounded-full hover:bg-amber-500/10 transition-all"
              >
                Explore Events
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="absolute bottom-4 left-0 right-0 flex justify-around items-center px-8 max-w-5xl mx-auto"
        >
          <div className="text-center cursor-pointer group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 mx-auto mb-2 flex items-center justify-center"
            >
              <svg
                className="w-8 h-8 text-amber-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" />
              </svg>
            </motion.div>
            <p className="text-amber-400 text-sm">About the Fest</p>
          </div>

          <div className="text-center cursor-pointer group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 mx-auto mb-2 flex items-center justify-center"
            >
              <svg
                className="w-8 h-8 text-amber-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a.75.75 0 01.657.407l3.5 7a.75.75 0 01-.657 1.093H6.5a.75.75 0 01-.657-1.093l3.5-7A.75.75 0 0110 2z" />
              </svg>
            </motion.div>
            <p className="text-amber-400 text-sm">Star Night Highlight</p>
          </div>

          <div className="text-center cursor-pointer group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 mx-auto mb-2 flex items-center justify-center"
            >
              <svg
                className="w-8 h-8 text-amber-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.div>
            <p className="text-amber-400 text-sm">Schedule</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
