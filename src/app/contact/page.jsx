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
} from "lucide-react";
import { FaWhatsapp, FaGlobe } from "react-icons/fa";

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
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
              Contact Us
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto mb-6 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {`Have questions about Trinity Fiesta? Want to participate or
              sponsor? We'd love to hear from you!`}
            </motion.p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section
          className="px-4 py-10"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
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
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-amber-400/30 bg-black/60 p-8 text-center backdrop-blur-md transition-all duration-300 hover:border-amber-400/60 hover:bg-black/80 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                >
                  <motion.div
                    transition={{ duration: 0.5 }}
                    className="mx-auto mb-4 inline-flex items-center justify-center rounded-full bg-linear-to-br from-amber-400 to-amber-600 p-4 shadow-[0_0_20px_rgba(245,158,11,0.4)]"
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
        <section
          className="px-4 py-20"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Left Column - Social Media (1 column width) */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-1"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="h-full rounded-2xl border border-amber-400/30 bg-black/60 p-8 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.2)] flex flex-col justify-center"
                >
                  <h3 className="mb-6 text-2xl font-black uppercase">
                    Follow{" "}
                    <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                      Us
                    </span>
                  </h3>

                  {/* Social Media Links */}
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center gap-3 rounded-lg border border-white/10 bg-black/40 p-6 transition-all duration-300 hover:border-amber-400/50 overflow-hidden"
                      >
                        {/* Gradient Background on Hover */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        />

                        {/* Content */}
                        <div className="relative z-10 flex items-center gap-3">
                          <social.icon className="h-7 w-7 text-amber-400 group-hover:text-white transition-colors duration-300" />
                          <span className="text-lg font-bold text-white">
                            {social.name}
                          </span>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Google Maps (2 columns width) */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 min-h-100"
              >
                <div className="h-full overflow-hidden rounded-2xl border-2 border-amber-400/30 bg-gradient-to-br from-amber-500/20 to-amber-600/20 shadow-[0_0_40px_rgba(245,158,11,0.3)] backdrop-blur-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112120.34385188621!2d77.00525743057301!3d28.576946353983306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b1c70e5995f%3A0x9e5d5784767e9da!2sTrinity%20Institute%20of%20Professional%20Studies!5e0!3m2!1sen!2sin!4v1770912068537!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
