"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    id: "medibot",
    label: "medibot.js",
    image: "/assets/MediBot.png",
  },
  {
    id: "automation",
    label: "automation_scripts.py",
    image: "/assets/SearchAshiyana.png",
  },
  {
    id: "future",
    label: "future_builds.sh",
    image: "/assets/Future_build_placeholder.png",
  },
];

export function CyberLab() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeContent = tabs.find((t) => t.id === activeTab);

  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#FAF8F5] flex justify-center items-center overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[30rem] h-[30rem] bg-orange-400/10 rounded-full blur-[100px] mix-blend-multiply" />
        <div className="absolute bottom-1/4 left-1/4 w-[25rem] h-[25rem] bg-rose-400/5 rounded-full blur-[100px] mix-blend-multiply" />
      </div>

      <div className="w-full max-w-6xl px-6 relative z-10 flex flex-col items-center">
        {/* Header Section */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full bg-slate-200/50 border border-slate-300/60 shadow-sm text-sm font-semibold text-slate-600 tracking-wide"
          >
            Terminal / Automation
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900">
            Cyber Lab
          </h2>
          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Exploring system tools, backend architectures, and robotic process automations.
          </p>
        </motion.div>

        {/* macOS Terminal Window container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] bg-[#0C111A] border border-slate-700/60 ring-1 ring-white/10 flex flex-col z-20"
        >
          {/* macOS Terminal Top Bar */}
          <div className="h-12 bg-[#1b2230] flex items-center px-4 relative border-b border-black/50 select-none">
            {/* Traffic Lights */}
            <div className="flex space-x-2 absolute left-4 z-10">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm shadow-[#ff5f56]/20"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm shadow-[#ffbd2e]/20"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm shadow-[#27c93f]/20"></div>
            </div>
            
            {/* Window Title (Tabs) */}
            <div className="flex-1 flex justify-center h-full px-20 overflow-x-auto custom-scrollbar">
              <div className="flex space-x-1 sm:space-x-2 items-end h-full pt-2">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative px-4 py-2 text-xs sm:text-sm font-mono tracking-tight rounded-t-lg transition-colors overflow-hidden ${
                        isActive 
                          ? "bg-[#0C111A] text-blue-400 border-x border-t border-slate-700/40" 
                          : "bg-transparent text-slate-500 hover:bg-[#252f41] hover:text-slate-300"
                      }`}
                    >
                      {tab.label}
                      {isActive && (
                        <motion.div 
                          layoutId="active-tab-indicator"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500" 
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Terminal Content Body */}
          <div className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-[#0C111A] overflow-hidden p-[1px]">
            {/* Terminal styling decorative element */}
            <div className="absolute top-4 left-6 z-20 font-mono text-sm md:text-base opacity-70 tracking-wide drop-shadow-md">
              <span className="text-[#27c93f] font-semibold">{`visitor@cyberlab`}</span>
              <span className="text-white">:</span>
              <span className="text-blue-400">~/projects</span>
              <span className="text-white">$</span>{" "}
              <span className="text-slate-300">cat {activeContent.label}</span>
              <motion.span 
                animate={{ opacity: [1, 0, 1] }} 
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="inline-block w-2.5 h-4 bg-slate-400 ml-1 translate-y-0.5"
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15, filter: "blur(8px)", scale: 0.98 }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, y: -15, filter: "blur(8px)", scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full flex items-center justify-center pt-14 pb-2 px-2"
              >
                {/* Image Container inside terminal */}
                <div className="w-full h-full rounded-b-lg rounded-t-sm overflow-hidden border border-slate-800/80 relative bg-[#060913]">
                  <img 
                    src={activeContent.image} 
                    alt={activeContent.label}
                    className="w-full h-full object-contain md:object-cover object-top opacity-90 transition-opacity duration-500 hover:opacity-100"
                  />
                  {/* Subtle glare/reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none mix-blend-overlay" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
