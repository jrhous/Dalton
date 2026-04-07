import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hvac-englewood.com"),
  title: {
    default: "[Company Name] | Trusted HVAC Service in Englewood, FL",
    template: "%s | [Company Name] HVAC",
  },
  description:
    "Englewood, Florida's trusted HVAC company. Residential & commercial AC repair, installation, maintenance, and indoor air quality services. 24/7 emergency service. Call today!",
  keywords: [
    "HVAC Englewood FL",
    "AC repair Englewood Florida",
    "air conditioning Englewood",
    "heating repair Englewood FL",
    "HVAC contractor Englewood",
    "AC installation Englewood Florida",
    "indoor air quality Englewood",
    "emergency AC repair Englewood",
    "HVAC maintenance plans Florida",
    "commercial HVAC Englewood",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "[Company Name] HVAC",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
