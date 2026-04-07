import { Quote } from "lucide-react";
import { StarRating } from "@/components/shared/star-rating";
import type { Testimonial } from "@/types";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-2xl bg-white p-6 shadow-card lg:p-8",
        className
      )}
    >
      <Quote className="h-8 w-8 text-terracotta-200 mb-4" />
      <StarRating rating={testimonial.rating} className="mb-3" />
      <blockquote className="flex-1 text-ocean/80 leading-relaxed italic">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>
      <div className="mt-5 border-t border-sandy/50 pt-4">
        <p className="font-display font-bold text-ocean">{testimonial.name}</p>
        <p className="text-sm text-ocean/60">
          {testimonial.serviceType} &middot; via {testimonial.source}
        </p>
      </div>
    </div>
  );
}
