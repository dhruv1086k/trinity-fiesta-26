"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Mail,
  Phone,
  Navigation,
  ChevronRight,
  Instagram,
  Facebook,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const navItems = [
    { name: "HOME", path: "/" },
    { name: "EVENTS", path: "/events" },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      link: "https://www.instagram.com/trinityfiesta",
      name: "Instagram",
      gradient: "from-purple-600 via-pink-600 to-orange-500",
    },
    {
      icon: FaWhatsapp,
      link: "https://api.whatsapp.com/send?phone=7011689397",
      name: "WhatsApp",
      gradient: "from-green-400 to-green-600",
    },
    {
      icon: Facebook,
      link: "https://www.facebook.com/trinitydwarkafiesta",
      name: "Facebook",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      icon: FaGlobe,
      link: "https://www.tips.edu.in/",
      name: "Website",
      gradient: "from-amber-400 to-amber-600",
    },
  ];

  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path) => {
    router.push(path);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
        ease: "easeOut",
      },
    },
  };

  return (
    <footer
      className="relative overflow-hidden border-t border-white/10 bg-black px-6 pt-20 pb-10 text-white"
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      {/* Background Effect */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-amber-500/5 via-amber-600/5 to-transparent" />

      {/* Top Accent Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute top-0 left-1/2 h-0.5 w-full max-w-4xl -translate-x-1/2 bg-linear-to-r from-transparent via-amber-400 to-transparent"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 mx-auto mb-16 grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4"
      >
        {/* Column 1 - Brand */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-start"
        >
          <motion.div className="mb-6 flex items-center gap-3">
            <div className="relative h-20 w-50">
              <Image
                src="/assets/trinityFiestaLogo.webp"
                fill
                alt="TRINITY FIESTA Logo"
                className="rounded-lg object-cover"
              />
            </div>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-left text-sm leading-relaxed text-gray-300"
          >
            {`TRINITY FIESTA 2026 – Trinity Dwarka's premier annual fest, showcasing
            innovation, competitions, and creativity in the digital era!`}
          </motion.p>
        </motion.div>

        {/* Column 2 - Navigation */}
        <motion.div variants={itemVariants}>
          <h4 className="mb-6 bg-linear-to-r from-amber-400 to-amber-500 bg-clip-text text-lg font-bold text-transparent">
            Navigation
          </h4>
          <ul className="space-y-4 text-sm text-gray-300">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.button
                  onClick={() => handleNavigation(item.path)}
                  whileHover={{ x: 5 }}
                  className="group flex cursor-pointer items-center gap-2 transition-colors hover:text-amber-400"
                >
                  <ChevronRight className="h-4 w-4 text-amber-400 transition-transform group-hover:translate-x-1" />
                  {item.name}
                </motion.button>
              </motion.li>
            ))}
          </ul>

          {/* Social Media Icons */}
          <div className="mt-8">
            <h5 className="mb-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Follow Us
            </h5>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:border-transparent overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Icon */}
                  <social.icon className="relative z-10 h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Column 3 - Event Details */}
        <motion.div variants={itemVariants}>
          <h4 className="mb-6 bg-linear-to-r from-amber-400 to-amber-500 bg-clip-text text-lg font-bold text-transparent">
            Event Timeline
          </h4>
          <div className="space-y-5">
            <motion.div
              whileHover={{ x: 5 }}
              className="group flex items-start gap-4 text-left transition-all duration-300"
            >
              <Calendar className="h-6 w-6 text-amber-400 transition-colors group-hover:text-amber-500" />
              <div>
                <p className="text-sm font-bold tracking-wider text-white uppercase">
                  February 26-27 2026
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  Trinity Dwarka Main Campus
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              className="group flex items-start gap-4 text-left transition-all duration-300"
            >
              <MapPin className="h-6 w-6 text-amber-400 transition-colors group-hover:text-amber-500" />
              <div>
                <p className="text-sm font-bold tracking-wider text-white uppercase">
                  Trinity Dwarka
                </p>
                <p className="mt-1 text-xs text-gray-300">
                  Trinity Dwarka, Sector-9, New Delhi, India
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Column 4 - Contact Info */}
        <motion.div variants={itemVariants}>
          <h4 className="mb-6 bg-linear-to-r from-amber-400 to-amber-500 bg-clip-text text-lg font-bold text-transparent">
            Contact Us
          </h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <motion.li
              whileHover={{ x: 5 }}
              className="group flex items-center gap-3 transition-colors duration-300"
            >
              <Mail className="h-5 w-5 text-amber-400 transition-colors group-hover:text-amber-500" />
              <a
                href="mailto:trinity.fiesta@tips.edu.in"
                className="hover:text-amber-400"
              >
                trinity.fiesta@tips.edu.in
              </a>
            </motion.li>
            <motion.li
              whileHover={{ x: 5 }}
              className="group flex items-center gap-3 transition-colors duration-300"
            >
              <Phone className="h-5 w-5 text-amber-400 transition-colors group-hover:text-amber-500" />
              <a href="tel:+918006004620" className="hover:text-amber-400">
                +91 8006004620
              </a>
            </motion.li>
            <motion.li
              whileHover={{ x: 5 }}
              className="group flex items-start gap-3 text-left transition-colors duration-300"
            >
              <Navigation className="h-5 w-5 text-amber-400 transition-colors group-hover:text-amber-500" />
              <a
                href="https://maps.app.goo.gl/RLuSEznDjYhasRhS6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400"
              >
                Trinity Dwarka, Sector-9, New Delhi, India
              </a>
            </motion.li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Credits Section with alfa */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row"
      >
        <p className="text-[12px] tracking-widest text-gray-400 uppercase md:text-[14px]">
          © {new Date().getFullYear()} TRINITY FIESTA. All Rights Reserved.
        </p>

        <motion.a
          href="https://alfacodingclub.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex cursor-pointer items-center gap-4"
        >
          <div className="text-right">
            <p className="text-[12px] tracking-tighter text-gray-400 uppercase">
              Developed by
            </p>
            <p className="bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-sm font-black text-transparent transition-all">
              ALFA CODING CLUB
            </p>
          </div>
          <motion.div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 transition-all duration-500 group-hover:border-amber-400/50 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            <Image
              src="/assets/logoAlfa.webp"
              fill
              alt="ALFA Coding Club Logo"
              className="rounded-full object-cover"
            />
          </motion.div>
        </motion.a>
      </motion.div>

      {/* Credits Section with alfa & apex */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row"
      >
        <motion.a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="group flex cursor-pointer items-center gap-4"
        >
          <motion.div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 transition-all duration-500 group-hover:border-blue-400/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            <Image
              src="/assets/logoApex.webp"
              fill
              alt="Apex Society"
              className="rounded-full object-cover"
            />
          </motion.div>

          <div>
            <p className="text-[12px] tracking-tighter text-gray-400 uppercase">
              Designed by
            </p>
            <p className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-sm font-black text-transparent transition-all">
              APEX Designing Society
            </p>
          </div>
        </motion.a>

        <p className="text-center text-[12px] tracking-widest text-gray-400 uppercase md:text-[14px]">
          © 2026 TRINITY FIESTA. All Rights Reserved.
        </p>

        <motion.a
          href="https://share.google/1BjhhYbBWPe1q0PSr"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex cursor-pointer items-center gap-4"
        >
          <div className="text-right">
            <p className="text-[12px] tracking-tighter text-gray-400 uppercase">
              Developed by
            </p>
            <p className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-sm font-black text-transparent transition-all">
              ALFA CODING CLUB
            </p>
          </div>

          <motion.div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 transition-all duration-500 group-hover:border-amber-400/50 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            <Image
              src="/assets/logoAlfa.webp"
              fill
              alt="ALFA Coding Club Logo"
              className="rounded-full object-cover"
            />
          </motion.div>
        </motion.a>
      </motion.div> */}
    </footer>
  );
};

export default Footer;
