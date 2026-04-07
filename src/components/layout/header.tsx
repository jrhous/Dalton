"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex flex-col no-underline group">
          <span className="font-display text-xl font-extrabold tracking-tight text-ocean group-hover:text-teal-500 transition-colors sm:text-2xl">
            {COMPANY.name}
          </span>
          <span className="text-xs font-body font-medium tracking-widest uppercase text-terracotta-400">
            Heating & Cooling
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 rounded-lg px-3 py-2 font-body font-medium text-ocean/80 transition-colors hover:bg-sandy/50 hover:text-ocean",
                    pathname.startsWith("/services") && "text-teal-500"
                  )}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      dropdownOpen && "rotate-180"
                    )}
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 top-full pt-1">
                    <div className="w-64 rounded-xl bg-white p-2 shadow-elevated border border-sandy/50">
                      <Link
                        href={link.href}
                        className={cn(
                          "block rounded-lg px-3 py-2.5 text-sm font-medium text-ocean no-underline hover:bg-teal-50 hover:text-teal-500 transition-colors",
                          pathname === link.href && "bg-teal-50 text-teal-500"
                        )}
                      >
                        All Services
                      </Link>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block rounded-lg px-3 py-2.5 text-sm text-ocean/80 no-underline hover:bg-teal-50 hover:text-teal-500 transition-colors",
                            pathname === child.href && "bg-teal-50 text-teal-500 font-medium"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 font-body font-medium text-ocean/80 no-underline transition-colors hover:bg-sandy/50 hover:text-ocean",
                  pathname === link.href && "text-teal-500"
                )}
                {...(pathname === link.href ? { "aria-current": "page" as const } : {})}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA + Mobile Menu */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden lg:inline-flex rounded-xl bg-terracotta-400 px-5 py-2.5 font-display font-bold text-white no-underline transition-all hover:bg-terracotta-500 hover:shadow-warm"
          >
            Book Online
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
