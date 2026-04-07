"use client";

import { motion, useReducedMotion } from "motion/react";
import { fadeInUp, fadeIn } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  direction?: "up" | "none";
  delay?: number;
  className?: string;
}

export function FadeIn({ children, direction = "up", delay = 0, className }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={direction === "up" ? fadeInUp : fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
