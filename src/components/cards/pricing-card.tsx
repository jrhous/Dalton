"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import type { MaintenancePlan } from "@/types";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  plan: MaintenancePlan;
  className?: string;
}

export function PricingCard({ plan, className }: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={cn(
        "relative flex flex-col rounded-2xl p-6 shadow-card lg:p-8",
        plan.highlighted
          ? "bg-teal-500 text-white ring-2 ring-teal-500 ring-offset-4 ring-offset-cream"
          : "bg-white text-ocean",
        className
      )}
    >
      {plan.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-terracotta-400 px-4 py-1 text-xs font-bold text-white uppercase tracking-wider">
          Most Popular
        </span>
      )}

      <h3
        className={cn(
          "text-2xl font-bold",
          plan.highlighted ? "text-white" : "text-ocean"
        )}
      >
        {plan.name}
      </h3>

      <div className="mt-4">
        <span className={cn("text-4xl font-extrabold", plan.highlighted ? "text-white" : "text-ocean")}>
          ${plan.monthlyPrice}
        </span>
        <span className={cn("text-sm", plan.highlighted ? "text-white/80" : "text-ocean/60")}>
          /month
        </span>
        <p className={cn("mt-1 text-sm", plan.highlighted ? "text-white/70" : "text-ocean/50")}>
          or ${plan.annualPrice}/year (save ${plan.monthlyPrice * 12 - plan.annualPrice})
        </p>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature.text} className="flex items-start gap-2.5">
            {feature.included ? (
              <Check
                className={cn(
                  "mt-0.5 h-5 w-5 shrink-0",
                  plan.highlighted ? "text-terracotta-200" : "text-success"
                )}
              />
            ) : (
              <X
                className={cn(
                  "mt-0.5 h-5 w-5 shrink-0",
                  plan.highlighted ? "text-white/30" : "text-ocean/25"
                )}
              />
            )}
            <span
              className={cn(
                "text-sm",
                !feature.included &&
                  (plan.highlighted ? "text-white/40 line-through" : "text-ocean/40 line-through")
              )}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href={`/contact?plan=${plan.id}`}
        className={cn(
          "mt-8 block rounded-xl px-6 py-3.5 text-center font-display font-bold no-underline transition-all",
          plan.highlighted
            ? "bg-white text-teal-600 hover:bg-cream hover:shadow-lg"
            : "bg-teal-500 text-white hover:bg-teal-600 hover:shadow-warm"
        )}
      >
        {plan.ctaText}
      </Link>
    </motion.div>
  );
}
