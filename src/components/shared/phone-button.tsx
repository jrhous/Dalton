import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface PhoneButtonProps {
  variant?: "default" | "large" | "outline";
  className?: string;
}

export function PhoneButton({ variant = "default", className }: PhoneButtonProps) {
  return (
    <a
      href={`tel:${COMPANY.phoneRaw}`}
      className={cn(
        "inline-flex items-center gap-2 font-display font-bold no-underline transition-all",
        variant === "default" &&
          "rounded-lg bg-teal-500 px-5 py-3 text-white hover:bg-teal-600",
        variant === "large" &&
          "rounded-xl bg-terracotta-400 px-8 py-4 text-xl text-white hover:bg-terracotta-500 shadow-warm",
        variant === "outline" &&
          "rounded-lg border-2 border-teal-500 px-5 py-3 text-teal-500 hover:bg-teal-500 hover:text-white",
        className
      )}
    >
      <Phone className={cn("shrink-0", variant === "large" ? "h-6 w-6" : "h-5 w-5")} />
      {COMPANY.phone}
    </a>
  );
}
