"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  User,
  Phone,
  Mail,
  Briefcase,
  MessageSquare,
  Send,
  Sparkles,
} from "lucide-react";

export default function SponsorEnquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    designation: "",
    interestedIn: "",
    budget: "",
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

    alert("Thank you for your interest! We'll contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      companyName: "",
      designation: "",
      interestedIn: "",
      budget: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const sponsorshipOptions = [
    "Title Sponsor",
    "Co-Sponsor",
    "Event Sponsor",
    "Category Sponsor",
    "Gift Sponsor",
    "Media Partner",
    "Other",
  ];

  const budgetRanges = [
    "Under ₹50,000",
    "₹50,000 - ₹1,00,000",
    "₹1,00,000 - ₹2,50,000",
    "₹2,50,000 - ₹5,00,000",
    "Above ₹5,00,000",
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 bg-[url('/assets/bookeh5.png')] bg-center bg-cover overflow-hidden mt-8">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-6xl font-black tracking-wide uppercase mb-4"
            style={{ fontFamily: "var(--font-ethno)" }}
          >
            <span className="bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Sponsor
            </span>{" "}
            <span className="text-white">Enquiry</span>
          </h2>

          <p
            className="text-gray-300 text-lg max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Join us in making Trinity Fiesta 2026 a grand success! Partner with
            us to reach thousands of students and showcase your brand.
          </p>
        </motion.div>

        {/* Form Container */}
        <div
          className="grid lg:grid-cols-2 gap-8 items-stretch"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          {/* Left - Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-amber-400/30 bg-black/60 p-8 backdrop-blur-md shadow-[0_0_30px_rgba(245,158,11,0.2)] flex flex-col"
          >
            <h3 className="text-2xl font-black text-white uppercase mb-6">
              Get in Touch
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 flex-1 flex flex-col"
            >
              <div className="flex-1 space-y-5">
                {/* Name and Company Name */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 text-sm font-semibold text-gray-300 uppercase flex items-center gap-2"
                    >
                      <User className="w-4 h-4 text-amber-400" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-amber-400/30 bg-black/40 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-amber-400 focus:ring-2 focus:ring-amber-400/50 focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="companyName"
                      className="mb-2 text-sm font-semibold text-gray-300 uppercase flex items-center gap-2"
                    >
                      <Building2 className="w-4 h-4 text-amber-400" />
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-amber-400/30 bg-black/40 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-amber-400 focus:ring-2 focus:ring-amber-400/50 focus:outline-none"
                      placeholder="ABC Corporation"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb- text-sm font-semibold text-gray-300 uppercase flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4 text-amber-400" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-amber-400/30 bg-black/40 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-amber-400 focus:ring-2 focus:ring-amber-400/50 focus:outline-none"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 text-sm font-semibold text-gray-300 uppercase flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4 text-amber-400" />
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-amber-400/30 bg-black/40 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-amber-400 focus:ring-2 focus:ring-amber-400/50 focus:outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                {/* Designation */}
                <div>
                  <label
                    htmlFor="designation"
                    className="mb-2 text-sm font-semibold text-gray-300 uppercase flex items-center gap-2"
                  >
                    <Briefcase className="w-4 h-4 text-amber-400" />
                    Designation
                  </label>
                  <input
                    type="text"
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-amber-400/30 bg-black/40 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-amber-400 focus:ring-2 focus:ring-amber-400/50 focus:outline-none"
                    placeholder="Marketing Manager"
                  />
                </div>

                {/* Interested In and Budget */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="interestedIn"
                      className="mb-2 block text-sm font-semibold text-gray-300 uppercase"
                    >
                      Interested In
                    </label>
                    <select
                      id="interestedIn"
                      name="interestedIn"
                      value={formData.interestedIn}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-amber-400/30 bg-black/40 px-4 py-3 text-white transition-all focus:border-amber-400 focus:ring-2 focus:ring-amber-400/50 focus:outline-none"
                    >
                      <option value="" className="bg-black">
                        Select Option
                      </option>
                      {sponsorshipOptions.map((option) => (
                        <option
                          key={option}
                          value={option}
                          className="bg-black"
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="mb-2 block text-sm font-semibold text-gray-300 uppercase"
                    >
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-amber-400/30 bg-black/40 px-4 py-3 text-white transition-all focus:border-amber-400 focus:ring-2 focus:ring-amber-400/50 focus:outline-none"
                    >
                      <option value="" className="bg-black">
                        Select Range
                      </option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range} className="bg-black">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 text-sm font-semibold text-gray-300 uppercase flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-amber-400" />
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full resize-none rounded-lg border border-amber-400/30 bg-black/40 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-amber-400 focus:ring-2 focus:ring-amber-400/50 focus:outline-none"
                    placeholder="Tell us about your sponsorship goals..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-3 rounded-full bg-linear-to-r from-amber-400 to-amber-600 px-8 py-4 font-bold tracking-wider text-black uppercase shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(245,158,11,0.7)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Enquiry
                    <Send className="h-5 w-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Right - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="rounded-2xl border border-amber-400/30 bg-black/60 p-8 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.2)] h-full flex flex-col">
              <h3 className="text-2xl font-black text-white uppercase mb-6">
                Why <span className="text-amber-400">Sponsor Us?</span>
              </h3>

              <div className="space-y-4 flex-1">
                {[
                  {
                    title: "Massive Reach",
                    desc: "Connect with students and visitors",
                  },
                  {
                    title: "Brand Visibility",
                    desc: "Prominent branding across all event platforms",
                  },
                  {
                    title: "Youth Engagement",
                    desc: "Direct interaction with target audience",
                  },
                  {
                    title: "Media Coverage",
                    desc: "Extensive social media and press coverage",
                  },
                  {
                    title: "Customized Packages",
                    desc: "Flexible sponsorship options to suit your needs",
                  },
                  {
                    title: "CSR Opportunity",
                    desc: "Support education and cultural development",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-black/40 border border-white/10 hover:border-amber-400/30 transition-all"
                  >
                    <div className="w-2 h-2 mt-2 rounded-full bg-amber-400 shrink-0" />
                    <div>
                      <h4 className="text-white font-bold mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
