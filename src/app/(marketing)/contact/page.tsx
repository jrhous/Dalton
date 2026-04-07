import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PhoneButton } from "@/components/shared/phone-button";
import { ContactForm } from "@/components/forms/contact-form";
import { FadeIn } from "@/components/animations/fade-in";
import { COMPANY } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact Us",
  description:
    "Schedule HVAC service in Englewood, FL. Request a quote, book an appointment, or call for 24/7 emergency service. Fast, friendly, and reliable.",
  path: "/contact",
});

export default function ContactPage() {

  return (
    <>
      {/* Page Hero */}
      <section className="bg-ocean py-16 lg:py-20">
        <Container>
          <Breadcrumbs />
          <h1 className="text-white">Get in Touch</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Ready to schedule service or have a question? Fill out the form
            below or give us a call — we&apos;re here to help.
          </p>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-cream">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Left: Contact Form (3 cols) */}
            <div className="lg:col-span-3">
              <FadeIn>
                <ContactForm />
              </FadeIn>
            </div>

            {/* Right: Contact Info (2 cols) */}
            <div className="lg:col-span-2 space-y-8">
              <FadeIn delay={0.2}>
                <div className="rounded-2xl bg-white p-6 shadow-card lg:p-8">
                  <h3 className="text-xl font-bold text-ocean">Contact Information</h3>
                  <ul className="mt-5 space-y-4">
                    <li className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                      <div>
                        <p className="font-medium text-ocean">Address</p>
                        <p className="text-ocean/70">{COMPANY.address.full}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Phone className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                      <div>
                        <p className="font-medium text-ocean">Phone</p>
                        <a
                          href={`tel:${COMPANY.phoneRaw}`}
                          className="text-teal-500 font-semibold"
                        >
                          {COMPANY.phone}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Mail className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                      <div>
                        <p className="font-medium text-ocean">Email</p>
                        <a href={`mailto:${COMPANY.email}`} className="text-teal-500">
                          {COMPANY.email}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                      <div>
                        <p className="font-medium text-ocean">Business Hours</p>
                        <div className="text-ocean/70 space-y-0.5">
                          <p>{COMPANY.hours.weekday}</p>
                          <p>{COMPANY.hours.saturday}</p>
                          <p>{COMPANY.hours.sunday}</p>
                          <p className="font-medium text-terracotta-400">
                            {COMPANY.hours.emergency}
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              {/* Prefer to Call? */}
              <FadeIn delay={0.3}>
                <div className="rounded-2xl bg-teal-50 p-6 text-center lg:p-8">
                  <h3 className="text-xl font-bold text-ocean">Prefer to Call?</h3>
                  <p className="mt-2 text-ocean/70">
                    Speak directly with our friendly team. We&apos;re happy to
                    answer questions over the phone.
                  </p>
                  <div className="mt-4">
                    <PhoneButton variant="large" />
                  </div>
                </div>
              </FadeIn>

              {/* Google Maps */}
              <FadeIn delay={0.4}>
                <div className="overflow-hidden rounded-2xl shadow-card">
                  <iframe
                    title="Our location in Englewood, Florida"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56587.47!2d-82.38!3d26.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c37e1e4d5f70ad%3A0xb597c90f1eb4b39c!2sEnglewood%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000000"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
