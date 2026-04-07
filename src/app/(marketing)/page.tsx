import { Hero } from "@/components/sections/hero";
import { TrustSignals } from "@/components/sections/trust-signals";
import { ServicesOverview } from "@/components/sections/services-overview";
import { EmergencyStrip } from "@/components/sections/emergency-strip";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import { MaintenanceTeaser } from "@/components/sections/maintenance-teaser";
import { CtaSection } from "@/components/sections/cta-section";
import { COMPANY } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <ServicesOverview />
      <EmergencyStrip />
      <TestimonialsCarousel />
      <MaintenanceTeaser />
      <CtaSection />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HVACBusiness",
            name: COMPANY.name,
            telephone: COMPANY.phone,
            email: COMPANY.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: COMPANY.address.street,
              addressLocality: COMPANY.address.city,
              addressRegion: COMPANY.address.state,
              postalCode: COMPANY.address.zip,
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 26.962,
              longitude: -82.3534,
            },
            openingHours: ["Mo-Fr 07:00-18:00", "Sa 08:00-14:00"],
            priceRange: "$$",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: COMPANY.averageRating,
              reviewCount: COMPANY.reviewCount,
            },
            areaServed: {
              "@type": "City",
              name: "Englewood, Florida",
            },
          }),
        }}
      />
    </>
  );
}
