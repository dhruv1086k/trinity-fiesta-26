"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// A larger set of images for a denser spiral, using the ones provided
const images = [
  "https://i.pinimg.com/1200x/6d/c1/51/6dc151fccad84848851615bf7fd5273e.jpg",
  "https://i.pinimg.com/736x/86/5b/37/865b37c273ce08ccba905cfd5c43f7fd.jpg",
  "https://i.pinimg.com/1200x/8d/ff/a1/8dffa167d7c06c98303cf74e1e684c0c.jpg",
  "https://i.pinimg.com/1200x/7a/9d/b3/7a9db3f4a8c14244c9799897c5b27e15.jpg",
  "https://i.pinimg.com/1200x/6d/c1/51/6dc151fccad84848851615bf7fd5273e.jpg",
  "https://i.pinimg.com/736x/86/5b/37/865b37c273ce08ccba905cfd5c43f7fd.jpg",
  "https://i.pinimg.com/1200x/8d/ff/a1/8dffa167d7c06c98303cf74e1e684c0c.jpg",
  "https://i.pinimg.com/1200x/7a/9d/b3/7a9db3f4a8c14244c9799897c5b27e15.jpg",
  "https://i.pinimg.com/1200x/6d/c1/51/6dc151fccad84848851615bf7fd5273e.jpg",
  "https://i.pinimg.com/736x/86/5b/37/865b37c273ce08ccba905cfd5c43f7fd.jpg",
  "https://i.pinimg.com/1200x/8d/ff/a1/8dffa167d7c06c98303cf74e1e684c0c.jpg",
  "https://i.pinimg.com/1200x/7a/9d/b3/7a9db3f4a8c14244c9799897c5b27e15.jpg",
  "https://i.pinimg.com/1200x/6d/c1/51/6dc151fccad84848851615bf7fd5273e.jpg",
  "https://i.pinimg.com/736x/86/5b/37/865b37c273ce08ccba905cfd5c43f7fd.jpg",
  "https://i.pinimg.com/1200x/8d/ff/a1/8dffa167d7c06c98303cf74e1e684c0c.jpg",
  "https://i.pinimg.com/1200x/7a/9d/b3/7a9db3f4a8c14244c9799897c5b27e15.jpg",
  "https://i.pinimg.com/1200x/6d/c1/51/6dc151fccad84848851615bf7fd5273e.jpg",
  "https://i.pinimg.com/736x/86/5b/37/865b37c273ce08ccba905cfd5c43f7fd.jpg",
  "https://i.pinimg.com/1200x/8d/ff/a1/8dffa167d7c06c98303cf74e1e684c0c.jpg",
  "https://i.pinimg.com/1200x/7a/9d/b3/7a9db3f4a8c14244c9799897c5b27e15.jpg",
  "https://i.pinimg.com/1200x/6d/c1/51/6dc151fccad84848851615bf7fd5273e.jpg",
  "https://i.pinimg.com/736x/86/5b/37/865b37c273ce08ccba905cfd5c43f7fd.jpg",
  "https://i.pinimg.com/1200x/8d/ff/a1/8dffa167d7c06c98303cf74e1e684c0c.jpg",
  "https://i.pinimg.com/1200x/7a/9d/b3/7a9db3f4a8c14244c9799897c5b27e15.jpg",
  "https://i.pinimg.com/1200x/6d/c1/51/6dc151fccad84848851615bf7fd5273e.jpg",
  "https://i.pinimg.com/736x/86/5b/37/865b37c273ce08ccba905cfd5c43f7fd.jpg",
  "https://i.pinimg.com/1200x/8d/ff/a1/8dffa167d7c06c98303cf74e1e684c0c.jpg",
  "https://i.pinimg.com/1200x/7a/9d/b3/7a9db3f4a8c14244c9799897c5b27e15.jpg",
];

export default function GlimpsesSpiral() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const imgs = gsap.utils.toArray(".spiral-img");
      const totalImgs = imgs.length;

      // Initial setup for all images
      imgs.forEach((img, i) => {
        // Calculate initial position in the spiral
        const angle = (i / totalImgs) * Math.PI * 8; // 4 full rotations
        const radius = 50 + i * 15; // Spiral outwards
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = -i * 100; // Stack them in depth

        gsap.set(img, {
          x,
          y,
          z,
          rotationZ: angle * (180 / Math.PI) + 90, // Orient towards the path
          scale: 0.5 + i / totalImgs, // Images get larger as they spiral out
        });
      });

      // Create the ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=300%", // Controls the length of the scroll
          scrub: 1, // Smooth scrubbing
          pin: true,
        },
      });

      // Animate the entire container to create the "moving forward" effect
      tl.to(imgs, {
        z: (i) => i * 50 + 1500, // Move images forward
        scale: (i) => 1 + (i / totalImgs) * 2, // Increase scale as they approach
        rotationZ: "+=90", // Add rotation for dynamic feel
        ease: "power1.inOut",
        stagger: {
          amount: 2,
          from: "end",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef}>
      <section
        ref={sectionRef}
        className="relative h-screen w-full overflow-hidden  perspective-[1000px]"
      >
        {/* Cosmic Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1536321115970-583000358027?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />
        {/* Overlay for Vignette and Color tint */}
        <div className="absolute inset-0 bg-radial-gradient(circle, transparent 0%, #000 80%) mix-blend-multiply" />
        <div className="absolute inset-0 bg-indigo-900/30 mix-blend-overlay" />

        {/* Central Text */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h1
            className="font-bold text-white mix-blend-overlay"
            style={{
              fontSize: "clamp(3rem, 13vw, 13rem)",
              fontFamily: "var(--font-cracked)",
              letterSpacing: "0.05em",
            }}
          >
            GLIMPSES
          </h1>
        </div>

        {/* Image Spiral Container */}
        <div
          className="absolute top-1/2 left-1/2 w-0 h-0 z-10"
          style={{ transformStyle: "preserve-3d" }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="spiral-img absolute top-1/2 left-1/2 w-50 h-65 -ml-25 -mt-32.5 bg-white p-2 shadow-xl"
              style={{ willChange: "transform" }}
            >
              {/* Rainbow Light Leak Effect */}
              <div className="absolute inset-0 z-10 mix-blend-overlay opacity-60 bg-linear-to-tr from-purple-500 via-pink-500 to-yellow-500 pointer-events-none" />
              <div className="w-full h-full overflow-hidden relative">
                <Image
                  src={src}
                  alt={`glimpse-${i}`}
                  fill
                  className="object-cover"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}