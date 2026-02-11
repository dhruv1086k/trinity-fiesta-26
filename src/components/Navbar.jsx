"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = {
    left: [
      { id: "home", label: "HOME", href: "/" },
      { id: "about", label: "ABOUT", href: "/about" },
    ],
    right: [
      { id: "events", label: "EVENTS", href: "/events" },
      { id: "contact", label: "CONTACT", href: "/contact" },
    ],
  };

  const allNavItems = [...navItems.left, ...navItems.right];

  const matchingItem = allNavItems.find((item) => item.href === pathname);
  const activeTab = matchingItem
    ? matchingItem.id
    : pathname === "/"
      ? "home"
      : "";

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 right-0 left-0 z-50"
      >
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-purple-950/40 backdrop-blur-md border-b border-amber-700/20 shadow-[0_6px_20px_rgba(0,0,0,0.6)]"
          ></motion.div>

          <div className="relative mx-auto max-w-7xl px-4 py-7 sm:px-6">
            {/* Mobile Layout */}
            <div className="flex items-center justify-between lg:hidden">
              <Link href="/">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group cursor-pointer text-center"
                >
                  <motion.h1
                    className="text-lg font-bold tracking-wider text-amber-500 sm:text-xl"
                    whileHover={{ color: "#F59E0B" }}
                    transition={{ duration: 0.3 }}
                    style={{ fontFamily: "var(--font-ethno)" }}
                  >
                    TRINITY FIESTA
                  </motion.h1>
                </motion.div>
              </Link>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative z-70 rounded-lg p-2 text-amber-500 transition-colors hover:bg-amber-500/10"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Desktop Layout */}
            <div
              className="hidden items-center justify-center lg:flex"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center gap-10"
                >
                  {navItems.left.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    >
                      <NavLink item={item} isActive={activeTab === item.id} />
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mx-24"
                >
                  <Link href="/">
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      className="group cursor-pointer text-center"
                    >
                      <motion.h1
                        className="text-3xl font-bold tracking-wider text-amber-500 mt-2"
                        transition={{ duration: 0.3 }}
                        style={{ fontFamily: "var(--font-ethno)" }}
                      >
                        TRINITY FIESTA
                      </motion.h1>
                    </motion.div>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center gap-10"
                >
                  {navItems.right.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 + index * 0.1 }}
                    >
                      <NavLink item={item} isActive={activeTab === item.id} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <motion.div
              initial={{ backdropFilter: "blur(0px)" }}
              animate={{ backdropFilter: "blur(20px)" }}
              exit={{ backdropFilter: "blur(0px)" }}
              className="absolute inset-0 bg-purple-950/90"
            />

            {/* Close Button - Top Right */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
              transition={{ duration: 0.3 }}
              whileHover={{
                scale: 1.1,
                rotate: 90,
                boxShadow: "0 0 20px rgba(245, 158, 11, 0.5)",
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 z-60 rounded-full bg-amber-500/20 p-3 text-amber-500 backdrop-blur-sm border border-amber-500/30 hover:bg-amber-500/30 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-7 w-7" />
            </motion.button>

            <div className="relative flex h-full items-center justify-center pt-20">
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 },
                  },
                }}
                className="flex flex-col items-center justify-center gap-8"
              >
                {allNavItems.map((item) => (
                  <MobileNavLink
                    key={item.id}
                    item={item}
                    isActive={activeTab === item.id}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                  />
                ))}

               
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ item, isActive }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href={item.href} className="relative block">
      <motion.span
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{
          color: isActive ? "#F59E0B" : isHovered ? "#F59E0B" : "#D4AF37",
        }}
        transition={{ duration: 0.3 }}
        className="inline-block text-sm font-medium tracking-wider"
      >
        {item.label}
      </motion.span>

      <motion.span
        initial={{ width: 0 }}
        animate={{
          width: isActive || isHovered ? "100%" : "0%",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"
      />
    </a>
  );
}

function MobileNavLink({ item, isActive, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <motion.div variants={variants} className="text-center">
      <a href={item.href} onClick={onClick} className="relative inline-block">
        <motion.div
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="px-8 py-4"
        >
          <motion.span
            animate={{
              color: isActive ? "#F59E0B" : isHovered ? "#F59E0B" : "#D4AF37",
            }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-bold tracking-widest sm:text-4xl"
          >
            {item.label}
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: isActive || isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="mx-auto h-0.75 w-3/4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"
        />
      </a>
    </motion.div>
  );
}
