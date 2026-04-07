import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { StarRating } from "@/components/shared/star-rating";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children";
import { TESTIMONIALS, COMPANY } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Customer Reviews",
  description: `Read ${COMPANY.reviewCount}+ customer reviews for ${COMPANY.name}. ${COMPANY.averageRating}-star rated HVAC company in Englewood, FL.`,
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-ocean py-16 lg:py-20">
        <Container>
          <Breadcrumbs />
          <h1 className="text-white">Customer Reviews</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Don&apos;t just take our word for it — hear from your neighbors.
          </p>
        </Container>
      </section>

      {/* Overall Rating */}
      <section className="py-12 bg-white border-b border-sandy/50">
        <Container>
          <FadeIn>
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:gap-8">
              <div>
                <span className="font-display text-7xl font-extrabold text-ocean">
                  {COMPANY.averageRating}
                </span>
              </div>
              <div className="text-left">
                <StarRating rating={COMPANY.averageRating} size="lg" />
                <p className="mt-1 text-ocean/70">
                  Based on {COMPANY.reviewCount}+ verified reviews
                </p>
                <a
                  href={COMPANY.social.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-teal-500 hover:text-teal-600"
                >
                  Leave us a review on Google
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 lg:py-24 bg-cream">
        <Container>
          <StaggerChildren className="columns-1 gap-6 sm:columns-2 lg:columns-3 space-y-6">
            {TESTIMONIALS.map((testimonial) => (
              <StaggerItem key={testimonial.id} className="break-inside-avoid">
                <TestimonialCard testimonial={testimonial} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      <section className="bg-teal-500 py-16 text-center">
        <Container>
          <FadeIn>
            <h2 className="text-white">Ready to Experience It Yourself?</h2>
            <p className="mt-3 text-white/85 max-w-xl mx-auto">
              Join hundreds of happy Englewood families who trust us with their comfort.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-xl bg-white px-8 py-4 font-display font-bold text-teal-600 no-underline hover:bg-cream transition-colors"
            >
              Schedule Service Today
            </Link>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
