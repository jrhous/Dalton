"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children";
import { MAINTENANCE_PLANS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function MaintenanceTeaser() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <Container>
        <SectionHeader
          title="Save Money with a Maintenance Plan"
          subtitle="Regular maintenance extends equipment life, prevents costly breakdowns, and keeps your energy bills low."
        />
        <StaggerChildren className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
          {MAINTENANCE_PLANS.map((plan) => (
            <StaggerItem key={plan.id}>
              <div
                className={cn(
                  "rounded-2xl p-6 text-center transition-shadow hover:shadow-elevated",
                  plan.highlighted
                    ? "bg-teal-500 text-white shadow-elevated"
                    : "bg-white text-ocean shadow-card"
                )}
              >
                <h3
                  className={cn(
                    "text-xl font-bold",
                    plan.highlighted ? "text-white" : "text-ocean"
                  )}
                >
                  {plan.name}
                </h3>
                <div className="mt-3">
                  <span
                    className={cn(
                      "text-3xl font-extrabold",
                      plan.highlighted ? "text-white" : "text-ocean"
                    )}
                  >
                    ${plan.monthlyPrice}
                  </span>
                  <span
                    className={cn(
                      "text-sm",
                      plan.highlighted ? "text-white/80" : "text-ocean/60"
                    )}
                  >
                    /mo
                  </span>
                </div>
                {plan.highlighted && (
                  <span className="mt-2 inline-block text-xs font-bold text-terracotta-200 uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
        <div className="mt-10 text-center">
          <Link
            href="/maintenance-plans"
            className="inline-flex items-center gap-2 font-display font-bold text-terracotta-400 hover:text-terracotta-500 text-lg"
          >
            View All Plans & Compare
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
