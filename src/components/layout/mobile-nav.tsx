"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { PhoneButton } from "@/components/shared/phone-button";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-ocean hover:bg-sandy/50 transition-colors"
        aria-label="Open navigation menu"
      >
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-cream-light p-0 flex flex-col">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="flex-1 overflow-y-auto px-6 pt-12 pb-6">
          <nav aria-label="Mobile navigation">
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  {link.children ? (
                    <div>
                      <button
                        onClick={() =>
                          setExpandedItem(
                            expandedItem === link.label ? null : link.label
                          )
                        }
                        className={cn(
                          "flex w-full items-center justify-between rounded-lg px-4 py-3 text-left font-display font-semibold text-ocean transition-colors hover:bg-sandy/50",
                          "min-h-[48px]"
                        )}
                        aria-expanded={expandedItem === link.label}
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            expandedItem === link.label && "rotate-180"
                          )}
                        />
                      </button>
                      {expandedItem === link.label && (
                        <ul className="ml-4 space-y-1 border-l-2 border-sandy pl-3">
                          <li>
                            <Link
                              href={link.href}
                              onClick={() => setOpen(false)}
                              className={cn(
                                "block rounded-lg px-3 py-2.5 text-ocean/80 no-underline hover:bg-sandy/50 hover:text-ocean min-h-[44px]",
                                pathname === link.href && "bg-teal-50 text-teal-500 font-medium"
                              )}
                            >
                              All Services
                            </Link>
                          </li>
                          {link.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={() => setOpen(false)}
                                className={cn(
                                  "block rounded-lg px-3 py-2.5 text-ocean/80 no-underline hover:bg-sandy/50 hover:text-ocean min-h-[44px]",
                                  pathname === child.href && "bg-teal-50 text-teal-500 font-medium"
                                )}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-lg px-4 py-3 font-display font-semibold text-ocean no-underline transition-colors hover:bg-sandy/50 min-h-[48px]",
                        pathname === link.href && "bg-teal-50 text-teal-500"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="border-t border-sandy p-6 space-y-3">
          <PhoneButton variant="large" className="w-full justify-center text-base" />
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block w-full rounded-xl bg-teal-500 px-6 py-3.5 text-center font-display font-bold text-white no-underline hover:bg-teal-600 transition-colors"
          >
            Book Online
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
