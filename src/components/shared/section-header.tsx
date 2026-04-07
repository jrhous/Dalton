"use client";

import { motion } from "motion/react";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "mb-12 lg:mb-16",
        centered && "text-center",
        className
      )}
    >
      <h2
        className={cn(
          "text-balance",
          light ? "text-white" : "text-ocean"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg",
            centered && "mx-auto",
            light ? "text-white/80" : "text-ocean/70"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
