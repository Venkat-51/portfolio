"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const ROLES = [
  "Java Developer",
  "Spring Boot Developer",
  "React Developer",
  "Python Developer",
];

export function AnimatedRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-base font-semibold text-foreground/80 sm:text-xl lg:text-2xl tracking-tight">
      <span>Full Stack Web Developer</span>
      <span className="hidden sm:inline text-muted-foreground/60">•</span>
      <div className="relative inline-flex h-7 sm:h-8 min-w-[240px] sm:min-w-[280px] overflow-hidden items-center text-primary">
        <AnimatePresence mode="wait">
          <motion.span
            key={ROLES[index]}
            initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute left-0 whitespace-nowrap font-bold"
          >
            {ROLES[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
