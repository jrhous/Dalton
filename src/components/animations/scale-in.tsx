"use client";

import { motion, useReducedMotion } from "motion/react";
import { scaleIn } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function ScaleIn({ children, delay = 0, className }: ScaleInProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={scaleIn}
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
