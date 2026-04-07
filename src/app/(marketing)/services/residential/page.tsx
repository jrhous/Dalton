import Link from "next/link";
import {
  Thermometer,
  Wrench,
  Shield,
  Zap,
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
  title: "Residential AC & Heating",
  description:
    "Expert residential HVAC services in Englewood, FL. AC repair, heating installation, maintenance, ductwork, and energy efficiency upgrades for your home.",
  path: "/services/residential",
});

const offerings = [
  {
    icon: Thermometer,
    title: "AC Installation & Replacement",
    description:
      "High-efficiency systems sized right for your home. We help you choose the best unit for Englewood's coastal climate and your budget.",
  },
  {
    icon: Wrench,
    title: "AC & Heating Repair",
    description:
      "Fast, accurate diagnostics and honest repairs. We fix all major brands and always explain what's needed before we start.",
  },
  {
    icon: Shield,
    title: "Preventive Maintenance",
    description:
      "Regular tune-ups extend equipment life, prevent breakdowns, and keep energy costs low. Especially critical in Florida's demanding climate.",
  },
  {
    icon: Zap,
    title: "Energy Efficiency Upgrades",
    description:
      "Smart thermostats, duct sealing, and high-SEER systems that save you money month after month on your electric bill.",
  },
];

const steps = [
  {
    num: "1",
    title: "Schedule a Visit",
    description: "Call or book online — we'll find a time that works for you.",
  },
  {
    num: "2",
    title: "Expert Diagnosis",
    description:
      "Our technician inspects your system and explains findings in plain language.",
  },
  {
    num: "3",
    title: "Fast Resolution",
    description:
      "We complete the repair, installation, or tune-up — and clean up after ourselves.",
  },
];

const faqs = [
  {
    q: "How often should I have my AC serviced in Florida?",
    a: "We recommend at least one tune-up per year, ideally in spring before the intense summer heat. With Florida's humidity and salt air near the coast, bi-annual service (spring and fall) is ideal for extending equipment life.",
  },
  {
    q: "What SEER rating do you recommend for Englewood homes?",
    a: "For our climate, we recommend a minimum SEER rating of 16. Higher SEER units (18-20+) cost more upfront but significantly reduce monthly energy bills in homes that run AC 8+ months per year.",
  },
  {
    q: "How long does a typical AC installation take?",
    a: "A standard residential replacement typically takes one day (6-8 hours). More complex installations involving ductwork modifications may require an additional day.",
  },
  {
    q: "Do you offer financing for new systems?",
    a: "Yes! We offer flexible financing options to help make a new system affordable. Contact us for current rates and terms — we're happy to find a plan that fits your budget.",
  },
  {
    q: "What brands do you service and install?",
    a: "We service all major brands including Carrier, Trane, Lennox, Rheem, Goodman, Daikin, and more. For installations, we carry a curated selection of top-rated brands chosen for durability in coastal Florida conditions.",
  },
];

export default function ResidentialPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-ocean py-16 lg:py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&h=600&fit=crop')",
          }}
        />
        <Container className="relative z-10">
          <Breadcrumbs />
          <h1 className="text-white">Residential AC & Heating</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Keep your Englewood home comfortable year-round with expert
            installation, repair, and maintenance from a team that treats
            you like family.
          </p>
        </Container>
      </section>

      {/* Offerings */}
      <section className="py-16 lg:py-24 bg-cream">
        <Container>
          <SectionHeader
            title="What We Offer"
            subtitle="Comprehensive home comfort solutions backed by over 20 years of Southwest Florida experience."
          />
          <StaggerChildren className="grid gap-6 sm:grid-cols-2">
            {offerings.map((item) => (
              <StaggerItem key={item.title}>
                <div className="rounded-2xl bg-white p-6 shadow-card lg:p-8 h-full">
                  <item.icon className="h-10 w-10 text-teal-500" />
                  <h3 className="mt-4 text-xl font-bold text-ocean">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-ocean/70">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <SectionHeader title="How It Works" subtitle="Simple, straightforward service from start to finish." />
          <div className="relative max-w-3xl mx-auto">
            {/* Connector Line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-sandy hidden sm:block" />
            <div className="space-y-8">
              {steps.map((step) => (
                <FadeIn key={step.num}>
                  <div className="flex gap-5 items-start">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white font-display text-2xl font-extrabold relative z-10">
                      {step.num}
                    </div>
                    <div className="pt-3">
                      <h3 className="text-xl font-bold text-ocean">{step.title}</h3>
                      <p className="mt-1 text-ocean/70">{step.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-teal-50">
        <Container>
          <SectionHeader title="Why Choose Us for Your Home" />
          <FadeIn>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              {[
                "Upfront pricing — no surprises",
                "Licensed, insured & NATE certified",
                "All major brands serviced",
                "Senior-friendly service",
                "Clean, courteous technicians",
                "Satisfaction guaranteed",
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

      {/* FAQ */}
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

      {/* CTA */}
      <section className="bg-teal-500 py-16 text-center">
        <Container>
          <FadeIn>
            <h2 className="text-white">Ready to Get Comfortable?</h2>
            <p className="mt-3 text-white/85 max-w-xl mx-auto">
              Schedule a service call or request a free estimate on a new system.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-display font-bold text-teal-600 no-underline hover:bg-cream transition-colors"
            >
              Schedule Service <ArrowRight className="h-5 w-5" />
            </Link>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
