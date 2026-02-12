"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Calendar,
  Users,
  Trophy,
  Music,
  Palette,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { icon: Calendar, label: "Days of Fun", value: "3" },
    { icon: Users, label: "Expected Visitors", value: "5000+" },
    { icon: Trophy, label: "Events", value: "50+" },
    { icon: Music, label: "Performances", value: "20+" },
  ];

  const features = [
    {
      icon: Music,
      title: "Cultural Events",
      description:
        "Experience vibrant dance performances, melodious music competitions, and theatrical masterpieces.",
    },
    {
      icon: Trophy,
      title: "Competitions",
      description:
        "Showcase your talents in debates, quizzes, coding marathons, and creative challenges.",
    },
    {
      icon: Palette,
      title: "Art & Creativity",
      description:
        "Unleash your artistic side with painting, photography, fashion shows, and design contests.",
    },
    {
      icon: Sparkles,
      title: "Celebrity Nights",
      description:
        "Enjoy electrifying performances by renowned artists and bands under the stars.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/assets/bg.png"
          alt="Background"
          fill
          className="object-cover opacity-30"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="px-4 py-32">
          <div className="mx-auto max-w-6xl text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center justify-center gap-2"
            >
              <Sparkles className="h-6 w-6 text-cyan-400" />
              <span className="text-sm font-bold tracking-widest text-cyan-400 uppercase">
                About Trinity Fiesta
              </span>
              <Sparkles className="h-6 w-6 text-cyan-400" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 text-5xl font-black tracking-wide uppercase md:text-7xl lg:text-8xl"
              style={{
                background:
                  "linear-gradient(90deg, #fff, #22d3ee, #a855f7, #fff)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              The Ultimate
              <br />
              Cultural Festival
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl"
            >
              Trinity Fiesta is the annual cultural extravaganza that brings
              together creativity, talent, and innovation. A celebration of art,
              music, dance, and technology that transcends boundaries and
              creates unforgettable memories.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 gap-6 md:grid-cols-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="rounded-2xl border border-cyan-400/30 bg-black/60 p-6 backdrop-blur-md"
                >
                  <stat.icon className="mx-auto mb-3 h-10 w-10 text-cyan-400" />
                  <div className="mb-1 text-3xl font-black text-white md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold tracking-wide text-gray-400 uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-4xl font-black tracking-wide uppercase md:text-5xl">
                What We{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Offer
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-gray-300">
                A diverse range of events designed to celebrate creativity,
                innovation, and cultural excellence
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-8 md:grid-cols-2"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="rounded-2xl border border-white/10 bg-black/60 p-8 backdrop-blur-md transition-all duration-300"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="mb-6 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 p-4"
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  <h3 className="mb-3 text-2xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Text Content */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInLeft}
              >
                <h2 className="mb-6 text-4xl font-black tracking-wide uppercase md:text-5xl">
                  Our{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Story
                  </span>
                </h2>
                <div className="space-y-4 text-gray-300">
                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="leading-relaxed"
                  >
                    Trinity Fiesta began as a small college gathering and has
                    evolved into one of the most anticipated cultural festivals
                    in the region. What started with a handful of passionate
                    students has grown into a three-day extravaganza attracting
                    thousands of participants.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="leading-relaxed"
                  >
                    Each year, we push the boundaries of creativity and
                    innovation, bringing together artists, performers, tech
                    enthusiasts, and cultural ambassadors from across Delhi.
                    Trinity Fiesta is not just an event—it's an experience that
                    leaves a lasting impact.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="leading-relaxed"
                  >
                    Our mission is to provide a platform where talent meets
                    opportunity, where creativity flourishes, and where memories
                    are made that last a lifetime. Join us in celebrating the
                    spirit of unity, diversity, and excellence.
                  </motion.p>
                </div>

                {/* Key Highlights */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mt-8 space-y-3"
                >
                  {[
                    "Premier cultural festival of the year",
                    "Platform for emerging artists and performers",
                    "Blend of tradition and modern innovation",
                    "Networking opportunities with industry leaders",
                  ].map((highlight, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-center gap-3"
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                        className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                      />
                      <span className="text-gray-300">{highlight}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Image Placeholder */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInRight}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-2xl border-2 border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 shadow-[0_0_40px_rgba(34,211,238,0.3)] backdrop-blur-md"
                >
                  <div className="flex aspect-[4/3] w-full items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        animate={{
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Sparkles className="mx-auto mb-4 h-16 w-16 text-cyan-400" />
                      </motion.div>
                      <p className="text-xl font-bold text-white">
                        Trinity Fiesta
                      </p>
                      <p className="text-sm text-gray-400">
                        Moments that Matter
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating decorative elements */}
                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-500/20 blur-xl"
                />
                <motion.div
                  animate={{
                    y: [10, -10, 10],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
              className="rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-12 text-center backdrop-blur-md"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-4 text-3xl font-black uppercase md:text-4xl"
              >
                Ready to Join the
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  {" "}
                  Fiesta
                </span>
                ?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8 text-gray-300"
              >
                Don't miss out on the most exciting cultural festival of the
                year!
              </motion.p>
              <motion.a
                href="/events"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-8 py-4 font-bold tracking-wider text-white uppercase shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(168,85,247,0.7)]"
              >
                View Events
                <Sparkles className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
