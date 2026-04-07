import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children";
import { PhoneButton } from "@/components/shared/phone-button";
import { SERVICE_AREAS } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Service Areas",
  description:
    "HVAC service areas in Southwest Florida. Serving Englewood, North Port, Venice, Port Charlotte, Punta Gorda, Rotonda West, Boca Grande, and more.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-ocean py-16 lg:py-20">
        <Container>
          <Breadcrumbs />
          <h1 className="text-white">Service Areas</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Proudly serving Englewood and communities across Southwest Florida
            with reliable HVAC service.
          </p>
        </Container>
      </section>

      {/* Map */}
      <section className="py-16 lg:py-24 bg-cream">
        <Container>
          <SectionHeader
            title="Where We Serve"
            subtitle="From Englewood to Venice, North Port to Boca Grande — we've got Southwest Florida covered."
          />

          <FadeIn>
            <div className="overflow-hidden rounded-2xl shadow-elevated mb-16">
              <iframe
                title="Service areas map centered on Englewood, Florida"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113174.94!2d-82.43!3d26.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c37e1e4d5f70ad%3A0xb597c90f1eb4b39c!2sEnglewood%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>

          {/* Area Cards */}
          <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_AREAS.map((area) => (
              <StaggerItem key={area.name}>
                <div className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-card">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                  <div>
                    <h3 className="font-display font-bold text-ocean">
                      {area.name}
                    </h3>
                    <p className="mt-0.5 text-sm text-ocean/60">
                      {area.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      <section className="bg-sandy py-16 text-center">
        <Container>
          <FadeIn>
            <h2 className="text-ocean">Not Sure If We Serve Your Area?</h2>
            <p className="mt-3 text-ocean/70 max-w-xl mx-auto">
              Give us a call! We may be able to accommodate your location even
              if it&apos;s not listed above.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <PhoneButton variant="large" />
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-8 py-4 font-display font-bold text-white no-underline hover:bg-teal-600 transition-colors"
              >
                Contact Us Online <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
