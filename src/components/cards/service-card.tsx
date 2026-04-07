"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Home, Building2, Wind, Siren } from "lucide-react";
import type { Service } from "@/types";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Building2,
  Wind,
  Siren,
};

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Home;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={cn(className)}
    >
      <Link
        href={service.href}
        className="group block h-full rounded-2xl bg-white p-6 shadow-card no-underline transition-shadow hover:shadow-elevated lg:p-8"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 text-teal-500 transition-colors group-hover:bg-teal-500 group-hover:text-white">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="mt-5 text-xl font-bold text-ocean">{service.shortTitle}</h3>
        <p className="mt-2 text-ocean/70 leading-relaxed">{service.description}</p>
        <div className="mt-5 flex items-center gap-1.5 font-display font-semibold text-terracotta-400 group-hover:text-terracotta-500">
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  );
}
