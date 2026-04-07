"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null;

  const crumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return { href, label };
  });

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-1.5 text-sm text-ocean/60">
        <li>
          <Link href="/" className="hover:text-teal-500 no-underline">
            Home
          </Link>
        </li>
        {crumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5" />
            {index === crumbs.length - 1 ? (
              <span className="font-medium text-ocean" aria-current="page">
                {crumb.label}
              </span>
            ) : (
              <Link href={crumb.href} className="hover:text-teal-500 no-underline">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
