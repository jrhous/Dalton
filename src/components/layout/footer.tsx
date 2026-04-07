import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { COMPANY, SERVICES, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ocean text-white/80" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Company */}
          <div>
            <Link href="/" className="no-underline group">
              <span className="font-display text-xl font-extrabold text-white group-hover:text-terracotta-200 transition-colors">
                {COMPANY.name}
              </span>
              <span className="block text-xs font-medium tracking-widest uppercase text-terracotta-300">
                Heating & Cooling
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Serving Englewood and Southwest Florida families with honest,
              reliable HVAC service for over {COMPANY.yearsInBusiness} years.
              Your comfort is our family&apos;s mission.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={COMPANY.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white no-underline hover:bg-terracotta-400 transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a
                href={COMPANY.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white no-underline hover:bg-terracotta-400 transition-colors"
                aria-label="Google Business Profile"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display text-lg font-bold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.filter((l) => !l.children).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 no-underline hover:text-terracotta-200 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="font-display text-lg font-bold text-white">Our Services</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/70 no-underline hover:text-terracotta-200 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/maintenance-plans"
                  className="text-sm text-white/70 no-underline hover:text-terracotta-200 transition-colors"
                >
                  Maintenance Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="font-display text-lg font-bold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-300" />
                <span className="text-sm">{COMPANY.address.full}</span>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="flex items-center gap-3 text-sm text-white/70 no-underline hover:text-terracotta-200 transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-terracotta-300" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 text-sm text-white/70 no-underline hover:text-terracotta-200 transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0 text-terracotta-300" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-300" />
                <div className="text-sm space-y-0.5">
                  <div>{COMPANY.hours.weekday}</div>
                  <div>{COMPANY.hours.saturday}</div>
                  <div>{COMPANY.hours.sunday}</div>
                  <div className="text-terracotta-200 font-medium">
                    {COMPANY.hours.emergency}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-2 px-4 py-6 text-center text-xs text-white/50 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>
            &copy; {currentYear} {COMPANY.name}. All rights reserved. License #
            {COMPANY.licenseNumber}
          </p>
          <p>Serving Englewood, FL and Southwest Florida</p>
        </div>
      </div>
    </footer>
  );
}
