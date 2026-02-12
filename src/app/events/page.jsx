"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";

// Sample event data - 12 events per day minimum
const eventsData = {
  1: [
    {
      id: 1,
      name: "Debate (Hindi)",
      venue: "D-Block Seminar Hall",
      time: "9:30 AM",
      description:
        "Showcase your argumentative skills in this engaging Hindi language debate competition",
      image: "/events/debate.jpg",
      side: "left",
    },
    {
      id: 2,
      name: "Folk Dance",
      venue: "Amphitheatre",
      time: "9:30 AM",
      description:
        "Experience the vibrant cultural heritage through traditional folk dance performances",
      image: "/events/folkdance.jpg",
      side: "right",
    },
    {
      id: 3,
      name: "Tech Quiz",
      venue: "Auditorium",
      time: "10:00 AM",
      description:
        "Test your technical knowledge in this exciting quiz competition",
      image: "/events/techquiz.jpg",
      side: "left",
    },
    {
      id: 4,
      name: "Coding Marathon",
      venue: "Computer Lab",
      time: "10:30 AM",
      description:
        "Push your coding skills to the limit in this intensive programming challenge",
      image: "/events/coding.jpg",
      side: "right",
    },
    {
      id: 5,
      name: "Photography Contest",
      venue: "Main Campus",
      time: "11:00 AM",
      description: "Capture the essence of innovation through your lens",
      image: "/events/photo.jpg",
      side: "left",
    },
    {
      id: 6,
      name: "Web Design Challenge",
      venue: "IT Lab",
      time: "11:30 AM",
      description: "Create stunning web designs in this creative competition",
      image: "/events/webdesign.jpg",
      side: "right",
    },
    {
      id: 7,
      name: "Robotics Workshop",
      venue: "Robotics Lab",
      time: "12:00 PM",
      description: "Learn and build amazing robots with expert guidance",
      image: "/events/robotics.jpg",
      side: "left",
    },
    {
      id: 8,
      name: "Stand-up Comedy",
      venue: "Amphitheatre",
      time: "1:00 PM",
      description: "Laugh out loud with amazing stand-up performances",
      image: "/events/comedy.jpg",
      side: "right",
    },
    {
      id: 9,
      name: "AI/ML Workshop",
      venue: "Conference Hall",
      time: "2:00 PM",
      description:
        "Dive deep into artificial intelligence and machine learning",
      image: "/events/aiml.jpg",
      side: "left",
    },
    {
      id: 10,
      name: "Music Band Performance",
      venue: "Main Stage",
      time: "3:00 PM",
      description: "Enjoy electrifying music performances from talented bands",
      image: "/events/music.jpg",
      side: "right",
    },
    {
      id: 11,
      name: "Treasure Hunt",
      venue: "Entire Campus",
      time: "4:00 PM",
      description: "Solve clues and find hidden treasures across campus",
      image: "/events/treasure.jpg",
      side: "left",
    },
    {
      id: 12,
      name: "Gaming Tournament",
      venue: "Gaming Arena",
      time: "5:00 PM",
      description: "Compete in intense gaming battles and win prizes",
      image: "/events/gaming.jpg",
      side: "right",
    },
  ],
  2: [
    ...Array(12)
      .fill(null)
      .map((_, i) => ({
        id: 13 + i,
        name: `Day 2 Event ${i + 1}`,
        venue: "Venue TBA",
        time: `${9 + Math.floor(i / 2)}:${i % 2 === 0 ? "00" : "30"} ${9 + Math.floor(i / 2) >= 12 ? "PM" : "AM"}`,
        description: "Event description goes here",
        image: "/events/event.jpg",
        side: i % 2 === 0 ? "left" : "right",
      })),
  ],
  3: [
    ...Array(12)
      .fill(null)
      .map((_, i) => ({
        id: 25 + i,
        name: `Day 3 Event ${i + 1}`,
        venue: "Venue TBA",
        time: `${9 + Math.floor(i / 2)}:${i % 2 === 0 ? "00" : "30"} ${9 + Math.floor(i / 2) >= 12 ? "PM" : "AM"}`,
        description: "Event description goes here",
        image: "/events/event.jpg",
        side: i % 2 === 0 ? "left" : "right",
      })),
  ],
};

const EventsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get day from URL or default to 1
  const dayFromUrl = parseInt(searchParams.get("day") || "1", 10);
  const [activeDay, setActiveDay] = useState(dayFromUrl);

  const days = [
    { id: 1, label: "DAY 1" },
    { id: 2, label: "DAY 2" },
  ];

  const events = eventsData[activeDay] || [];

  // Scroll to top when activeDay changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeDay]);

  // Update URL when day changes
  const handleDayChange = (dayId) => {
    setActiveDay(dayId);
    router.push(`?day=${dayId}`, { scroll: false });
  };

  return (
    <div
      className="min-h-screen bg-[url('/assets/bookeh5.png')] bg-no-repeat bg-cover bg-center text-white relative"
      style={{
        backgroundBlendMode: "darken",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
    >
      {/* Content */}
      <div className="relative z-10">
        {/* Header with "Events" */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-32 pb-16 text-center"
        >
          <motion.h1
            className="text-5xl font-black tracking-[0.2em]  uppercase md:text-8xl pr-2 pl-7 "
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              backgroundImage:
                "linear-gradient(90deg, #F59E0B, #FBBF24, #D97706, #F59E0B)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              fontFamily: "var(--font-ethno)",
            }}
          >
            EVENTS
          </motion.h1>
        </motion.div>

        {/* Day Selector */}
        <div className="sticky top-20 z-20 mb-8 bg-linear-to-r from-purple-950/80 via-purple-900/80 to-purple-950/80 py-8 backdrop-blur-xl border-y border-amber-500/20">
          <div className="mx-auto flex max-w-4xl items-center justify-center gap-8 lg:gap-16">
            {days.map((day) => (
              <motion.button
                key={day.id}
                onClick={() => handleDayChange(day.id)}
                className="relative flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ fontFamily: "var(--font-josefin)" }}
              >
                <motion.span
                  className={`text-base font-bold tracking-widest uppercase transition-all duration-300 lg:text-xl ${
                    activeDay === day.id
                      ? "scale-125 text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]"
                      : "text-gray-500"
                  }`}
                  animate={{
                    scale: activeDay === day.id ? 1.25 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {day.label}
                </motion.span>

                {/* Active indicator line */}
                {activeDay === day.id && (
                  <motion.div
                    layoutId="activeDay"
                    className="absolute -bottom-3 h-1 w-16 rounded-full bg-linear-to-r from-amber-400 via-amber-500 to-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.6)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Timeline Section - Remounts on day change */}
        <TimelineSection key={activeDay} events={events} />
      </div>
    </div>
  );
};

// Separate Timeline Component
const TimelineSection = ({ events }) => {
  const containerRef = useRef(null);
  const [items, setItems] = useState([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Track which items are in view
  useEffect(() => {
    const handleScroll = () => {
      const timelineElement = containerRef.current;
      if (!timelineElement) return;

      const timelineTop = timelineElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight / 2;
      const scrollProgress = windowHeight - timelineTop;

      const itemElements = timelineElement.querySelectorAll(".timeline-item");
      const updatedItems = Array.from(itemElements).map((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        return {
          id: events[index]?.id || index + 1,
          inView: scrollProgress > windowHeight - itemTop,
        };
      });

      setItems((prevItems) => {
        const hasChanged = updatedItems.some((item, index) => {
          return prevItems[index]?.inView !== item.inView;
        });
        return hasChanged ? updatedItems : prevItems;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [events]);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto max-w-7xl px-4 py-20 lg:px-6"
    >
      {/* Mobile Timeline Line - Left side */}
      <span className="absolute top-0 left-8 h-full w-0.75 bg-gray-600/30 lg:hidden"></span>

      {/* Mobile Animated Line */}
      <motion.span
        className="absolute top-0 left-8 w-0.75 origin-top bg-linear-to-b from-amber-400 via-amber-500 to-amber-600 lg:hidden"
        style={{ height: lineHeight }}
      ></motion.span>

      {/* Desktop Timeline Line */}
      <span className="absolute top-0 left-1/2 hidden h-full w-1 -translate-x-1/2 bg-gray-600/30 lg:block"></span>

      {/* Desktop Animated Line */}
      <motion.span
        className="absolute top-0 left-1/2 hidden w-1 origin-top -translate-x-1/2 bg-linear-to-b from-amber-400 via-amber-500 to-amber-600 lg:block"
        style={{ height: lineHeight }}
      ></motion.span>

      {/* Events */}
      <div className="space-y-12 lg:space-y-32">
        {events.map((event, index) => {
          const itemInView =
            items.find((item) => item.id === event.id)?.inView || false;
          return (
            <EventCard
              key={event.id}
              event={event}
              index={index}
              side={event.side}
              inView={itemInView}
            />
          );
        })}
      </div>
    </div>
  );
};

// Event Card Component
const EventCard = ({ event, index, side, inView }) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      className="timeline-item relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      style={{ fontFamily: "var(--font-josefin)" }}
    >
      {/* MOBILE LAYOUT (< 1024px) */}
      <div className="flex items-start gap-4 pl-16 lg:hidden">
        {/* Left Timeline Dot */}
        <div className="absolute top-40 left-4 z-10 flex -translate-x-1/2 items-center justify-center">
          <motion.div
            className={`relative flex items-center justify-center rounded-full transition-all duration-400 ease-in-out ${
              inView
                ? "h-8 w-8 bg-linear-to-r from-amber-400 to-amber-600 shadow-[0_0_20px_rgba(245,158,11,0.9)]"
                : "h-8 w-8 bg-linear-to-r from-amber-400 to-amber-600 opacity-40"
            }`}
            animate={{
              scale: inView ? [1, 1.1, 1] : 1,
              boxShadow: inView
                ? [
                    "0 0 20px rgba(245,158,11,0.9)",
                    "0 0 35px rgba(251,191,36,0.9)",
                    "0 0 20px rgba(245,158,11,0.9)",
                  ]
                : "0 0 0px rgba(245,158,11,0)",
            }}
            transition={{
              duration: inView ? 2 : 0.3,
              repeat: inView ? Infinity : 0,
              ease: "easeInOut",
            }}
          >
            <div className="h-4 w-4 rounded-full bg-white" />
          </motion.div>
        </div>

        {/* Right Side - Image and Details */}
        <div className="flex flex-1 flex-col gap-4">
          {/* Image - TALLER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ delay: 0.2, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            className="group relative w-full"
          >
            <div className="relative h-88 w-full overflow-hidden rounded-2xl border-2 border-amber-400/30 bg-linear-to-br from-amber-500/20 to-amber-600/20 p-2 shadow-[0_0_25px_rgba(245,158,11,0.3)]">
              <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-xl bg-linear-to-br from-amber-500/30 to-amber-600/30">
                <span className="text-5xl font-black text-white/40">
                  {event.name.charAt(0)}
                </span>
              </div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center rounded-2xl bg-linear-to-br from-amber-500/90 to-amber-600/90 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
                whileHover={{ scale: 1 }}
              >
                <span className="text-xs font-bold text-white">
                  View Details
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Details - SHORTER */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.3 }}
            className="w-full"
          >
            <div className="rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm">
              <h3 className="mb-2 text-lg font-bold text-white">
                Name: {event.name}
              </h3>

              <div className="mb-2 flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4 text-amber-400" />
                <span className="font-semibold">Venue:</span>
                <span>{event.venue}</span>
              </div>

              <div className="mb-2 flex items-center gap-2 text-sm text-amber-400">
                <span className="font-semibold">Time:</span>
                <span>{event.time}</span>
              </div>

              <p className="text-sm leading-relaxed text-gray-500">
                {event.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* DESKTOP LAYOUT (>= 1024px) */}
      <div className="hidden items-center lg:flex">
        {side === "left" ? (
          <>
            {/* Left Side: Image FIRST, then Details */}
            <div className="flex w-5/12 items-center justify-end gap-6 pr-8">
              {/* Image - LARGER SIZE */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: 0.3, type: "spring" }}
                whileHover={{ scale: 1.08, rotate: -2 }}
                className="group relative shrink-0"
              >
                <div className="relative h-64 w-52 overflow-hidden rounded-2xl border-2 border-amber-400/30 bg-linear-to-br from-amber-500/20 to-amber-600/20 p-2 shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                  <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-xl bg-linear-to-br from-amber-500/30 to-amber-600/30">
                    <span className="text-6xl font-black text-white/40">
                      {event.name.charAt(0)}
                    </span>
                  </div>
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center rounded-2xl bg-linear-to-br from-amber-500/90 to-amber-600/90 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
                    whileHover={{ scale: 1 }}
                  >
                    <span className="text-sm font-bold text-white">
                      View Details
                    </span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Details - SMALLER */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: 0.2 }}
                whileHover={{ x: -5 }}
                className="flex-1"
              >
                <div className="rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/40 hover:bg-black/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                  <h3 className="mb-2 text-lg font-bold text-white">
                    Name: {event.name}
                  </h3>

                  <div className="mb-2 flex items-center gap-2 text-sm text-gray-400">
                    <MapPin className="h-4 w-4 text-amber-400" />
                    <span className="font-semibold">Venue:</span>
                    <span>{event.venue}</span>
                  </div>

                  <p className="text-sm leading-relaxed text-gray-500">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Center: Timeline Dot */}
            <div className="relative z-10 flex w-2/12 flex-col items-center">
              <motion.div
                className={`relative flex items-center justify-center rounded-full transition-all duration-400 ease-in-out ${
                  inView
                    ? "h-10 w-10 bg-linear-to-r from-amber-400 to-amber-600 shadow-[0_0_25px_rgba(245,158,11,0.9)]"
                    : "h-10 w-10 bg-linear-to-r from-amber-400 to-amber-600 opacity-40"
                }`}
                animate={{
                  scale: inView ? [1, 1.1, 1] : 1,
                  boxShadow: inView
                    ? [
                        "0 0 25px rgba(245,158,11,0.9)",
                        "0 0 45px rgba(251,191,36,0.9)",
                        "0 0 25px rgba(245,158,11,0.9)",
                      ]
                    : "0 0 0px rgba(245,158,11,0)",
                }}
                transition={{
                  duration: inView ? 2 : 0.3,
                  repeat: inView ? Infinity : 0,
                  ease: "easeInOut",
                }}
              >
                <div className="h-5 w-5 rounded-full bg-white" />
              </motion.div>
            </div>

            {/* Right Side: Time Badge */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.2 }}
              className="flex w-5/12 justify-start pl-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-full border border-amber-400/30 bg-black/90 px-6 py-2.5 text-lg font-bold text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)] backdrop-blur-sm"
              >
                {event.time}
              </motion.div>
            </motion.div>
          </>
        ) : (
          <>
            {/* Left Side: Time Badge */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2 }}
              className="flex w-5/12 justify-end pr-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-full border border-amber-400/30 bg-black/90 px-6 py-2.5 text-lg font-bold text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)] backdrop-blur-sm"
              >
                {event.time}
              </motion.div>
            </motion.div>

            {/* Center: Timeline Dot */}
            <div className="relative z-10 flex w-2/12 flex-col items-center">
              <motion.div
                className={`relative flex items-center justify-center rounded-full transition-all duration-400 ease-in-out ${
                  inView
                    ? "h-10 w-10 bg-linear-to-r from-amber-400 to-amber-600 shadow-[0_0_25px_rgba(245,158,11,0.9)]"
                    : "h-10 w-10 bg-linear-to-r from-amber-400 to-amber-600 opacity-40"
                }`}
                animate={{
                  scale: inView ? [1, 1.1, 1] : 1,
                  boxShadow: inView
                    ? [
                        "0 0 25px rgba(245,158,11,0.9)",
                        "0 0 45px rgba(251,191,36,0.9)",
                        "0 0 25px rgba(245,158,11,0.9)",
                      ]
                    : "0 0 0px rgba(245,158,11,0)",
                }}
                transition={{
                  duration: inView ? 2 : 0.3,
                  repeat: inView ? Infinity : 0,
                  ease: "easeInOut",
                }}
              >
                <div className="h-5 w-5 rounded-full bg-white" />
              </motion.div>
            </div>

            {/* Right Side: Details FIRST, then Image */}
            <div className="flex w-5/12 items-center justify-start gap-6 pl-8">
              {/* Details - SMALLER */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ delay: 0.2 }}
                whileHover={{ x: 5 }}
                className="flex-1"
              >
                <div className="rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/40 hover:bg-black/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                  <h3 className="mb-2 text-lg font-bold text-white">
                    Name: {event.name}
                  </h3>

                  <div className="mb-2 flex items-center gap-2 text-sm text-gray-400">
                    <MapPin className="h-4 w-4 text-amber-400" />
                    <span className="font-semibold">Venue:</span>
                    <span>{event.venue}</span>
                  </div>

                  <p className="text-sm leading-relaxed text-gray-500">
                    {event.description}
                  </p>
                </div>
              </motion.div>

              {/* Image - LARGER SIZE */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ delay: 0.3, type: "spring" }}
                whileHover={{ scale: 1.08, rotate: 2 }}
                className="group relative shrink-0"
              >
                <div className="relative h-64 w-52 overflow-hidden rounded-2xl border-2 border-amber-400/30 bg-linear-to-br from-amber-500/20 to-amber-600/20 p-2 shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                  <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-xl bg-linear-to-br from-amber-500/30 to-amber-600/30">
                    <span className="text-6xl font-black text-white/40">
                      {event.name.charAt(0)}
                    </span>
                  </div>
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center rounded-2xl bg-linear-to-br from-amber-500/90 to-amber-600/90 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
                    whileHover={{ scale: 1 }}
                  >
                    <span className="text-sm font-bold text-white">
                      View Details
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default EventsPage;
