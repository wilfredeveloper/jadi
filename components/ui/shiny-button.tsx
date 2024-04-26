"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface ShinyButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function ShinyButton({children, className = ""}: ShinyButtonProps) {
  return (
    <motion.button
      className={`px-6 py-3 rounded-md relative bg-zinc-800 radial-gradient ${className}`}
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 2,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness1: 10,
          damping: 5,
          mass: 0.1,
        }
      }}
    >
      <span
        className={`text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask`}
      >
        {children || "Get Started"}
      </span>
      <span className={`block absolute inset-0 rounded-md p-px linear-overlay`}></span>
    </motion.button>
  );
}
