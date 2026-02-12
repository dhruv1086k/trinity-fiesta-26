"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";

export default function GlimpsesSpiral() {
  const images = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1974&auto=format&fit=crop",
  ];

  // Background color
  const bgColor = "bg-gradient-to-br from-purple-950 via-purple-900 to-black";

  return (
    <div
      className={`relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center ${bgColor}`}
    >
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-35 z-20"
      >
        <h2
          className="text-5xl md:text-8xl font-black text-amber-500 tracking-wider uppercase"
          style={{
            textShadow: "0 0 30px rgba(245, 158, 11, 0.5)",
            fontFamily: "var(--font-ethno)",
          }}
        >
          GLIMPSES
        </h2>
        <p className="text-amber-200 text-base md:text-xl mt-2" style={{ fontFamily: "var(--font-poppins)" }}>
          Relive the moments from Trinity Fiesta
        </p>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative w-full h-[55vh] md:h-[70vh] flex items-center justify-center">
        {/* Top Curve Overlay */}
        <div
          className={`absolute top-[-480%] left-1/2 -translate-x-1/2 w-[500%] h-[500%] rounded-[50%] z-10 ${bgColor}`}
        />

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={30}
          speed={800}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="w-full h-full max-w-7xl"
          style={{ perspective: "1000px" }}
        >
          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <div
                className={`w-full h-full relative overflow-hidden rounded-3xl transition-all duration-500 `}
              >
                <img
                  src={img}
                  alt={`Glimpse ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Curve Overlay */}
        <div
          className={`absolute bottom-[-480%] left-1/2 -translate-x-1/2 w-[500%] h-[500%] rounded-[50%] z-10 ${bgColor}`}
        />
      </div>

      
    </div>
  );
}
