"use client";

import { motion } from "motion/react";
import { Shield, Award, Users, Clock } from "lucide-react";
import { Container } from "@/components/shared/container";
import { CountUp } from "@/components/animations/count-up";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { COMPANY } from "@/lib/constants";

const stats = [
  {
    icon: Clock,
    value: COMPANY.yearsInBusiness,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: Users,
    value: COMPANY.customersServed,
    suffix: "+",
    label: "Happy Customers",
  },
  {
    icon: Award,
    value: COMPANY.averageRating,
    suffix: "",
    label: "Star Rating",
    isDecimal: true,
  },
  {
    icon: Shield,
    value: 100,
    suffix: "%",
    label: "Licensed & Insured",
  },
];

export function TrustSignals() {
  return (
    <section className="relative -mt-1 bg-white py-16">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 gap-8 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="text-center"
            >
              <stat.icon className="mx-auto h-8 w-8 text-teal-500 mb-3" />
              <div className="font-display text-4xl font-extrabold text-ocean lg:text-5xl">
                {stat.isDecimal ? (
                  <span>{stat.value}</span>
                ) : (
                  <CountUp end={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <p className="mt-1 text-sm font-medium text-ocean/60 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Certification Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-60">
          <div className="flex items-center gap-2 text-sm font-medium text-ocean/70">
            <Shield className="h-6 w-6" />
            <span>NATE Certified</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-ocean/70">
            <Award className="h-6 w-6" />
            <span>EPA 608 Licensed</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-ocean/70">
            <Shield className="h-6 w-6" />
            <span>BBB A+ Rated</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-ocean/70">
            <Award className="h-6 w-6" />
            <span>Fully Insured</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
