"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const TypewriterText = ({ 
  phrases, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseDuration = 3000 
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentPhrase = phrases[currentIndex];

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentPhrase.slice(0, currentText.length - 1));
        }, deletingSpeed);
      }
    } else {
      if (currentText === currentPhrase) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="inline-flex items-center">
      <span>{currentText}</span>
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear", repeatType: "reverse" }}
        className="inline-block w-[3px] h-[1.1em] bg-[#E86565] ml-[4px]"
        style={{ originY: 0.5 }}
      />
    </span>
  );
};
