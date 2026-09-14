import Link from "next/link";
import { business } from "@/lib/business";

export const metadata = {
  title: "Websites for small business",
  description:
    "A website built for your small business — mobile-first, fast, and actually maintained. Serving Metro Vancouver.",
};

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

export default function WebsitesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
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

      <div className="mt-10 rounded-md border border-line bg-white p-6">
        <h2 className="text-lg font-bold text-ink">How it's priced</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          A fixed project fee, agreed after a scoping conversation — not
          hourly, and not off a rate card. See{" "}
          <Link href="/pricing" className="font-medium text-brand-blue hover:text-brand-blue-deep">
            how pricing works
          </Link>{" "}
          for more.
        </p>
      </div>

      <div className="mt-10 space-y-2 rounded-md bg-paper p-5 font-mono text-xs text-grey">
        <p>
          No client sites to show yet — this site is the current example of
          the work. See{" "}
          <Link href="/about" className="font-medium hover:text-ink">
            about
          </Link>{" "}
          for the full picture.
        </p>
      </div>

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
