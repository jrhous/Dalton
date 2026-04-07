import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children";
import { SERVICES } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Our Services",
  description:
    "Comprehensive HVAC services in Englewood, FL. Residential & commercial AC repair, installation, maintenance, indoor air quality, and 24/7 emergency service.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ocean py-16 lg:py-20">
        <Container>
          <Breadcrumbs />
          <h1 className="text-white">Our Services</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            From emergency repairs to new installations, our NATE-certified
            technicians deliver reliable HVAC solutions for homes and businesses
            across Southwest Florida.
          </p>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-cream">
        <Container>
          <StaggerChildren className="grid gap-8 md:grid-cols-2">
            {SERVICES.map((service) => (
              <StaggerItem key={service.id}>
                <Link
                  href={service.href}
                  className="group block overflow-hidden rounded-2xl bg-white shadow-card no-underline transition-shadow hover:shadow-elevated"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean/60 to-transparent" />
                  </div>
                  <div className="p-6 lg:p-8">
                    <h2 className="text-2xl font-bold text-ocean">{service.title}</h2>
                    <p className="mt-2 text-ocean/70">{service.description}</p>
                    <ul className="mt-4 grid grid-cols-2 gap-2">
                      {service.features.slice(0, 4).map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-1.5 text-sm text-ocean/60"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-teal-500 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex items-center gap-1.5 font-display font-semibold text-terracotta-400 group-hover:text-terracotta-500">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* Emergency CTA */}
      <section className="bg-terracotta-400 py-12 text-center">
        <Container>
          <FadeIn>
            <h2 className="text-white">Need Help Right Now?</h2>
            <p className="mt-2 text-white/85">
              Our emergency technicians are available 24/7 for urgent HVAC issues.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-xl bg-white px-8 py-4 font-display font-bold text-terracotta-500 no-underline hover:bg-cream transition-colors"
            >
              Schedule Emergency Service
            </Link>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
