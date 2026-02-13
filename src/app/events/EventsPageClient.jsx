"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";

const eventsData = {
  1: [
    // =========================
    // 26 FEB 2026 – Trinity Dwarka
    // =========================

    {
      id: 1,
      name: "Inaugural Session",
      venue: "Stage",
      time: "10:00 AM – 11:00 AM",
      description:
        "Opening ceremony marking the official beginning of Trinity Fiesta 2026.",
      image: "/events/inaugral.jpg",
      side: "left",
    },
    {
      id: 2,
      name: "Pixclusive",
      venue: "Tips Wall",
      time: "11:00 AM – 4:00 PM",
      description:
        "Creative photography competition showcasing powerful visual storytelling.",
      image: "/events/pixclusive.jpg",
      side: "right",
    },

    {
      id: 3,
      name: "Nritya Nivedan",
      venue: "Stage",
      time: "11:00 AM – 12:30 PM",
      description:
        "Solo dance competition celebrating expression, rhythm and technique.",
      image: "/events/nritya.jpg",
      side: "left",
    },

    {
      id: 4,
      name: "60 Sec Saga",
      venue: "Trinity Dwarka",
      time: "11:00 AM",
      description:
        "60-second reel making competition capturing moments creatively.",
      image: "/events/60sec.jpg",
      side: "right",
    },

    {
      id: 5,
      name: "Rangmanch",
      venue: "Under Metro Line",
      time: "11:00 AM – 3:00 PM",
      description: "Street theatre performances highlighting social themes.",
      image: "/events/rangmanch.jpg",
      side: "left",
    },

    {
      id: 6,
      name: "Uncut Stories",
      venue: "Conference Room",
      time: "11:00 AM – 12:30 PM",
      description:
        "Short film competition focused on storytelling and cinematic execution.",
      image: "/events/uncut.jpg",
      side: "right",
    },

    {
      id: 7,
      name: "The 404 Makeover",
      venue: "Lab-605",
      time: "11:00 AM – 12:30 PM",
      description: "UI/UX design challenge to creatively redesign a 404 page.",
      image: "/events/404.jpg",
      side: "left",
    },

    {
      id: 8,
      name: "Legal Startup and Business Plan",
      venue: "Room 802",
      time: "11:00 AM – 2:00 PM",
      description:
        "Business plan competition promoting innovative legal startup ideas.",
      image: "/events/legal.jpg",
      side: "right",
    },

    {
      id: 9,
      name: "Shadow Trace",
      venue: "Lab-305",
      time: "11:00 AM – 1:00 PM",
      description:
        "Cyber investigation challenge solving simulated digital crime cases.",
      image: "/events/shadow.jpg",
      side: "left",
    },

    {
      id: 10,
      name: "BGMI",
      venue: "Room 406",
      time: "11:00 AM",
      description:
        "Competitive mobile esports battle testing strategy and survival skills.",
      image: "/events/bgmi.jpg",
      side: "right",
    },

    {
      id: 11,
      name: "Sing Star Arena",
      venue: "MPH",
      time: "11:00 AM – 1:00 PM",
      description:
        "Solo singing competition showcasing vocal talent and stage presence.",
      image: "/events/singstar.jpg",
      side: "left",
    },

    {
      id: 12,
      name: "Valorant",
      venue: "Lab-304",
      time: "11:00 AM",
      description:
        "Team-based esports tournament focused on precision and coordination.",
      image: "/events/valorant.jpg",
      side: "right",
    },

    {
      id: 13,
      name: "Innovator’s Print",
      venue: "Postproduction Lab",
      time: "11:00 AM – 1:00 PM",
      description:
        "Innovation challenge to design, prototype and present creative solutions.",
      image: "/events/innovator.jpg",
      side: "left",
    },

    {
      id: 14,
      name: "Genre Jeopardy",
      venue: "Room 402",
      time: "11:00 AM – 1:00 PM",
      description:
        "Quiz competition testing knowledge across entertainment genres.",
      image: "/events/jeopardy.jpg",
      side: "right",
    },

    {
      id: 15,
      name: "Future Frames",
      venue: "Room 102",
      time: "11:00 AM – 1:00 PM",
      description:
        "Case mapping competition solving real-world business challenges.",
      image: "/events/futureframes.jpg",
      side: "left",
    },

    {
      id: 16,
      name: "Sahitya Sangam",
      venue: "Room 104",
      time: "11:00 AM – 1:00 PM",
      description:
        "Literary performance blending poetry, expression and voice.",
      image: "/events/sahitya.jpg",
      side: "right",
    },

    {
      id: 17,
      name: "Fireless Fusion",
      venue: "Room 201",
      time: "11:00 AM – 1:00 PM",
      description:
        "Creative culinary challenge preparing innovative dishes without fire.",
      image: "/events/fireless.jpg",
      side: "left",
    },

    {
      id: 18,
      name: "Mix-N-Match Art",
      venue: "MPH (Near Canteen)",
      time: "11:00 AM – 1:00 PM",
      description:
        "Collage art competition expressing themes through mixed materials.",
      image: "/events/mixmatch.jpg",
      side: "right",
    },

    {
      id: 19,
      name: "On-Air Challenge",
      venue: "Stage",
      time: "12:30 PM – 1:30 PM",
      description:
        "Radio jockey style competition testing spontaneity and communication.",
      image: "/events/onair.jpg",
      side: "left",
    },

    {
      id: 20,
      name: "Genre Glitch",
      venue: "Lab-605",
      time: "12:30 PM – 2:00 PM",
      description:
        "Creative technical competition blending genres and digital skills.",
      image: "/events/genreglitch.jpg",
      side: "right",
    },

    {
      id: 21,
      name: "Scholar Stage",
      venue: "Room 404",
      time: "12:30 PM – 2:30 PM",
      description:
        "Academic presentation competition showcasing research and ideas.",
      image: "/events/scholar.jpg",
      side: "left",
    },

    {
      id: 22,
      name: "Brainwave Pitch",
      venue: "Room 407",
      time: "1:00 PM – 3:00 PM",
      description:
        "Entrepreneurial pitch competition presenting innovative ideas.",
      image: "/events/brainwave.jpg",
      side: "right",
    },

    {
      id: 23,
      name: "Codex Build",
      venue: "Lab-305",
      time: "1:00 PM – 3:00 PM",
      description:
        "Coding competition testing logic, speed and technical skills.",
      image: "/events/codex.jpg",
      side: "left",
    },

    {
      id: 24,
      name: "Brand Bot",
      venue: "MPH",
      time: "1:00 PM – 3:30 PM",
      description:
        "Marketing strategy competition focused on branding innovation.",
      image: "/events/brandbot.jpg",
      side: "right",
    },

    {
      id: 25,
      name: "Mime Magic",
      venue: "Room 204",
      time: "1:00 PM – 3:00 PM",
      description:
        "Mime performance competition expressing stories without words.",
      image: "/events/mime.jpg",
      side: "left",
    },

    {
      id: 26,
      name: "Profit Play Auction",
      venue: "Room 102",
      time: "1:00 PM – 3:00 PM",
      description:
        "Strategic auction-based competition testing financial decision making.",
      image: "/events/profitplay.jpg",
      side: "right",
    },

    {
      id: 27,
      name: "Battle of Brains",
      venue: "Room 502",
      time: "1:00 PM – 3:00 PM",
      description:
        "Intellectual competition challenging analytical and logical skills.",
      image: "/events/battlebrains.jpg",
      side: "left",
    },

    {
      id: 28,
      name: "Talk Knockout",
      venue: "Room 104",
      time: "1:00 PM – 3:00 PM",
      description: "Public speaking contest testing persuasion and confidence.",
      image: "/events/talk.jpg",
      side: "right",
    },

    {
      id: 29,
      name: "Cyber Tok",
      venue: "Room 402",
      time: "1:00 PM – 3:00 PM",
      description:
        "Digital creativity competition focused on short-form content.",
      image: "/events/cybertok.jpg",
      side: "left",
    },

    {
      id: 30,
      name: "Scene Stealers",
      venue: "Stage",
      time: "1:30 PM – 2:30 PM",
      description: "Dramatic performance competition showcasing acting talent.",
      image: "/events/scene.jpg",
      side: "right",
    },

    {
      id: 31,
      name: "Agreement Drafting and Presentation Competition",
      venue: "Room 707",
      time: "2:00 PM – 4:00 PM",
      description:
        "Legal drafting competition focusing on practical documentation skills.",
      image: "/events/agreement.jpg",
      side: "left",
    },

    {
      id: 32,
      name: "Fire Bound",
      venue: "Room 501",
      time: "2:00 PM – 4:00 PM",
      description:
        "High-energy competitive challenge testing resilience and teamwork.",
      image: "/events/firebound.jpg",
      side: "right",
    },

    {
      id: 33,
      name: "Voice Unplugged",
      venue: "Stage",
      time: "2:30 PM – 4:00 PM",
      description: "Musical performance event celebrating raw vocal talent.",
      image: "/events/voice.jpg",
      side: "left",
    },

    {
      id: 34,
      name: "Prize Distribution",
      venue: "Stage",
      time: "4:00 PM – 5:00 PM",
      description: "Award ceremony honoring winners and participants.",
      image: "/events/prize.jpg",
      side: "right",
    },
  ],

  2: [
    // =========================
    // 27 FEB 2026 – Dilli Haat Janakpuri
    // =========================

    {
      id: 35,
      name: "Rang Nritya",
      venue: "Stage",
      time: "10:00 AM",
      description:
        "Dance performances showcasing vibrant cultural expressions.",
      image: "/events/rangnritya.jpg",
      side: "left",
    },

    {
      id: 36,
      name: "60 Sec Saga",
      venue: "Dilli Haat",
      time: "11:00 AM",
      description: "60-second reel competition capturing festival highlights.",
      image: "/events/60sec.jpg",
      side: "right",
    },

    {
      id: 37,
      name: "Rangmanch",
      venue: "Near Tree",
      time: "11:00 AM",
      description:
        "Live street theatre performances with impactful storytelling.",
      image: "/events/rangmanch.jpg",
      side: "left",
    },

    {
      id: 38,
      name: "Floor Art Fiesta",
      venue: "Near Stalls",
      time: "11:00 AM",
      description:
        "Creative floor art competition celebrating artistic imagination.",
      image: "/events/floorart.jpg",
      side: "right",
    },

    {
      id: 39,
      name: "Miti Kala Kriti",
      venue: "Dilli Haat",
      time: "11:00 AM",
      description:
        "Clay art competition highlighting traditional craftsmanship.",
      image: "/events/miti.jpg",
      side: "left",
    },

    {
      id: 40,
      name: "Style Parade",
      venue: "Stage",
      time: "1:00 PM",
      description: "Fashion showcase celebrating creativity and confidence.",
      image: "/events/style.jpg",
      side: "right",
    },

    {
      id: 41,
      name: "Color Me Up",
      venue: "Dilli Haat",
      time: "3:00 PM",
      description:
        "Interactive art-based activity spreading colors and creativity.",
      image: "/events/color.jpg",
      side: "left",
    },

    {
      id: 42,
      name: "Band Dominion",
      venue: "Stage",
      time: "3:00 PM",
      description: "Live band performances delivering electrifying music.",
      image: "/events/band.jpg",
      side: "right",
    },

    {
      id: 43,
      name: "Prize Distribution",
      venue: "Dilli Haat",
      time: "5:00 PM",
      description: "Closing ceremony celebrating winners and participants.",
      image: "/events/prize.jpg",
      side: "left",
    },
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
        <div className="sticky top-18 z-20 mb-8 bg-linear-to-r from-purple-950/80 via-purple-900/80 to-purple-950/80 py-8 backdrop-blur-xl border-y border-amber-500/20">
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

        {/* Right Side - Clickable Card */}
        <motion.div
          onClick={() => router.push("/register")}
          className="flex flex-1 flex-col gap-4 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Image */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="group relative w-full"
          >
            <div className="relative h-88 w-full overflow-hidden rounded-2xl border-2 border-amber-400/30 bg-linear-to-br from-amber-500/20 to-amber-600/20 p-2 shadow-[0_0_25px_rgba(245,158,11,0.3)]">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src={event.image}
                  alt={event.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                  priority={index < 2}
                />
              </div>

              <motion.div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-linear-to-br from-amber-500/90 to-amber-600/90 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-xs font-bold text-white">
                  Register Now
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Details */}
          <div className="rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm hover:border-amber-400/40 hover:bg-black/60 transition-all duration-300">
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

            <p className="text-sm leading-relaxed text-gray-500 mb-4">
              {event.description}
            </p>

            {/* Rulebook Download Button */}
            <motion.a
              href="/assets/rulebook/rulebook.pdf"
              download="Trinity-Fiesta-Rulebook.pdf"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-linear-to-r from-amber-400 to-amber-500 text-black font-bold px-4 py-2 rounded-lg shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all w-full"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download
            </motion.a>
          </div>
        </motion.div>
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
                className="group relative shrink-0"
              >
                <div className="relative h-64 w-52 overflow-hidden rounded-2xl border-2 border-amber-400/30 bg-linear-to-br from-amber-500/20 to-amber-600/20 p-2 shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                  <div className="relative h-full w-full overflow-hidden rounded-xl">
                    <Image
                      src={event.image}
                      alt={event.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 300px"
                      priority={index < 2}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Details - SMALLER */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: 0.2 }}
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

                  <p className="text-sm leading-relaxed text-gray-500 mb-4">
                    {event.description}
                  </p>

                  {/* Rulebook Download Button */}
                  <motion.a
                    href="/assets/rulebook/rulebook.pdf"
                    download="Trinity-Fiesta-Rulebook.pdf"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 bg-linear-to-r from-amber-400 to-amber-500 text-black font-bold px-4 py-2.5 rounded-lg shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all w-full text-sm"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download Rulebook
                  </motion.a>
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

                  <p className="text-sm leading-relaxed text-gray-500 mb-4">
                    {event.description}
                  </p>

                  {/* Rulebook Download Button */}
                  <motion.a
                    href="/rulebooks/trinity-fiesta-rulebook.pdf"
                    download="Trinity-Fiesta-Rulebook.pdf"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 bg-linear-to-r from-amber-400 to-amber-500 text-black font-bold px-4 py-2.5 rounded-lg shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all w-full text-sm"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download Rulebook
                  </motion.a>
                </div>
              </motion.div>

              {/* Image - LARGER SIZE */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="group relative shrink-0"
              >
                <div className="relative h-64 w-52 overflow-hidden rounded-2xl border-2 border-amber-400/30 bg-linear-to-br from-amber-500/20 to-amber-600/20 p-2 shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                  <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-xl bg-linear-to-br from-amber-500/30 to-amber-600/30">
                    <span className="text-6xl font-black text-white/40">
                      {event.name.charAt(0)}
                    </span>
                  </div>
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
