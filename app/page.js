import Link from "next/link";
import { business, servedCityNames } from "@/lib/business";

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
        <section className="overflow-hidden rounded-md border border-line bg-white">
          <div className="p-8 sm:p-12">
            <p className="font-mono text-xs uppercase tracking-widest text-grey">
              Computer repair and IT support · {business.region}
            </p>
            <h1 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Got a computer or IT problem?
            </h1>
            <p className="mt-4 max-w-xl text-lg text-ink-soft">
              Call now and tell us what’s going on — personal device or
              business IT.
            </p>

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
          </div>

          <a
            href={`tel:${business.phoneHref}`}
            className="flex flex-col items-center gap-1 bg-brand-blue px-8 py-8 text-center transition hover:bg-brand-blue-deep sm:flex-row sm:justify-between sm:px-12 sm:text-left"
          >
            <span className="font-mono text-sm font-medium uppercase tracking-widest text-white/80">
              Call now
            </span>
            <span className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              {business.phoneDisplay}
            </span>
          </a>

          <div className="px-8 py-4 text-center sm:px-12 sm:text-left">
            <Link href="/quote" className="text-sm font-medium text-brand-blue hover:text-brand-blue-deep">
              Prefer not to call? Send a quote request →
            </Link>
          </div>
        </section>

        {/* YouTube trust signal — real repair footage as proof of work */}
        <section className="rounded-md bg-ink px-8 py-8 sm:px-12">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-widest text-brand-yellow">
                See the work firsthand
              </p>
              <p className="mt-2 max-w-md text-white/90">
                Real repairs on YouTube — teardowns, fixes, and
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

        {/* How it works */}
        <section>
          <h2 className="text-xl font-bold text-ink">How it works</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div className="rounded-md border border-line bg-white p-5">
              <p className="font-mono text-sm font-medium text-brand-blue-deep">1. Tell us what’s going on</p>
              <p className="mt-2 text-sm text-ink-soft">
                Fill out the quote form with a bit of detail about the problem
                or the support you need.
              </p>
            </div>
            <div className="rounded-md border border-line bg-white p-5">
              <p className="font-mono text-sm font-medium text-brand-blue-deep">2. We follow up</p>
              <p className="mt-2 text-sm text-ink-soft">
                We’ll reach out to talk through the problem and sort out next
                steps.
              </p>
            </div>
            <div className="rounded-md border border-line bg-white p-5">
              <p className="font-mono text-sm font-medium text-brand-blue-deep">3. You approve the price</p>
              <p className="mt-2 text-sm text-ink-soft">
                We confirm the final price in writing before any work starts.
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
                Run a business? We can help with the IT side too.
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
