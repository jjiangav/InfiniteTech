import { business } from "./business";

// Shared per-page metadata: canonical URL + Open Graph/Twitter cards, built
// from the same title/description every page already needs for <title> and
// meta description. Keeps every route's social preview correct without
// repeating the OG/Twitter boilerplate on every page.
export function pageMetadata({ title, description, path }) {
  const url = path === "/" ? business.domain : `${business.domain}${path}`;
  const socialTitle = `${title} — ${business.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: business.name,
      locale: "en_CA",
      type: "website",
      images: [
        {
          url: "/images/hero.jpg",
          width: 1027,
          height: 731,
          alt: business.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: ["/images/hero.jpg"],
    },
  };
}
