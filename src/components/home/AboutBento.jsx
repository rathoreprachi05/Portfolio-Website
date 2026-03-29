"use client";

import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

export const AboutBento = () => {
  return (
    <section id="about" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 [perspective:1000px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* Card 1: Intro */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-3">
            <motion.div
              whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-[#FAF8F5] rounded-3xl p-8 shadow-lg border border-stone-200 h-full"
            >
              <h2 className="text-4xl font-bold mb-4 text-[#1E293B]">More than just code.</h2>
              <p className="text-[#334155] text-lg leading-relaxed">
                Hi, I'm Prachi Rathore. I am a 3rd-year B.Tech Computer Science and Engineering student based in New Delhi, minoring in Cyber Security with an open minor in English. I thrive at the intersection of rigid logic and creative storytelling—whether that means architecting secure backend systems, building AI-powered applications, or writing essays under the midnight lamp.
              </p>
            </motion.div>
          </motion.div>

          {/* Card 2: Stats */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <motion.div
              whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-[#1E293B] rounded-3xl p-8 shadow-lg text-white h-full"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-200">By the Numbers.</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-xl">🏆</span>
                  <span className="text-sm text-gray-300">SIH 2025 Grand Finalist (Khel-Connect AI Platform).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">💻</span>
                  <span className="text-sm text-gray-300">500+ DSA Problems crushed across LeetCode & GeeksforGeeks.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">🔥</span>
                  <span className="text-sm text-gray-300">Mentorship: Guided junior developers at TechXpo.</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Card 3: Cyber Security */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <motion.div
              whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-[#0F172A] rounded-3xl p-8 shadow-lg text-white flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold">Secure by Design.</h3>
                  <span className="text-2xl">🛡️</span>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  Deeply passionate about data sovereignty and offensive security. Currently preparing for my CEH and CHFI certifications while daily-driving EndeavourOS. Recently engineered Citadel, a zero-knowledge password manager with military-grade encryption.
                </p>
              </div>
              <p className="text-sm text-gray-400 mt-6 font-mono border-t border-gray-700 pt-4">
                Tech Stack Snippet: Nmap, Wireshark, Linux, Cryptography, Python.
              </p>
            </motion.div>
          </motion.div>

          {/* Card 4: Midnight Stories */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <motion.div
              whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-[#E86565] rounded-3xl p-8 shadow-lg text-white flex flex-col justify-between h-full"
            >
              <div>
                <img src="/assets/substack_publication_logo.png" className="w-24 h-auto mb-4" alt="Desk Lamp" />
                <h3 className="text-2xl font-bold mb-4">Midnight Stories.</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-6">
                  When I'm not compiling code, I'm weaving words. I maintain a Substack dedicated to creative writing, personal journaling, and exploring the poetry of everyday life.
                </p>
              </div>
              <a href="#substack" className="font-semibold text-white hover:text-white/80 transition-colors flex items-center gap-2 text-sm w-fit">
                Read my latest essay ↗
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column Stack for lg screens: Contains Card 5 & Card 6 */}
          {/* Using standard div since stagger variants will propagate from the master container */}
          <div className="md:col-span-3 lg:col-span-1 flex flex-col gap-6">
            {/* Card 5: Duolingo */}
            <motion.div variants={itemVariants} className="flex-1">
              <motion.div
                whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-3xl p-6 shadow-lg flex items-center gap-4 h-full"
              >
                <span className="text-4xl shrink-0">🔥</span>
                <p className="font-semibold text-[#1E293B] text-sm">
                  475+ Days French Streak (Duolingo). Toujours apprendre!
                </p>
              </motion.div>
            </motion.div>

            {/* Card 6: Reading */}
            <motion.div variants={itemVariants} className="flex-1">
              <motion.div
                whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-3xl p-6 shadow-lg flex items-center gap-4 h-full"
              >
                <img src="/assets/Lady of Darkness book cover.jpg" className="w-16 h-auto rounded-md shadow-sm" alt="Lady of Darkness Book" />
                <p className="font-semibold text-[#1E293B] text-sm">
                  Currently lost in the world of Lady of Darkness.
                </p>
              </motion.div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
