"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full py-6 px-8 flex justify-between items-center max-w-7xl mx-auto"
    >
      <Link href="/" className="text-xl font-bold font-mono tracking-tighter text-coral">
        ~cozy.dev
      </Link>

      <nav className="hidden md:flex gap-8 text-sm font-medium">
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects">Work</NavLink>
        <NavLink href="#writing">Writing</NavLink>
      </nav>

      <div className="flex gap-4 items-center">
        {/* We can place theme toggles or quick links here */}
        <Link href="#contact" className="text-sm font-medium hover:text-coral transition-colors">
          Say Hi
        </Link>
      </div>
    </motion.header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="relative group text-midnight dark:text-cream">
    <span className="group-hover:text-coral transition-colors">{children}</span>
    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-coral transition-all group-hover:w-full" />
  </Link>
);
