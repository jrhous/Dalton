import { Phone, Clock } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function TopBar() {
  return (
    <div className="bg-ocean text-white text-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
          </span>
          <span className="hidden sm:inline">
            <Clock className="mr-1 inline h-3.5 w-3.5" />
            24/7 Emergency Service Available
          </span>
          <span className="sm:hidden">24/7 Emergency</span>
        </div>
        <a
          href={`tel:${COMPANY.phoneRaw}`}
          className="flex items-center gap-1.5 font-display font-bold text-white no-underline hover:text-terracotta-200 transition-colors"
        >
          <Phone className="h-3.5 w-3.5" />
          {COMPANY.phone}
        </a>
      </div>
    </div>
  );
}
