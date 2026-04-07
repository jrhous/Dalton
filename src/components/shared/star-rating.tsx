import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function StarRating({ rating, size = "md", className }: StarRatingProps) {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  return (
    <div className={cn("flex gap-0.5", className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={cn(
            sizes[size],
            i < Math.floor(rating)
              ? "fill-terracotta-400 text-terracotta-400"
              : "fill-sandy-dark/30 text-sandy-dark/30"
          )}
        />
      ))}
    </div>
  );
}
