import type { Metadata } from "next";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteUrl =
  configuredSiteUrl && configuredSiteUrl.length > 0
    ? configuredSiteUrl.replace(/\/+$/, "")
    : "https://www.mimimagusin.com";

export const siteName = "Mimi Magusin";
export const defaultOgImage = "/mimi-magusin.jpg";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
  image = defaultOgImage,
}: MetadataInput): Metadata {
  const canonicalUrl = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: "nl_NL",
      url: canonicalUrl,
      siteName,
      title,
      description,
      images: [
        {
          url: absoluteUrl(image),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)],
    },
  };
}
