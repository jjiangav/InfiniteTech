import Link from "next/link";
import { business, servedCityNames, legal } from "@/lib/business";

export const metadata = {
  title: "Contact",
  description: "Call, email, or send a quote request. Serving Metro Vancouver.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">Contact</h1>
      <p className="mt-2 text-ink-soft">
        Fastest way to hear back is the quote form — it gets straight to me.
      </p>

      <div className="mt-8 space-y-4">
        <a
          href={`tel:${business.phoneHref}`}
          className="block rounded-md border border-line bg-white p-4 text-sm font-medium text-ink hover:bg-paper"
        >
          Call {business.phoneDisplay}
        </a>
        <a
          href={`mailto:${business.email}`}
          className="block rounded-md border border-line bg-white p-4 text-sm font-medium text-ink hover:bg-paper"
        >
          Email {business.email}
        </a>
        <Link
          href="/quote"
          className="block rounded-md bg-brand-blue p-4 text-center text-sm font-semibold text-white hover:bg-brand-blue-deep"
        >
          Send a quote request
        </Link>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-bold text-ink">Service area</h2>
        <p className="mt-2 text-sm text-ink-soft">{servedCityNames.join(", ")}</p>
      </div>

      <p className="mt-8 font-mono text-xs text-grey">{legal.privacyNote}</p>
    </div>
  );
}
