"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: "khel-connect",
    title: "Khel-Connect",
    image: "/assets/khel_connect.png",
    subtitle: "Smart India Hackathon (SIH) 2025 Grand Finalist",
    description:
      "A fast, responsive, and seamless cross-platform frontend built with React Native and Supabase. Designed to deliver high performance and real-time data synchronization.",
    tags: ["React Native", "Supabase", "Cross-Platform", "Real-time"],
  },
  {
    id: "project-citadel",
    title: "Project Citadel",
    image: "/assets/Citadel.png",
    subtitle: "Zero-Knowledge Password Manager",
    description:
      "A highly secure, local-first password manager. Features an uncompromising security architecture combining Argon2id hashing for robust key derivation and XChaCha20-Poly1305 for authenticated encryption.",
    tags: ["Argon2id", "XChaCha20-Poly1305", "Zero-Knowledge", "Local-First"],
  },
];

export function Showcase() {
  return (
    <section className="relative w-full bg-[#020617] text-slate-200 border-t border-slate-900/50 overflow-hidden">
      {/* Header */}
      <div className="w-full flex justify-center py-24 lg:py-32 relative z-20 bg-[#020617]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center px-6"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex mb-6 px-4 py-1.5 rounded-full bg-slate-900/50 border border-slate-800 text-sm font-medium text-slate-300 tracking-wide shadow-inner"
          >
            Engineering Showcase
          </motion.div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-500">
            Selected Works
          </h2>
          <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            An intersection of pristine architecture and beautiful interfaces, 
            driven by midnight blues and dark charcoals.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col w-full relative">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row w-full relative z-10 group"
          >
            {/* Left: Sticky Image Container (Apple-Style Pinned) */}
            <div className="md:w-1/2 md:h-screen md:sticky md:top-0 flex items-center justify-center p-6 md:p-12 lg:p-24 overflow-hidden border-r border-[#0f172a]/50 bg-[#020617]/95 backdrop-blur-sm z-20">
              <motion.div
                className="relative w-full aspect-[4/3] md:aspect-auto md:h-[70vh] rounded-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(59,130,246,0.15)] bg-[#0B0F19] border border-slate-800/80 ring-1 ring-white/5"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, margin: "-10%" }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-[2s] ease-out group-hover:scale-105"
                />
                {/* Midnight dark gradient overlay to blend perfectly into dark sleek background */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/10 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-slate-950/20 pointer-events-none mix-blend-multiply opacity-50 transition-opacity duration-700 group-hover:opacity-0" />
              </motion.div>
            </div>

            {/* Right: Scrolling Content revealing text slowly */}
            <div className="md:w-1/2 flex items-center min-h-[60vh] md:min-h-[150vh] p-8 md:p-16 lg:p-32 xl:p-40 relative bg-[#030712] z-10">
              <motion.div
                className="max-w-2xl flex flex-col justify-center"
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                >
                  <h4 className="text-blue-500/90 font-semibold tracking-widest uppercase text-xs md:text-sm mb-6 flex items-center gap-3">
                    <span className="w-10 h-[2px] bg-gradient-to-r from-blue-500/80 to-transparent inline-block rounded-full"></span>
                    {project.subtitle}
                  </h4>
                </motion.div>

                <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-100 mb-8 tracking-tight leading-[1.1]">
                  {project.title}
                </h3>

                <p className="text-lg md:text-xl lg:text-2xl text-slate-400 leading-relaxed mb-12 font-light selection:bg-blue-900/30">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-4">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      viewport={{ once: false, margin: "-20%" }}
                      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + (i * 0.1) }}
                      className="px-5 py-2.5 rounded-full text-sm font-medium tracking-wide bg-[#0B1121]/80 backdrop-blur-sm border border-slate-800 text-blue-200/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-slate-600 hover:text-blue-100 hover:bg-[#0f172a] transition-all duration-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
