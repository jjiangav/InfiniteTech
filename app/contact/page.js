import Link from "next/link";
import { business, servedCityNames, legal } from "@/lib/business";

export const metadata = {
  title: "Contact",
  description: "Call, email, or send a quote request. Serving Metro Vancouver.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Contact</h1>
      <p className="mt-2 text-slate-600">
        Fastest way to hear back is the quote form — it gets straight to me.
      </p>

      <div className="mt-8 space-y-4">
        <a
          href={`tel:${business.phoneHref}`}
          className="block rounded-lg border border-slate-200 p-4 text-sm font-medium text-slate-900 hover:bg-slate-50"
        >
          Call {business.phoneDisplay}
        </a>
        <a
          href={`mailto:${business.email}`}
          className="block rounded-lg border border-slate-200 p-4 text-sm font-medium text-slate-900 hover:bg-slate-50"
        >
          Email {business.email}
        </a>
        <Link
          href="/quote"
          className="block rounded-lg bg-blue-600 p-4 text-center text-sm font-semibold text-white hover:bg-blue-700"
        >
          Send a quote request
        </Link>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-semibold text-slate-900">Service area</h2>
        <p className="mt-2 text-sm text-slate-600">{servedCityNames.join(", ")}</p>
      </div>

      <p className="mt-8 text-xs text-slate-500">{legal.privacyNote}</p>
    </div>
  );
}
