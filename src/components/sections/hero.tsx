"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { PhoneButton } from "@/components/shared/phone-button";
import { GlowButton } from "@/components/animations/glow-button";
import { StarRating } from "@/components/shared/star-rating";

export function Hero() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 600], [0, 150]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const shouldReduceMotion = useReducedMotion();

  const words = COMPANY.tagline.split(" ");

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={shouldReduceMotion ? {} : { y: backgroundY }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop')",
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-ocean/85 via-ocean/60 to-ocean/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean/40 via-transparent to-transparent" />
      </motion.div>

      {/* Linen texture on top */}
      <div className="absolute inset-0 z-[1] linen-overlay pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
        style={shouldReduceMotion ? {} : { opacity: contentOpacity }}
      >
        <div className="max-w-2xl">
          {/* Animated Headline */}
          <h1 className="text-white">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.3em]"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: shouldReduceMotion ? 0 : 0.15 * i,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            className="mt-6 text-lg text-white/85 max-w-lg sm:text-xl"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.8 }}
          >
            Serving Englewood families with honest, reliable HVAC service for
            over {COMPANY.yearsInBusiness} years. Installation, repair, and
            maintenance you can trust.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 1.0 }}
          >
            <GlowButton>
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-terracotta-400 px-8 py-4 font-display text-lg font-bold text-white no-underline transition-all hover:bg-terracotta-500"
              >
                Schedule Service
              </Link>
            </GlowButton>
            <PhoneButton variant="outline" className="border-white/50 text-white hover:bg-white/15 hover:text-white" />
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            className="mt-8 flex items-center gap-3"
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 1.3 }}
          >
            <StarRating rating={COMPANY.averageRating} size="sm" />
            <span className="text-sm text-white/80">
              {COMPANY.reviewCount}+ Five-Star Reviews
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-8 w-8 text-white/50" />
      </motion.div>
    </section>
  );
}
