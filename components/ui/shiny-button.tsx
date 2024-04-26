"use client";
import { motion, useMotionValue } from "framer-motion";

interface ShinyButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function ShinyButton({children, className = ""}: ShinyButtonProps) {
  const x = useMotionValue("100%"); // Initial value

  return (
    <motion.button
      className={`px-6 py-3 rounded-md relative bg-zinc-800 radial-gradient ${className}`}
      style={{ "--x": x } as any} // Use the style prop to animate the custom CSS property
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
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      onClick={() => x.set(x.get() === "100%" ? "-100%" : "100%")} // Toggle between "100%" and "-100%" when the button is clicked
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