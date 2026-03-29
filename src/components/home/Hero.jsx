"use client";

import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  // Stagger variants for the text elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Staggered fade-in
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden selection:bg-[#E86565]/30 selection:text-slate-900">

      {/* 🧭 THE NAVIGATION BAR (Mirror-Grid Overlay) */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-0 left-0 w-full grid grid-cols-1 md:grid-cols-2 z-50 pointer-events-none"
      >
        {/* Left Side Nav: Dark Text over Cream */}
        <div className="flex items-center justify-center md:justify-start gap-6 md:gap-8 px-8 md:px-16 pt-10 pointer-events-auto">
          {["About", "Projects", "CV", "Experience", "Contact"].map((item) => (
            <a
              key={item}
              // Dynamically assign the href: direct to PDF for CV, otherwise use a section hash
              href={item === "CV" ? "Prachi Rathore 12318960 CV.pdf" : `#${item.toLowerCase()}`}
              // Only apply the download attribute if the item is "CV"
              download={item === "CV" ? "Prachi_Rathore_CV.pdf" : undefined}
              className="text-[#0F172A] font-bold font-sans text-sm md:text-base tracking-wide hover:text-[#E86565] transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right Side Nav: Light Icons over Dark Image (Hidden on mobile to match image logic) */}
        <div className="hidden md:flex items-center justify-end gap-6 px-16 pt-10 pointer-events-auto">
          {/* GitHub Icon */}
          <a href="https://github.com/rathoreprachi05" target="_blank" rel="noreferrer" className="text-white hover:text-[#E86565] transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
          </a>
          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/in/prachirathore/" target="_blank" rel="noreferrer" className="text-white hover:text-[#E86565] transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          </a>
          {/* Substack / Bookmark Icon */}
          <a href="https://substack.com/@elaraaa05" target="_blank" rel="noreferrer" className="text-white hover:text-[#E86565] transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
          </a>
          {/* Instagram Icon */}
          <a href="https://www.instagram.com/chamomile_sigh/" target="_blank" rel="noreferrer" className="text-white hover:text-[#E86565] transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
        </div>
      </motion.header>

      {/* Left Side: The Creative (Warm Cream) */}
      <div className="bg-[#FAF8F5] relative flex items-center justify-center p-8 md:p-16 lg:p-20 z-10 w-full h-full">

        {/* Ambient lighting for the cream side */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-orange-100/50 rounded-full blur-[100px]" />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-3xl gap-8 lg:gap-14 xl:gap-16 z-20">

          {/* Avatar Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 shrink-0 drop-shadow-2xl flex items-center justify-center"
          >
            <img
              src="/assets/Animated Me Hero Section.png"
              alt="Prachi's Avatar"
              className="w-[120%] h-[120%] object-contain scale-110 -ml-4"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </motion.div>

          {/* Typography Area */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            // OPTIMIZATION: Added max-w-xl and right padding (pr-8) to act as a structural boundary.
            className="flex flex-col items-center lg:items-start text-center lg:text-left z-20 mt-4 lg:mt-0 max-w-xl px-4 lg:px-0 lg:pr-12"
          >
            {/* Elegant Bold Serif for Main Heading */}
            <motion.h1
              variants={itemVariants}
              // OPTIMIZATION: Scaled down from 7xl to 6xl, added leading-tight for better vertical spacing.
              className="text-5xl md:text-5xl lg:text-6xl leading-tight font-extrabold font-serif text-[#0F172A] tracking-tight mb-4"
            >
              Hi, I'm <br className="hidden lg:block" />Prachi Rathore.
            </motion.h1>

            {/* Clean Sans-Serif for Subheading */}
            <motion.h2
              variants={itemVariants}
              className="text-lg md:text-xl lg:text-2xl font-sans font-medium text-slate-600 mb-10"
            >
              Software Developer | Midnight Writer
            </motion.h2>

            <motion.div variants={itemVariants}>
              <a href="#projects">
                <button className="bg-[#E86565] text-white px-8 md:px-10 py-4 rounded-full font-bold text-lg tracking-wide hover:bg-[#d65555] focus:outline-none focus:ring-4 focus:ring-[#E86565]/30 transition-all shadow-xl hover:shadow-[0_10px_30px_-5px_rgba(232,101,101,0.6)] hover:-translate-y-1">
                  Explore My Work
                </button>
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Right Side: The Vibe (Immersive Visual Asset) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="hidden md:flex bg-[#0F172A] relative overflow-hidden items-center justify-center shadow-[-20px_0_50px_rgba(0,0,0,0.1)] z-20"
      >
        <img
          src="/assets/Substack_Banner.jpg"
          alt="Cozy Lofi Environment"
          className="w-full h-full object-cover object-center scale-105"
          onError={(e) => {
            /* Fallback to Substack Banner if specifically the hero image isn't found */
            if (e.target.src.includes('Animated Me Hero Section.png')) {
              e.target.src = "/assets/Substack_Banner.jpg";
            }
          }}
        />
        {/* Subtle overlay to enhance mood/warmth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/30 to-amber-900/10 mix-blend-overlay pointer-events-none" />
      </motion.div>

    </section>
  );
};