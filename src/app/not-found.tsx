import Link from "next/link";
import { Home, Phone, ArrowLeft } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-extrabold text-teal-200">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-ocean">Page Not Found</h2>
      <p className="mt-3 max-w-md text-ocean/70">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. Let&apos;s
        get you back to comfort.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-6 py-3 font-display font-bold text-white no-underline hover:bg-teal-600 transition-colors"
        >
          <Home className="h-5 w-5" />
          Go Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-terracotta-400 px-6 py-3 font-display font-bold text-white no-underline hover:bg-terracotta-500 transition-colors"
        >
          <Phone className="h-5 w-5" />
          Contact Us
        </Link>
      </div>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-1 text-sm text-ocean/60 hover:text-teal-500"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to {COMPANY.name}
      </Link>
    </div>
  );
}
