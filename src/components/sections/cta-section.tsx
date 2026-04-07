"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";
import { GlowButton } from "@/components/animations/glow-button";
import { PhoneButton } from "@/components/shared/phone-button";

export function CtaSection() {
  return (
    <section className="relative bg-teal-500 py-20 lg:py-28 overflow-hidden">
      {/* Wave SVG Divider at Top */}
      <svg
        className="absolute top-0 left-0 w-full h-16 -translate-y-[99%] text-teal-500"
        viewBox="0 0 1440 64"
        fill="currentColor"
        preserveAspectRatio="none"
      >
        <path d="M0,32L80,37.3C160,43,320,53,480,53.3C640,53,800,43,960,37.3C1120,32,1280,32,1360,32L1440,32L1440,64L1360,64C1280,64,1120,64,960,64C800,64,640,64,480,64C320,64,160,64,80,64L0,64Z" />
      </svg>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-white text-balance">
            Ready for Reliable Comfort?
          </h2>
          <p className="mt-4 text-lg text-white/85">
            Whether you need a quick repair or a full system installation, our
            family is here to help yours stay comfortable year-round.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <GlowButton>
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-white px-8 py-4 font-display text-lg font-bold text-teal-600 no-underline transition-all hover:bg-cream hover:shadow-lg"
              >
                Book Online
              </Link>
            </GlowButton>
            <PhoneButton
              variant="outline"
              className="border-white/50 text-white hover:bg-white/15 hover:text-white"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
