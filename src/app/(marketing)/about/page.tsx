import Link from "next/link";
import { Heart, Shield, Users, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeader } from "@/components/shared/section-header";
import { TeamCard } from "@/components/cards/team-card";
import { FadeIn } from "@/components/animations/fade-in";
import { SlideIn } from "@/components/animations/slide-in";
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children";
import { COMPANY, TEAM_MEMBERS } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About Us",
  description: `Learn about ${COMPANY.name}, Englewood Florida's trusted family-owned HVAC company. Over ${COMPANY.yearsInBusiness} years of honest, reliable service.`,
  path: "/about",
});

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We do the right thing, even when no one's watching. Honest diagnostics, fair pricing, and no upselling — just straightforward service.",
  },
  {
    icon: Shield,
    title: "Expertise",
    description:
      "NATE-certified technicians with real Florida experience. We know coastal HVAC challenges because we live here too.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We're not just a business — we're your neighbors. We support local causes and treat every customer like part of our extended family.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-ocean py-16 lg:py-20">
        <Container>
          <Breadcrumbs />
          <h1 className="text-white">About Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            A family-owned HVAC company rooted in Englewood and committed to
            your comfort.
          </p>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-cream">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <SlideIn direction="left">
              <div>
                <h2 className="text-ocean">Our Story</h2>
                <p className="mt-4 text-ocean/70 leading-relaxed">
                  Over {COMPANY.yearsInBusiness} years ago, our founder started
                  this company with a simple belief: homeowners deserve HVAC
                  service that&apos;s honest, reliable, and fair. Too many
                  families were being overcharged or sold equipment they
                  didn&apos;t need.
                </p>
                <p className="mt-4 text-ocean/70 leading-relaxed">
                  What started as a one-truck operation has grown into
                  Englewood&apos;s most trusted HVAC team — but our values
                  haven&apos;t changed. We still answer the phone ourselves, we
                  still explain everything before we start, and we still stand
                  behind every job with a handshake and a guarantee.
                </p>
                <p className="mt-4 text-ocean/70 leading-relaxed">
                  When you choose us, you&apos;re not getting a corporate
                  franchise. You&apos;re getting a local family that cares about
                  this community — because it&apos;s our community too.
                </p>
              </div>
            </SlideIn>
            <SlideIn direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated aspect-[4/3]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop')",
                  }}
                />
              </div>
            </SlideIn>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <SectionHeader
            title="What We Stand For"
            subtitle="Three principles that guide everything we do."
          />
          <StaggerChildren className="grid gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-500">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-ocean">{value.title}</h3>
                  <p className="mt-2 text-ocean/70">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-cream">
        <Container>
          <SectionHeader
            title="Meet Our Team"
            subtitle="The friendly faces behind your home comfort."
          />
          <StaggerChildren className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_MEMBERS.map((member) => (
              <StaggerItem key={member.id}>
                <TeamCard member={member} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-24 bg-teal-50">
        <Container>
          <SectionHeader title="Certifications & Credentials" />
          <FadeIn>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
              {[
                { title: "NATE Certified", desc: "North American Technician Excellence" },
                { title: "EPA 608", desc: "Refrigerant handling certification" },
                { title: "BBB A+ Rating", desc: "Better Business Bureau accredited" },
                { title: "State Licensed", desc: `License #${COMPANY.licenseNumber}` },
              ].map((cert) => (
                <div
                  key={cert.title}
                  className="rounded-xl bg-white p-5 text-center shadow-card"
                >
                  <Shield className="mx-auto h-8 w-8 text-teal-500" />
                  <p className="mt-3 font-display font-bold text-ocean">{cert.title}</p>
                  <p className="mt-1 text-xs text-ocean/60">{cert.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-teal-500 py-16 text-center">
        <Container>
          <FadeIn>
            <h2 className="text-white">Want to Join Our Family of Happy Customers?</h2>
            <p className="mt-3 text-white/85 max-w-xl mx-auto">
              Experience the difference that honest, family-owned service makes.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-display font-bold text-teal-600 no-underline hover:bg-cream transition-colors"
            >
              Get in Touch <ArrowRight className="h-5 w-5" />
            </Link>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
