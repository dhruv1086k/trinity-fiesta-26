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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { icon: Calendar, label: "Days of Fun", value: "2" },
    { icon: Trophy, label: "Events", value: "40+" },
    { icon: Music, label: "Performances", value: "10+" },
  ];

  const features = [
    {
      icon: Music,
      title: "Events",
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
          src="/assets/bg.webp"
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
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 text-5xl font-black tracking-wide uppercase md:text-7xl lg:text-8xl"
              style={{
                background:
                  "linear-gradient(90deg, #F59E0B, #FBBF24, #D97706, #F59E0B)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                fontFamily: "var(--font-ethno)",
              }}
            >
              The Ultimate
              <br />
              Annual Festival
            </motion.h1>

            <div style={{ fontFamily: "var(--font-poppins)" }}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mx-auto mb-12 max-w-4xl text-lg leading-relaxed text-gray-300 md:text-xl"
              >
                {` Trinity Fiesta is the annual  extravaganza that brings
                together creativity, talent, and innovation. A celebration of
                art, music, dance, and technology that transcends boundaries and
                creates unforgettable memories.`}
              </motion.p>

              {/* Stats */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 gap-6 md:grid-cols-3"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="rounded-2xl border border-amber-400/30 bg-black/60 p-6 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                  >
                    <stat.icon className="mx-auto mb-3 h-10 w-10 text-amber-400" />
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
          </div>
        </section>

        {/* What We Offer Section */}
        <section
          className="px-4 py-20"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
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
                <span className="bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Offer
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-gray-300">
                A diverse range of events designed to celebrate creativity,
                innovation, and excellence
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
                  className="rounded-2xl border border-white/10 bg-black/60 p-8 backdrop-blur-md transition-all duration-300 hover:border-amber-400/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="mb-6 inline-flex items-center justify-center rounded-full bg-linear-to-br from-amber-400 to-amber-600 p-4 shadow-[0_0_20px_rgba(245,158,11,0.4)]"
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
        <section
          className="px-4 py-20"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          <div className="mx-auto max-w-6xl overflow-hidden">
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
                  <span className="bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
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
                    {`Trinity Fiesta began as a small college gathering and has
                    evolved into one of the most anticipated  festivals
                    in the region. What started with a handful of passionate
                    students has grown into a two-day extravaganza attracting
                    thousands of participants.`}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="leading-relaxed"
                  >
                    {`Each year, we push the boundaries of creativity and
                    innovation, bringing together artists, performers, tech
                    enthusiasts, and  ambassadors from across Delhi.
                    Trinity Fiesta is not just an event—it's an experience that
                    leaves a lasting impact.`}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="leading-relaxed"
                  >
                    {`Our mission is to provide a platform where talent meets
                    opportunity, where creativity flourishes, and where memories
                    are made that last a lifetime. Join us in celebrating the
                    spirit of unity, diversity, and excellence.`}
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
                    "Premier  festival of the year",
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
                        className="h-2 w-2 rounded-full bg-linear-to-r from-amber-400 to-amber-600"
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
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-2xl border-2 border-amber-400/30 bg-linear-to-br from-amber-500/20 to-amber-600/20 shadow-[0_0_40px_rgba(245,158,11,0.3)] backdrop-blur-md w-100 h-100"
                >
                  <div className="flex aspect-4/3 w-full h-full items-center justify-center relative">
                    <Image
                      src="https://res.cloudinary.com/deuzzyw0k/image/upload/v1770912022/481754612_18050762732332829_6839191128153065189_n.jpg_stp_dst-jpg_e15_tt6__nc_cat_108_ig_cache_key_MzU3NTE1MTYyNjA2NTU5ODEzNjE4MDUwNzYyNzI2MzMyODI5.3-ccb7-5_ccb_7-5__nc_sid_58cdad_efg_eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLj_qgxjii.jpg"
                      alt="Trinity Fiesta celebration"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="px-4 py-20"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
              className="rounded-3xl border border-amber-400/30 bg-linear-to-br from-amber-500/10 to-amber-600/10 p-12 text-center backdrop-blur-md shadow-[0_0_40px_rgba(245,158,11,0.2)]"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-4 text-3xl font-black uppercase md:text-4xl"
              >
                Ready to Join the
                <span className="bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
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
                {`Don't miss out on the most exciting  festival of the
                year!`}
              </motion.p>
              <motion.a
                href="/events"
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-amber-400 to-amber-600 px-8 py-4 font-bold tracking-wider text-black uppercase shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(245,158,11,0.7)]"
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
