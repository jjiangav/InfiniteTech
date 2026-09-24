import Link from "next/link";
import { business } from "@/lib/business";
import { pageMetadata } from "@/lib/seo";
import Faq from "@/components/Faq";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata = pageMetadata({
  title: "Websites for small business",
  description:
    "A website built for your small business — mobile-first, fast, and actually maintained. Serving Metro Vancouver.",
  path: "/services/websites",
});

const approach = [
  {
    title: "Built for a phone first",
    body: "Most of your customers will find you on a phone. The site is designed and tested that way from the start, not shrunk down after the fact.",
  },
  {
    title: "Fast, on purpose",
    body: "A slow site loses people before they read a word. Speed is a design constraint here, not an afterthought.",
  },
  {
    title: "Actually yours",
    body: "You get a site you can point to, not a rented template. What that looks like technically is worked out in the scoping conversation.",
  },
];

const faqItems = [
  {
    question: "How is a website priced?",
    answer:
      "As a fixed project fee, agreed after a scoping conversation — not hourly, and not off a rate card. See the pricing page for how that works.",
  },
  {
    question: "Do you have example websites to show?",
    answer:
      "Not yet under the Infinite Tech name — this site is the current example of the work. See the about page for the full picture.",
  },
];

export default function WebsitesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <ServiceSchema
        name="Website Design and Development"
        description="Custom, mobile-first websites built for small businesses in Metro Vancouver."
      />
      <p className="font-mono text-xs uppercase tracking-widest text-brand-blue">Services</p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        Websites for small business
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
        A site that actually represents your business — built, not
        templated, for a small business owner who wants something real to
        point customers to.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {approach.map((item) => (
          <div key={item.title} className="rounded-md border border-line bg-white p-5">
            <p className="text-base font-bold text-ink">{item.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
          </div>
        ))}
      </div>

      <Faq items={faqItems} />

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="inline-block rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-brand-blue-deep"
        >
          Start the conversation
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
