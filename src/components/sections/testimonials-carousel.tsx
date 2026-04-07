"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { TESTIMONIALS, COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function TestimonialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("div > div")?.clientWidth || 350;
    el.scrollBy({
      left: direction === "left" ? -cardWidth - 24 : cardWidth + 24,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scroll("right");
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, scroll]);

  return (
    <section
      className="py-20 lg:py-28 bg-teal-50"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <Container>
        <SectionHeader
          title="What Our Neighbors Say"
          subtitle={`${COMPANY.reviewCount}+ five-star reviews from Englewood families just like yours.`}
        />

        <div className="relative">
          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory scrollbar-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            role="region"
            aria-roledescription="carousel"
            aria-label="Customer testimonials"
          >
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-[320px] shrink-0 snap-start sm:w-[380px]"
                role="group"
                aria-roledescription="slide"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={cn(
              "absolute -left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-elevated transition-all hover:bg-cream",
              "hidden lg:flex",
              !canScrollLeft && "opacity-0 pointer-events-none"
            )}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-ocean" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={cn(
              "absolute -right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-elevated transition-all hover:bg-cream",
              "hidden lg:flex",
              !canScrollRight && "opacity-0 pointer-events-none"
            )}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-ocean" />
          </button>
        </div>
      </Container>
    </section>
  );
}
