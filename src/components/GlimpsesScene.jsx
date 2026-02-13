"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";

export default function GlimpsesSpiral() {
  const images = [
    "https://res.cloudinary.com/deuzzyw0k/image/upload/v1770912024/484334074_17962590008884978_7307808913900075864_n.jpg_stp_dst-jpg_e35_tt6__nc_cat_105_ig_cache_key_MzU4NzM2NTE4NTIyMjM1NTA1MA.3-ccb7-5_ccb_7-5__nc_sid_58cdad_efg_eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4OTYwLnNkci5DMy_gzjdk2.jpg",
    "https://res.cloudinary.com/deuzzyw0k/image/upload/v1770912025/485266106_17963070599884978_2344543302413975678_n.jpg_stp_dst-jpg_e35_tt6__nc_cat_109_ig_cache_key_MzU5MDMwMTA0NjczMzk1NDExNQ.3-ccb7-5_ccb_7-5__nc_sid_58cdad_efg_eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4OTYwLnNkci5DMy_tijcnz.jpg",
    "https://res.cloudinary.com/deuzzyw0k/image/upload/v1770912024/481037849_18447462175076169_6204287915062577621_n.jpg_stp_dst-jpg_e35_tt6__nc_cat_110_ig_cache_key_MzU3NDg0ODg3Mzg2MTg5NjgwMA.3-ccb7-5_ccb_7-5__nc_sid_58cdad_efg_eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4OTU5LnNkci5DMy_xo6yx0.jpg",
    "https://res.cloudinary.com/deuzzyw0k/image/upload/v1770912024/503835617_691338780171552_5866054379798995305_n.jpg_stp_dst-jpg_e15_tt6__nc_cat_109_ig_cache_key_MzU4NTgzOTMyMzgzMzA2NzE5Nw.3-ccb7-5_ccb_7-5__nc_sid_58cdad_efg_eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4NjA3LnNkci5DMyJ9_kf4bhn.jpg",
    "https://res.cloudinary.com/deuzzyw0k/image/upload/v1770912024/481763354_18447632092076169_1894754001892604569_n.jpg_stp_dst-jpg_e35_tt6__nc_cat_109_ig_cache_key_MzU3NTYzNDk4MDgxMTczMDAwMg.3-ccb7-5_ccb_7-5__nc_sid_58cdad_efg_eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4ODk0LnNkci_1_ezbv7l.jpg",
    "https://res.cloudinary.com/deuzzyw0k/image/upload/v1770912022/482991832_17961751136884978_72446284074576214_n.jpg_stp_dst-jpg_e35_tt6__nc_cat_110_ig_cache_key_MzU4MjMzMTM0MDcwMTg2MTY1MQ.3-ccb7-5_ccb_7-5__nc_sid_58cdad_efg_eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEyODB4MTI4MC5zZHIu_1_yxtzph.jpg",
    "https://res.cloudinary.com/deuzzyw0k/image/upload/v1770912023/481374946_18354975835177027_2535649949340016025_n.jpg_stp_dst-jpg_e15_tt6__nc_cat_101_ig_cache_key_MzU3NTE2NDE5OTMzMDU4MzA2Ng.3-ccb7-5_ccb_7-5__nc_sid_58cdad_efg_eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjU0MHg5NjAuc2RyLkMzIn_w7hwa3.jpg",
    "https://res.cloudinary.com/deuzzyw0k/image/upload/v1770912022/481754612_18050762732332829_6839191128153065189_n.jpg_stp_dst-jpg_e15_tt6__nc_cat_108_ig_cache_key_MzU3NTE1MTYyNjA2NTU5ODEzNjE4MDUwNzYyNzI2MzMyODI5.3-ccb7-5_ccb_7-5__nc_sid_58cdad_efg_eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLj_qgxjii.jpg",
    "https://res.cloudinary.com/deuzzyw0k/image/upload/v1770912021/482422648_1298080774787144_2187220211087111415_n.jpg_stp_dst-jpg_e15_tt6__nc_cat_109_ig_cache_key_MzU4MDgyNTM1MjAzNDY4MjcyMg.3-ccb7-5_ccb_7-5__nc_sid_58cdad_efg_eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ_fhn3xh.jpg",
  ];

  // Background color
  const bgColor = "bg-gradient-to-br from-purple-950 via-purple-900 to-black";

  return (
    <div
      className={`relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center ${bgColor}`}
    >
      {/* Strong Top Black Shadow */}
      <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-black via-black/10 to-transparent pointer-events-none z-20" />

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
        <p
          className="text-amber-200 text-base md:text-xl mt-2"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Relive the moments from Trinity Fiesta
        </p>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative w-full h-[55vh] md:h-[70vh] flex items-center justify-center">
        {/* Top Curve Overlay */}
        <div
          className={`absolute top-[-480%] left-1/2 -translate-x-1/2 w-[500%] h-[500%] rounded-[50%] z-10 bg-[url('/assets/bookeh5.png')]`}
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
          className="w-full h-full"
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
          className={`absolute bottom-[-480%] left-1/2 -translate-x-1/2 w-[500%] h-[500%] rounded-[50%] z-10 bg-[url('/assets/bookeh5.png')]`}
        />
        {/* Strong Bottom Black Shadow */}
        <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
}
