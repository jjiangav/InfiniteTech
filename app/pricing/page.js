import Link from "next/link";
import { business, legal } from "@/lib/business";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Pricing",
  description:
    "No published rate card — every project is scoped in a conversation first, then priced as a fixed fee agreed in writing. Serving Metro Vancouver.",
  path: "/pricing",
});

const steps = [
  {
    step: "01",
    title: "Tell us what you're trying to do",
    body: "A new site, an AI project, or IT work that needs sorting out. Start with the problem.",
  },
  {
    step: "02",
    title: "We scope it and quote it",
    body: "A fixed price for that specific piece of work — not an hourly rate, not a rate card.",
  },
  {
    step: "03",
    title: "You approve it in writing",
    body: "Nothing starts until the price is confirmed. No surprises on the invoice.",
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-widest text-brand-blue">Pricing</p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        How pricing works
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
        There's no published rate card. Every project is different, so every
        price is worked out after we understand what you actually need.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {steps.map((item) => (
          <div key={item.step} className="rounded-md border border-line bg-white p-5">
            <p className="font-mono text-xs tracking-widest text-grey">{item.step}</p>
            <p className="mt-2 text-base font-bold text-ink">{item.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 space-y-2 rounded-md bg-paper p-5 font-mono text-xs text-grey">
        <p>{legal.priceDisclaimer}</p>
        <p>{legal.privacyNote}</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/quote"
          className="inline-block rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-brand-blue-deep"
        >
          Get a free quote
        </Link>
        <a
          href={`mailto:${business.email}`}
          className="inline-block rounded-md border border-line bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-paper"
        >
          Email {business.email}
        </a>
      </div>
    </div>
  );
}
