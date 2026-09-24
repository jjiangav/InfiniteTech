import { business, servedCityNames } from "@/lib/business";

export const dynamic = "force-static";

export async function GET() {
  const body = `# ${business.name}

> ${business.tagline}. Websites, AI tools, and general IT work — scoped and priced individually after a conversation, not off a rate card.

${business.name} is based in Surrey, BC and serves small businesses across Metro Vancouver, including ${servedCityNames.join(", ")}.

## Pages

- [Home](${business.domain}/): Overview of IT solutions and projects offered.
- [Websites](${business.domain}/services/websites): Custom, mobile-first websites built for small businesses.
- [AI](${business.domain}/services/ai): Conversation-first AI tools and automation for small business problems.
- [Pricing](${business.domain}/pricing): How pricing works — no rate card, fixed price agreed in writing.
- [About](${business.domain}/about): About the founder and the business.
- [Contact](${business.domain}/contact): Ways to get in touch.
- [Get a quote](${business.domain}/quote): Request a free quote.

## Notes

- No published rate card; every project is scoped first, then quoted as a fixed price confirmed in writing before work starts.
- No client portfolio published yet — the business is new.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
