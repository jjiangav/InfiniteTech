import Link from "next/link";
import { business, servedCityNames, services, legal } from "@/lib/business";

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
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
      <div className="flex flex-col gap-10">
        {/* Hero */}
        <section className="rounded-md border border-line bg-white p-8 sm:p-12">
          <p className="font-mono text-xs uppercase tracking-widest text-grey">
            Computer repair and IT support · {business.region}
          </p>
          <h1 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Got a computer or IT problem? Tell me about it.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink-soft">
            Fill out the quote form or give me a call, and I’ll follow up
            with the right next steps — personal device or business IT.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/quote"
              className="rounded-md bg-brand-blue px-6 py-3 text-center text-sm font-semibold text-white hover:bg-brand-blue-deep"
            >
              Get a free quote
            </Link>
            <a
              href={`tel:${business.phoneHref}`}
              className="rounded-md border border-line px-6 py-3 text-center text-sm font-semibold text-ink-soft hover:bg-paper"
            >
              Call {business.phoneDisplay}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {symptomShortcuts.map((label) => (
              <Link
                key={label}
                href="/quote"
                className="rounded-full border border-line px-3 py-1.5 text-sm text-ink-soft hover:border-brand-blue hover:text-brand-blue-deep"
              >
                {label}
              </Link>
            ))}
          </div>
        </section>

        {/* YouTube trust signal — most valuable proof for a brand-new, one-person business */}
        <section className="rounded-md bg-ink px-8 py-8 sm:px-12">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-widest text-brand-yellow">
                See me actually do this work
              </p>
              <p className="mt-2 max-w-md text-white/90">
                My real laptop repairs on YouTube — teardowns, fixes, and
                troubleshooting, filmed on the bench, start to finish.
              </p>
            </div>
            <a
              href={business.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-md bg-brand-yellow px-6 py-3 text-sm font-semibold text-ink hover:brightness-95"
            >
              Watch on YouTube →
            </a>
          </div>
        </section>

        {/* Pricing */}
        <section className="rounded-md border border-line bg-white p-8 sm:p-12">
          <h2 className="text-xl font-bold text-ink">Common jobs</h2>
          <p className="mt-1 text-sm text-ink-soft">{legal.labourOnly}</p>
          <div className="mt-6 flex flex-col">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex items-baseline justify-between gap-6 border-b border-line py-3 last:border-b-0"
              >
                <span className="text-sm text-ink sm:text-base">{service.name}</span>
                <span className="font-mono text-sm font-medium text-ink sm:text-base">
                  {service.price}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 font-mono text-xs text-grey">
            {legal.diagnosticNote} {legal.minimumJob}
          </p>
          <p className="mt-2 text-xs text-grey">{legal.priceDisclaimer}</p>
        </section>

        {/* How it works */}
        <section>
          <h2 className="text-xl font-bold text-ink">How it works</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div className="rounded-md border border-line bg-white p-5">
              <p className="font-mono text-sm font-medium text-brand-blue-deep">1. Tell me what’s going on</p>
              <p className="mt-2 text-sm text-ink-soft">
                Fill out the quote form with a bit of detail about the problem
                or the support you need.
              </p>
            </div>
            <div className="rounded-md border border-line bg-white p-5">
              <p className="font-mono text-sm font-medium text-brand-blue-deep">2. I follow up</p>
              <p className="mt-2 text-sm text-ink-soft">
                I’ll reach out to talk through the problem and sort out next
                steps.
              </p>
            </div>
            <div className="rounded-md border border-line bg-white p-5">
              <p className="font-mono text-sm font-medium text-brand-blue-deep">3. You approve the price</p>
              <p className="mt-2 text-sm text-ink-soft">
                I confirm the final price in writing before any work starts.
                No surprises on the invoice.
              </p>
            </div>
          </div>
        </section>

        {/* Service area */}
        <section className="rounded-md border border-line bg-white p-8 sm:p-12">
          <h2 className="text-xl font-bold text-ink">Serving Metro Vancouver</h2>
          <p className="mt-2 text-sm text-ink-soft">{servedCityNames.join(", ")}</p>
        </section>

        {/* Business path */}
        <section className="rounded-md bg-ink px-8 py-8 sm:px-12">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-widest text-brand-yellow">
                Small business
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white">
                Run a business? I can help with the IT side too.
              </h2>
              <p className="mt-2 max-w-lg text-sm text-white/80">
                Network and printer setup, new computer rollouts, Microsoft
                365 questions, and general troubleshooting — for businesses
                that don’t need a full-time IT department.
              </p>
            </div>
            <Link
              href="/quote"
              className="shrink-0 rounded-md bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-white/90"
            >
              Get a quote →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
