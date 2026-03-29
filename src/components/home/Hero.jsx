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
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section className="relative w-full h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden selection:bg-[#E86565]/30 selection:text-slate-900">
      
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
              src="/assets/Animated Me sans backgrund.png" 
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
            className="flex flex-col items-center lg:items-start text-center lg:text-left z-20 mt-4 lg:mt-0"
          >
            {/* Elegant Bold Serif for Main Heading */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-serif text-[#0F172A] tracking-tight mb-4"
            >
              Hi, I'm <br className="hidden lg:block"/>Prachi.
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
          src="/assets/Animated Me Hero Section.png" 
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
