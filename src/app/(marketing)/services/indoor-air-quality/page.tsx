import Link from "next/link";
import {
  Wind,
  Droplets,
  Sparkles,
  SunMedium,
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
  title: "Indoor Air Quality",
  description:
    "Indoor air quality services in Englewood, FL. Duct cleaning, air purifiers, dehumidifiers, UV germicidal lights, and humidity control for healthier homes.",
  path: "/services/indoor-air-quality",
});

const offerings = [
  {
    icon: Wind,
    title: "Duct Cleaning & Sanitizing",
    description:
      "Remove dust, mold, and allergens from your ductwork. Essential in Florida's humid climate where mold thrives in dark, damp spaces.",
  },
  {
    icon: Sparkles,
    title: "Air Purification Systems",
    description:
      "Whole-home HEPA filtration and electronic air cleaners that capture 99.97% of airborne particles, including allergens, pet dander, and bacteria.",
  },
  {
    icon: Droplets,
    title: "Whole-Home Dehumidifiers",
    description:
      "Control indoor humidity to prevent mold growth, protect wood furnishings, and create a more comfortable living environment.",
  },
  {
    icon: SunMedium,
    title: "UV Germicidal Lights",
    description:
      "Installed inside your HVAC system, UV lights kill mold, bacteria, and viruses as air circulates — a must for allergy sufferers.",
  },
];

const faqs = [
  {
    q: "Why is indoor air quality especially important in Englewood?",
    a: "Englewood's coastal humidity frequently exceeds 70%, creating ideal conditions for mold and mildew growth inside ductwork and HVAC systems. Salt air also introduces unique particles. Professional IAQ solutions address these Florida-specific challenges.",
  },
  {
    q: "How often should I have my ducts cleaned?",
    a: "We recommend professional duct cleaning every 3-5 years, or sooner if you notice musty odors, visible mold, excessive dust, or after home renovations. Homes with pets or allergy sufferers may benefit from more frequent cleaning.",
  },
  {
    q: "Will a dehumidifier help with my energy bills?",
    a: "Yes! When humidity is properly controlled (ideally 45-55%), your AC doesn't have to work as hard. Many homeowners see 10-15% reduction in cooling costs after installing a whole-home dehumidifier.",
  },
  {
    q: "Do UV lights really work?",
    a: "Absolutely. UV-C germicidal lights are proven to kill up to 99.9% of airborne pathogens. They're widely used in hospitals and have become increasingly popular in residential HVAC systems, especially in humid climates like ours.",
  },
  {
    q: "Can you test my home's air quality?",
    a: "Yes. We offer comprehensive indoor air quality assessments that measure humidity levels, particulate matter, and potential mold indicators. This helps us recommend the right solutions for your specific situation.",
  },
];

export default function IndoorAirQualityPage() {
  return (
    <>
      <section className="relative bg-ocean py-16 lg:py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1631545806609-e5e0b29b567e?w=1920&h=600&fit=crop')",
          }}
        />
        <Container className="relative z-10">
          <Breadcrumbs />
          <h1 className="text-white">Indoor Air Quality</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Breathe easier in your Englewood home with professional air quality
            solutions designed for Florida&apos;s humid, coastal climate.
          </p>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-cream">
        <Container>
          <SectionHeader
            title="Breathe Better at Home"
            subtitle="Florida's humidity creates unique indoor air challenges. We have the solutions."
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

      {/* Why IAQ Matters */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <SectionHeader title="Why It Matters in Florida" />
          <FadeIn>
            <div className="max-w-3xl mx-auto rounded-2xl bg-teal-50 p-8 lg:p-10">
              <div className="grid gap-6 sm:grid-cols-3 text-center">
                <div>
                  <p className="text-4xl font-extrabold text-teal-500 font-display">70%+</p>
                  <p className="mt-1 text-sm text-ocean/70">Average outdoor humidity in summer</p>
                </div>
                <div>
                  <p className="text-4xl font-extrabold text-teal-500 font-display">5x</p>
                  <p className="mt-1 text-sm text-ocean/70">Indoor air can be more polluted than outdoor</p>
                </div>
                <div>
                  <p className="text-4xl font-extrabold text-teal-500 font-display">90%</p>
                  <p className="mt-1 text-sm text-ocean/70">Of our time is spent indoors</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-teal-50">
        <Container>
          <SectionHeader title="Signs You Need IAQ Help" />
          <FadeIn>
            <div className="grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
              {[
                "Musty or stale odors in your home",
                "Excessive dust on surfaces",
                "Allergy or asthma symptoms worsening indoors",
                "Visible mold near vents or in bathrooms",
                "Condensation on windows",
                "Uneven humidity throughout the house",
              ].map((sign) => (
                <div key={sign} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-terracotta-400" />
                  <span className="text-ocean">{sign}</span>
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
            <h2 className="text-white">Breathe Easier Starting Today</h2>
            <p className="mt-3 text-white/85 max-w-xl mx-auto">
              Schedule a free indoor air quality assessment and find out what&apos;s
              really in the air you&apos;re breathing.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-display font-bold text-teal-600 no-underline hover:bg-cream transition-colors"
            >
              Request IAQ Assessment <ArrowRight className="h-5 w-5" />
            </Link>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
