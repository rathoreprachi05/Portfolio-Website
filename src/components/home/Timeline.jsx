"use client";

import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    id: 1,
    role: "Website Data Management & SEO Intern",
    company: "SearchAshiyana",
    date: "2024 - Present",
    description: "Streamlining data processes, enhancing search configurations, and driving localized SEO strategies to scale platform visibility.",
    color: "#E86565", // Coral pink
  },
  {
    id: 2,
    role: "Creative Head",
    company: "Lepses LPU & Drive Dev",
    date: "2024 - Present",
    description: "Leading creative direction, designing modern user interfaces, and ensuring cohesive brand experiences across digital projects.",
    color: "#a855f7", // Purple transition
  },
  {
    id: 3,
    role: "Core Member",
    company: "Student Career Committee & Vrikshit Foundation",
    date: "2023 - Present",
    description: "Orchestrating career development initiatives and actively participating in environmental conservation maps and plans.",
    color: "#1e3a8a", // Soft midnight blue
  },
];

export function Timeline() {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#0C111A] text-slate-200 overflow-hidden">
      {/* Background elements to make glassmorphism pop */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[15%] w-[35rem] h-[35rem] bg-[#E86565]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[15%] w-[30rem] h-[30rem] bg-[#1e3a8a]/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="text-center mb-24"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-sm font-medium text-slate-300 tracking-wide"
          >
            Experience
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            The Journey
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
            A timeline of professional growth, creative leadership, and community impact.
          </p>
        </motion.div>

        <div className="relative w-full flex flex-col items-center">
          {/* Main Central Line - Gradient from coral to midnight blue */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2 rounded-full overflow-hidden">
             {/* Base line */}
             <div className="absolute inset-0 bg-slate-800/50" />
             {/* Gradient glow line */}
             <motion.div 
                className="absolute inset-x-0 top-0 hidden md:block" 
                style={{ 
                  height: "100%",
                  background: "linear-gradient(to bottom, #E86565 0%, #a855f7 50%, #1e3a8a 100%)",
                  filter: "blur(2px)",
                  opacity: 0.8
                }} 
             />
             {/* Actual colored line */}
             <div 
                className="absolute inset-0" 
                style={{ background: "linear-gradient(to bottom, #E86565 0%, #a855f7 50%, #1e3a8a 100%)" }} 
             />
          </div>

          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={item.id} 
                className={`relative w-full flex flex-col md:flex-row justify-between items-start md:items-center mb-20 md:mb-32 last:mb-0 ${isEven ? "md:flex-row-reverse" : ""}`}
              >
                {/* Node */}
                <div className="absolute left-[39px] md:left-1/2 -translate-x-1/2 mt-10 md:mt-0 z-20 flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, margin: "-20%" }}
                    transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 150 }}
                    className="w-5 h-5 rounded-full relative bg-[#0C111A] border-[3px]"
                    style={{ 
                      borderColor: item.color,
                      boxShadow: `0 0 25px 2px ${item.color}66`
                    }}
                  >
                    <div 
                      className="absolute inset-[2px] rounded-full animate-pulse"
                      style={{ backgroundColor: item.color }}
                    />
                  </motion.div>
                </div>

                {/* Desktop Empty Space for alternating layout */}
                <div className="hidden md:block w-5/12" />

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: false, margin: "-10%" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full md:w-5/12 pl-24 md:pl-0"
                >
                  <div className="relative p-8 rounded-3xl bg-slate-900/40 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] group hover:bg-slate-800/40 hover:border-white/20 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    {/* Glassmorphism subtle glow */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none group-hover:bg-white/10 transition-colors duration-500" />
                    
                    {/* Left color bar accent */}
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-1.5 opacity-80"
                      style={{ backgroundColor: item.color }} 
                    />
                    
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-slate-100 transition-colors">
                      {item.role}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-3 mb-5 text-sm font-medium">
                      <span className="px-3.5 py-1.5 rounded-full bg-slate-950/50 border border-slate-700/50 text-slate-300 shadow-inner break-words">
                        {item.company}
                      </span>
                    </div>
                    
                    <p className="text-slate-400 font-light leading-relaxed text-base md:text-lg">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
