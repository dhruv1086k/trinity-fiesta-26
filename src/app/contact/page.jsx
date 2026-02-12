"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert("Message sent successfully! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@trinityfiesta.com",
      link: "mailto:info@trinityfiesta.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Trinity College, Delhi, India",
      link: "https://maps.google.com",
    },
  ];

  const socialLinks = [{ icon: Instagram, link: "#", name: "Instagram" }];

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
        <section className="px-4 pt-32">
          <div className="mx-auto max-w-6xl text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center justify-center gap-2"
            >
              <Sparkles className="h-6 w-6 text-cyan-400" />
              <span className="text-sm font-bold tracking-widest text-cyan-400 uppercase">
                Get In Touch
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
              Contact Us
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto mb-6 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl"
            >
              {`Have questions about Trinity Fiesta? Want to participate or
              sponsor? We'd love to hear from you!`}
            </motion.p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="px-4 py-10">
          <div className="mx-auto max-w-6xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-6 md:grid-cols-3"
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-cyan-400/30 bg-black/60 p-8 text-center backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:bg-black/80"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto mb-4 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 p-4"
                  >
                    <info.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {info.title}
                  </h3>
                  <p className="text-gray-300">{info.details}</p>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border border-cyan-400/30 bg-black/60 p-8 backdrop-blur-md md:p-10"
              >
                <h2 className="mb-6 text-3xl font-black tracking-wide uppercase">
                  Send Us a{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Message
                  </span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name and Email in Row */}
                  <div className="grid gap-5 md:grid-cols-2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold tracking-wide text-gray-300 uppercase"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-cyan-400/30 bg-black/40 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 focus:outline-none"
                        placeholder="John Doe"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold tracking-wide text-gray-300 uppercase"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-cyan-400/30 bg-black/40 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 focus:outline-none"
                        placeholder="john@example.com"
                      />
                    </motion.div>
                  </div>

                  {/* Phone and Subject in Row */}
                  <div className="grid gap-5 md:grid-cols-2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-semibold tracking-wide text-gray-300 uppercase"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-cyan-400/30 bg-black/40 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 focus:outline-none"
                        placeholder="+91 98765 43210"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-semibold tracking-wide text-gray-300 uppercase"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-cyan-400/30 bg-black/40 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 focus:outline-none"
                        placeholder="Event Inquiry"
                      />
                    </motion.div>
                  </div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold tracking-wide text-gray-300 uppercase"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full resize-none rounded-lg border border-cyan-400/30 bg-black/40 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 focus:outline-none"
                      placeholder="Tell us what you're thinking..."
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-8 py-4 font-bold tracking-wider text-white uppercase shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(168,85,247,0.7)] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>

              {/* Right Column - Info & Social */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Social Media */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="rounded-2xl border border-cyan-400/30 bg-black/60 p-8 backdrop-blur-md"
                >
                  <h3 className="mb-6 text-2xl font-black uppercase">
                    Follow{" "}
                    <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      Us
                    </span>
                  </h3>

                  {/* Instagram - Full Width */}
                  <motion.a
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 rounded-lg border border-white/10 bg-black/40 p-6 transition-all duration-300 hover:border-cyan-400/50"
                  >
                    <Instagram className="h-7 w-7 text-cyan-400" />
                    <span className="text-lg font-bold text-white">
                      Instagram
                    </span>
                  </motion.a>
                </motion.div>

                {/* Map */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-2xl border-2 border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 shadow-[0_0_40px_rgba(34,211,238,0.3)] backdrop-blur-md"
                >
                  <div className="flex aspect-video w-full items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        animate={{
                          y: [-5, 5, -5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <MapPin className="mx-auto mb-4 h-12 w-12 text-cyan-400" />
                      </motion.div>
                      <p className="text-lg font-bold text-white">
                        Trinity College
                      </p>
                      <p className="text-sm text-gray-400">Delhi, India</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-4xl font-black tracking-wide uppercase md:text-5xl">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-4"
            >
              {[
                {
                  q: "How do I register for events?",
                  a: "Visit our Events page and click on the event you're interested in. Follow the registration process to secure your spot.",
                },
                {
                  q: "Is there an entry fee?",
                  a: "Entry to Trinity Fiesta is free! However, specific events may have participation fees.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="rounded-xl border border-white/10 bg-black/60 p-6 backdrop-blur-md transition-colors hover:border-cyan-400/30"
                >
                  <h4 className="mb-2 text-lg font-bold text-white">{faq.q}</h4>
                  <p className="text-gray-300">{faq.a}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
