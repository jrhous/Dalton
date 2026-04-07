"use client";

import { Siren } from "lucide-react";
import { SlideIn } from "@/components/animations/slide-in";
import { PhoneButton } from "@/components/shared/phone-button";

export function EmergencyStrip() {
  return (
    <section className="relative bg-terracotta-400 py-10 linen-overlay overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SlideIn direction="left">
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-center sm:text-left">
            <Siren className="h-10 w-10 text-white shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                AC Emergency? We&apos;re Here 24/7
              </h2>
              <p className="mt-1 text-white/85">
                Don&apos;t sweat it — our emergency technicians respond fast, day or night.
              </p>
            </div>
            <PhoneButton
              variant="large"
              className="bg-white text-terracotta-400 hover:bg-cream shrink-0"
            />
          </div>
        </SlideIn>
      </div>
    </section>
  );
}
