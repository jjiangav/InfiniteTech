import { business } from "@/lib/business";

export const dynamic = "force-static";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${business.domain}/sitemap.xml`,
  };
}
