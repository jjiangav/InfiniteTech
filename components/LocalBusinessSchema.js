import { business, servedCityNames } from "@/lib/business";

// Approximate clock times for the schema's openingHoursSpecification.
// The visible copy on the site always uses the plain-language
// `business.availability` ("evenings and weekends"); these times exist
// only because structured data requires opens/closes values.
const openingHoursSpecification = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "17:00",
    closes: "21:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Saturday", "Sunday"],
    opens: "10:00",
    closes: "18:00",
  },
];

export default function LocalBusinessSchema({ description }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description:
      description ??
      "Mobile computer repair and IT support serving Metro Vancouver, BC.",
    telephone: business.phoneDisplay,
    email: business.email,
    url: business.domain,
    areaServed: servedCityNames.map((city) => ({
      "@type": "City",
      name: city,
    })),
    priceRange: "$$",
    openingHoursSpecification,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
