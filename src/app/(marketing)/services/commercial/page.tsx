import Link from "next/link";
import {
  Building2,
  Wrench,
  BarChart3,
  HardHat,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Commercial HVAC",
  description:
    "Commercial HVAC services in Englewood, FL. Rooftop units, energy management, preventive maintenance contracts, and new construction HVAC for businesses.",
  path: "/services/commercial",
});

const offerings = [
  {
    icon: Building2,
    title: "Commercial AC Systems",
    description:
      "Installation, repair, and replacement of commercial cooling and heating systems — from small offices to large retail spaces.",
  },
  {
    icon: Wrench,
    title: "Rooftop Unit Service",
    description:
      "Expert service for rooftop package units, split systems, and VRF systems. We keep your equipment running at peak efficiency.",
  },
  {
    icon: BarChart3,
    title: "Energy Management",
    description:
      "Programmable controls, building automation integration, and efficiency audits to reduce your operating costs.",
  },
  {
    icon: HardHat,
    title: "New Construction HVAC",
    description:
      "Full design-build HVAC solutions for new commercial projects. We work with your general contractor from blueprint to commissioning.",
  },
];

const faqs = [
  {
    q: "Do you offer commercial maintenance contracts?",
    a: "Yes. Our commercial maintenance contracts include regular inspections, filter changes, and priority response times. We customize plans based on your equipment, building size, and operating hours.",
  },
  {
    q: "Can you service my restaurant's HVAC and kitchen ventilation?",
    a: "Absolutely. We service restaurant HVAC systems including make-up air units, kitchen hood exhaust fans, and dining area comfort systems. We understand the unique demands restaurants face.",
  },
  {
    q: "What's your response time for commercial emergencies?",
    a: "For commercial clients with maintenance contracts, we guarantee same-day response. For non-contract commercial emergencies, we typically respond within 4-6 hours.",
  },
  {
    q: "Do you handle permits and inspections?",
    a: "Yes. We handle all permitting and coordinate inspections with local authorities. Our team is fully licensed and familiar with Charlotte and Sarasota County commercial building codes.",
  },
];

export default function CommercialPage() {
  return (
    <>
      <section className="relative bg-ocean py-16 lg:py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=600&fit=crop')",
          }}
        />
        <Container className="relative z-10">
          <Breadcrumbs />
          <h1 className="text-white">Commercial HVAC</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Keep your business comfortable and productive with reliable
            commercial HVAC solutions tailored to Southwest Florida&apos;s
            demanding climate.
          </p>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-cream">
        <Container>
          <SectionHeader
            title="Commercial Solutions"
            subtitle="Full-service commercial HVAC for offices, retail, restaurants, and industrial spaces."
          />
          <StaggerChildren className="grid gap-6 sm:grid-cols-2">
            {offerings.map((item) => (
              <StaggerItem key={item.title}>
                <div className="rounded-2xl bg-white p-6 shadow-card lg:p-8 h-full">
                  <item.icon className="h-10 w-10 text-teal-500" />
                  <h3 className="mt-4 text-xl font-bold text-ocean">{item.title}</h3>
                  <p className="mt-2 text-ocean/70">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-teal-50">
        <Container>
          <SectionHeader title="Why Businesses Trust Us" />
          <FadeIn>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              {[
                "Minimal disruption to operations",
                "Licensed for commercial work",
                "Flexible scheduling — nights & weekends",
                "Transparent commercial pricing",
                "Maintenance contracts available",
                "All commercial brands serviced",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-teal-500" />
                  <span className="font-medium text-ocean">{benefit}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-cream">
        <Container className="max-w-3xl">
          <SectionHeader title="Frequently Asked Questions" />
          <FadeIn>
            <Accordion className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-xl bg-white px-6 shadow-card border-none"
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-ocean hover:text-teal-500 py-5 text-base">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-ocean/70 pb-5 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-teal-500 py-16 text-center">
        <Container>
          <FadeIn>
            <h2 className="text-white">Keep Your Business Running Cool</h2>
            <p className="mt-3 text-white/85 max-w-xl mx-auto">
              Request a commercial consultation or emergency service today.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-display font-bold text-teal-600 no-underline hover:bg-cream transition-colors"
            >
              Request Commercial Quote <ArrowRight className="h-5 w-5" />
            </Link>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
