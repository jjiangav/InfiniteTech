import { business } from "@/lib/business";

export const dynamic = "force-static";

export default function sitemap() {
  const routes = [
    "",
    "/quote",
    "/about",
    "/contact",
    "/pricing",
    "/services/websites",
    "/services/ai",
  ];

  return routes.map((route) => ({
    url: `${business.domain}${route}`,
    lastModified: new Date(),
  }));
}
