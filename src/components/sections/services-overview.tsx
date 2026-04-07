"use client";

import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { ServiceCard } from "@/components/cards/service-card";
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children";
import { SERVICES } from "@/lib/constants";

export function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <Container>
        <SectionHeader
          title="How We Keep You Comfortable"
          subtitle="From emergency repairs to preventive maintenance, our team has you covered with comprehensive HVAC solutions for Englewood and Southwest Florida."
        />
        <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <StaggerItem key={service.id}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
