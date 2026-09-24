import { business, servedCityNames } from "@/lib/business";

export default function ServiceSchema({ name, description }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name: `${name} — ${business.name}`,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: business.name,
      email: business.email,
      url: business.domain,
    },
    areaServed: servedCityNames.map((city) => ({ "@type": "City", name: city })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
