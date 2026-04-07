"use client";

import { motion, useReducedMotion } from "motion/react";
import { slideInLeft, slideInRight } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SlideInProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  delay?: number;
  className?: string;
}

export function SlideIn({ children, direction = "left", delay = 0, className }: SlideInProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={direction === "left" ? slideInLeft : slideInRight}
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
