import type { Metadata } from "next";
import { COMPANY } from "./constants";

interface CreateMetadataOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export function createMetadata({
  title,
  description,
  path = "",
  image,
}: CreateMetadataOptions): Metadata {
  const url = `https://hvac-englewood.com${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${COMPANY.name} HVAC`,
      description,
      url,
      ...(image && {
        images: [{ url: image, width: 1200, height: 630 }],
      }),
    },
  };
}
