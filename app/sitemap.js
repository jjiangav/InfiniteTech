import { business } from "@/lib/business";

export const dynamic = "force-static";

export default function sitemap() {
  const routes = ["", "/quote", "/about", "/contact"];

  return routes.map((route) => ({
    url: `${business.domain}${route}`,
    lastModified: new Date(),
  }));
}
