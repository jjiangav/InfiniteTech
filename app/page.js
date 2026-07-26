import Link from "next/link";
import { business, coreCities, extendedCities } from "@/lib/business";

const symptomShortcuts = [
  "Won't turn on",
  "Very slow",
  "Cracked screen",
  "Battery or charging",
  "Virus or pop-ups",
  "Lost files",
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
          <h1 className="max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Computer repair and IT support for Metro Vancouver
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-600">
            From a broken laptop to IT help for your business, tell me what’s
            going on and I’ll follow up with the right next steps.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/quote"
              className="rounded-md bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
            >
              Get a free quote
            </Link>
            <a
              href={`tel:${business.phoneHref}`}
              className="rounded-md border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Call {business.phoneDisplay}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {symptomShortcuts.map((label) => (
              <Link
                key={label}
                href="/quote"
                className="rounded-full border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:border-blue-400 hover:text-blue-700"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube trust signal — most valuable proof for a brand-new, one-person business */}
      <section className="border-b border-slate-200 bg-blue-50">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                See me actually do this work
              </p>
              <p className="mt-1 text-slate-700">
                I post real laptop repairs on YouTube — teardowns, fixes, and
                troubleshooting, start to finish.
              </p>
            </div>
            <a
              href={business.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Watch on YouTube →
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <h2 className="text-xl font-semibold text-slate-900">How it works</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-slate-200 p-5">
            <p className="text-sm font-semibold text-blue-700">1. Tell me what’s going on</p>
            <p className="mt-2 text-sm text-slate-600">
              Fill out the quote form with a bit of detail about the problem
              or the support you need.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-5">
            <p className="text-sm font-semibold text-blue-700">2. I follow up</p>
            <p className="mt-2 text-sm text-slate-600">
              I’ll reach out to sort out the details — drop-off, pickup,
              on-site, or remote, whatever makes sense.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-5">
            <p className="text-sm font-semibold text-blue-700">3. You approve the price</p>
            <p className="mt-2 text-sm text-slate-600">
              I confirm the final price in writing before any work starts.
              No surprises on the invoice.
            </p>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
          <h2 className="text-xl font-semibold text-slate-900">Serving Metro Vancouver</h2>
          <p className="mt-2 text-sm text-slate-600">
            <span className="font-medium text-slate-800">Free travel:</span>{" "}
            {coreCities.join(", ")}
          </p>
          <p className="mt-1 text-sm text-slate-600">
            <span className="font-medium text-slate-800">Larger jobs, quoted per job:</span>{" "}
            {extendedCities.join(", ")}
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Somewhere else nearby? Ask on the quote form and I’ll confirm
            coverage.
          </p>
        </div>
      </section>

      {/* Business path */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
                Small business
              </p>
              <h2 className="mt-1 text-2xl font-semibold text-white">
                Run a business? I can help with the IT side too.
              </h2>
              <p className="mt-2 max-w-lg text-sm text-slate-300">
                Network and printer setup, new computer rollouts, Microsoft
                365 questions, and general troubleshooting — for businesses
                that don’t need a full-time IT department.
              </p>
            </div>
            <Link
              href="/quote"
              className="shrink-0 rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              Get a quote →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
