"use client";

import React from "react";
import { motion } from "framer-motion";

export function ContactFooter() {
  return (
    <footer className="relative w-full flex flex-col pt-10">
      {/* Top Half: Warm Cream with Contact Form */}
      <section className="relative w-full py-24 lg:py-32 bg-[#FAF8F5] flex justify-center items-center px-6 selection:bg-[#E86565]/30">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle textured noise or soft blobs to make the background welcoming */}
          <div className="absolute top-10 left-[20%] w-[35rem] h-[35rem] bg-orange-400/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-[20%] w-[30rem] h-[30rem] bg-rose-400/5 rounded-full blur-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full max-w-4xl"
        >
          {/* Digital Postcard (Glassmorphism / Soft Card) */}
          <div className="bg-white/80 backdrop-blur-xl border border-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
            {/* Postcard decorative gradient top right */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#E86565]/10 to-transparent rounded-bl-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-amber-200/20 to-transparent rounded-tr-full pointer-events-none" />
            
            <div className="text-center mb-10 relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-800 mb-4">
                Leave a Note
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                Whether it's a project inquiry or just a friendly hello.
              </p>
            </div>

            <form className="flex flex-col gap-6 max-w-2xl mx-auto relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col group">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700 mb-2 ml-1 transition-colors group-focus-within:text-[#E86565]">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="Jane Doe"
                    className="px-5 py-4 rounded-xl bg-white/60 border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-[#E86565]/50 focus:border-[#E86565]/50 focus:bg-white transition-all shadow-sm placeholder:text-slate-400 text-slate-800 font-medium"
                  />
                </div>
                <div className="flex flex-col group">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700 mb-2 ml-1 transition-colors group-focus-within:text-[#E86565]">Your Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="jane@example.com"
                    className="px-5 py-4 rounded-xl bg-white/60 border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-[#E86565]/50 focus:border-[#E86565]/50 focus:bg-white transition-all shadow-sm placeholder:text-slate-400 text-slate-800 font-medium"
                  />
                </div>
              </div>

              <div className="flex flex-col group">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700 mb-2 ml-1 transition-colors group-focus-within:text-[#E86565]">Message</label>
                <textarea 
                  id="message"
                  rows={5}
                  placeholder="Drop a note or tell a story..."
                  className="px-5 py-4 rounded-xl bg-white/60 border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-[#E86565]/50 focus:border-[#E86565]/50 focus:bg-white transition-all shadow-sm placeholder:text-slate-400 text-slate-800 font-medium resize-none shadow-inner"
                />
              </div>

              <div className="mt-6 text-center">
                <button 
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#E86565] text-white font-bold text-lg tracking-wide hover:bg-[#d65555] active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#E86565]/30 transition-all shadow-xl hover:shadow-[0_10px_25px_-5px_rgba(232,101,101,0.6)] hover:-translate-y-1 group"
                >
                  Send Transmissions 
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Bottom Half: Dark Charcoal Terminal & Footer */}
      <section className="relative w-full bg-[#0C111A] text-slate-300 pt-20 pb-10 px-6 lg:px-12 flex flex-col items-center">
        
        {/* Terminal Sign-Off */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full max-w-4xl mb-20 overflow-hidden"
        >
          <div className="font-mono text-xs sm:text-sm md:text-base lg:text-lg text-left bg-[#06090E] p-6 lg:p-8 rounded-xl border border-slate-800/80 shadow-[inset_0_2px_20px_rgba(0,0,0,0.5)] leading-relaxed">
            <span className="text-[#27c93f] font-semibold">{`root@prachirathore`}</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~$</span>{" "}
            <span className="text-slate-300 mr-2">connect --target</span>
            <a 
              href="mailto:rathoreprachi021005@gmail.com"
              className="text-[#E86565] underline decoration-[#E86565]/40 underline-offset-4 hover:decoration-[#E86565] transition-all hover:text-white break-all sm:break-normal"
            >
              rathoreprachi021005@gmail.com
            </a>
            <motion.span 
                animate={{ opacity: [1, 0, 1] }} 
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="inline-block w-2.5 sm:w-3 h-[18px] sm:h-[22px] bg-slate-400 ml-2 align-middle -mt-1 sm:-mt-1.5"
            />
          </div>
        </motion.div>

        {/* The Footer Bar */}
        <div className="w-full max-w-6xl pt-10 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          
          {/* Left: Midnight Stories Logo (Substack format) */}
          <div className="flex items-center justify-center md:justify-start">
            <a href="#" className="w-48 opacity-70 hover:opacity-100 transition-opacity duration-300 group flex items-center gap-3">
              <img 
                src="/assets/substack_publication_logo.png" 
                alt="Midnight Stories Desk Lamp" 
                className="w-12 h-12 object-contain"
                onError={(e) => {
                   // Fallback sizing in case the logo dimensions are wide 
                   e.target.className = "w-full h-10 object-contain";
                }}
              />
              <span className="font-serif italic tracking-wide text-lg text-slate-300 group-hover:text-white transition-colors duration-300">
                Midnight Stories
              </span>
            </a>
          </div>

          {/* Center: Copyright & Tech */}
          <div className="text-center font-medium text-slate-500 text-sm md:text-xs lg:text-sm">
            Built with ☕, Next.js, and Framer Motion by <span className="text-slate-300 hover:text-[#E86565] transition-colors cursor-crosshair">Prachi Rathore</span>. 
            <br className="hidden md:block lg:hidden" />
            <span className="inline-block ml-1">© 2026</span>
          </div>

          {/* Right: Minimalist Socials */}
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://github.com/prachi0210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transform hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/prachi0210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}
