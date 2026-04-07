import Link from "next/link";
import { Shield, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeader } from "@/components/shared/section-header";
import { PricingCard } from "@/components/cards/pricing-card";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MAINTENANCE_PLANS } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Maintenance Plans",
  description:
    "HVAC maintenance plans in Englewood, FL. Bronze, Silver, and Gold tiers with annual tune-ups, priority scheduling, repair discounts, and more.",
  path: "/maintenance-plans",
});

const benefits = [
  "Extends equipment life by up to 40%",
  "Prevents 95% of breakdowns before they happen",
  "Reduces energy bills by 15-25%",
  "Maintains your manufacturer warranty",
  "Priority scheduling — skip the wait",
  "Peace of mind in Florida's extreme heat",
];

const faqs = [
  {
    q: "Can I cancel my maintenance plan anytime?",
    a: "Yes. Monthly plans can be cancelled at any time with no penalty. Annual plans are non-refundable but can be transferred if you sell your home.",
  },
  {
    q: "What happens during a tune-up visit?",
    a: "Our technician performs a comprehensive 20+ point inspection including refrigerant levels, electrical connections, drain line clearing, filter replacement, thermostat calibration, and airflow testing. The visit typically takes 45-60 minutes.",
  },
  {
    q: "Do maintenance plans cover repairs?",
    a: "Plans include discounts on repairs (10-20% depending on tier) but don't cover the full cost of repairs. They do cover the tune-up visits, filter replacements (Silver and Gold), and diagnostic fees.",
  },
  {
    q: "Which plan do you recommend?",
    a: "For most Englewood homeowners, we recommend Silver. It covers both AC and heating tune-ups, includes filter replacements, and provides a 15% repair discount. Gold is ideal for older systems or homes where reliability is critical.",
  },
];

export default function MaintenancePlansPage() {
  return (
    <>
      <section className="bg-ocean py-16 lg:py-20">
        <Container>
          <Breadcrumbs />
          <h1 className="text-white">Maintenance Plans</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Protect your investment and avoid costly breakdowns with a
            maintenance plan designed for Florida&apos;s demanding climate.
          </p>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 lg:py-24 bg-cream">
        <Container>
          <SectionHeader
            title="Choose Your Plan"
            subtitle="All plans include priority scheduling, no overtime charges, and satisfaction guarantee."
          />
          <StaggerChildren className="grid gap-8 sm:grid-cols-3 max-w-5xl mx-auto items-start">
            {MAINTENANCE_PLANS.map((plan) => (
              <StaggerItem key={plan.id}>
                <PricingCard plan={plan} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* Why Maintenance Matters */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <SectionHeader
            title="Why Maintenance Matters in Florida"
            subtitle="Your HVAC system works harder here than almost anywhere else in the country."
          />
          <FadeIn>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-2.5">
                  <Shield className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                  <span className="text-ocean">{benefit}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-cream">
        <Container className="max-w-3xl">
          <SectionHeader title="Common Questions" />
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

      <section className="bg-terracotta-400 py-16 text-center">
        <Container>
          <FadeIn>
            <h2 className="text-white">Not Sure Which Plan Is Right?</h2>
            <p className="mt-3 text-white/85 max-w-xl mx-auto">
              Call us and we&apos;ll help you choose based on your system age, usage, and budget.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-display font-bold text-terracotta-500 no-underline hover:bg-cream transition-colors"
            >
              Get Help Choosing <ArrowRight className="h-5 w-5" />
            </Link>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
