"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowButton({ children, className }: GlowButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={cn("inline-block", className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("inline-block rounded-xl", className)}
      animate={{
        boxShadow: [
          "0 0 0 0 rgba(196, 114, 78, 0.4)",
          "0 0 20px 8px rgba(196, 114, 78, 0)",
          "0 0 0 0 rgba(196, 114, 78, 0)",
        ],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
