import Image from "next/image";
import Link from "next/link";
import { business, servedCityNames } from "@/lib/business";

const symptomShortcuts = [
  "Won't turn on",
  "Very slow",
  "Cracked screen",
  "Battery or charging",
  "Overheating",
  "Virus or pop-ups",
  "Liquid spill",
  "Lost files",
  "Something else",
];

const howItWorks = [
  {
    step: "01",
    border: "border-ink",
    title: "Tell us the symptom",
    body: "Call, or send the form. A photo of the screen tells us more than a paragraph does.",
  },
  {
    step: "02",
    border: "border-brand-blue",
    title: "We follow up",
    body: "We’ll reach out to talk through the problem and sort out next steps.",
  },
  {
    step: "03",
    border: "border-brand-yellow",
    title: "You approve the price",
    body: "Confirmed in writing before anything starts. No surprises on the invoice.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl">
      {/* Hero */}
      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
          <div className="flex flex-col gap-6">
            <p className="font-mono text-xs uppercase tracking-widest text-brand-blue">
              Computer repair &amp; IT support · {business.region}
            </p>
            <h1 className="text-4xl font-extrabold leading-[0.98] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Computer broken? Tell us what it’s doing.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
              Won’t boot, blue screens, cracked panel, or just crawling — we’ll
              tell you what it needs and what it’ll cost.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {symptomShortcuts.map((label) => (
                <Link
                  key={label}
                  href="/quote"
                  className={`rounded-md border border-line bg-white px-4 py-2.5 text-sm font-medium hover:border-ink ${
                    label === "Something else" ? "text-grey hover:text-ink" : "text-ink"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 rounded-md bg-brand-blue-deep p-8">
            <p className="text-xl font-bold leading-snug text-white">
              Fastest way to an answer is a call or a text.
            </p>
            <a
              href={`tel:${business.phoneHref}`}
              className="flex flex-col gap-0.5 rounded-md bg-brand-yellow px-5 py-4 text-center hover:brightness-95"
            >
              <span className="text-sm font-semibold text-ink">Call or text</span>
              <span className="font-mono text-2xl font-medium tracking-tight text-ink">
                {business.phoneDisplay}
              </span>
            </a>
            <Link
              href="/quote"
              className="rounded-md border border-white/25 px-5 py-3.5 text-center text-sm font-semibold text-white hover:border-brand-yellow hover:text-brand-yellow"
            >
              Send a quote request instead
            </Link>
            <div className="flex flex-col gap-2.5 border-t border-white/15 pt-4">
              <div className="flex gap-2.5 text-sm leading-snug text-white/80">
                <span className="text-brand-yellow">—</span>
                <span>Diagnostic comes off the repair</span>
              </div>
              <div className="flex gap-2.5 text-sm leading-snug text-white/80">
                <span className="text-brand-yellow">—</span>
                <span>Price in writing before we start</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo band */}
      <div className="px-4 sm:px-8">
        <div className="relative h-64 overflow-hidden rounded-md sm:h-80 lg:h-96">
          <Image
            src="/images/dellxps1.jpeg"
            alt="Laptop set up and running after repair"
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* How it works */}
      <section className="mt-14 border-y border-line bg-white px-4 py-14 sm:px-8">
        <div className="flex flex-col gap-2">
          <p className="font-mono text-xs uppercase tracking-widest text-grey">How it works</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Three steps, no mystery
          </h2>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {howItWorks.map((item) => (
            <div key={item.step} className={`flex flex-col gap-2.5 border-t-[3px] pt-5 ${item.border}`}>
              <p className="font-mono text-xs tracking-widest text-grey">{item.step}</p>
              <p className="text-xl font-bold tracking-tight text-ink">{item.title}</p>
              <p className="text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* YouTube trust signal */}
      <section className="px-4 py-14 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2">
          <div className="grid grid-cols-2 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="flex aspect-video items-center justify-center rounded-md"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, #d9d7d0 0px, #d9d7d0 10px, #cfcdc6 10px, #cfcdc6 20px)",
                }}
              >
                <span className="font-mono text-xs text-ink-soft">video still</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-widest text-grey">
              See the work firsthand
            </p>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
              Real repairs, filmed start to finish.
            </h2>
            <p className="max-w-md text-base leading-relaxed text-ink-soft">
              Teardowns, screen swaps and troubleshooting on the bench. Watch a
              couple and decide for yourself.
            </p>
            <a
              href={business.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 text-sm font-semibold text-brand-blue hover:text-brand-blue-deep"
            >
              Watch on YouTube →
            </a>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="border-y border-line bg-white px-4 py-14 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex max-w-xl flex-col gap-2">
            <p className="font-mono text-xs uppercase tracking-widest text-grey">Service area</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Ten cities across Metro Vancouver
            </h2>
            <p className="text-base leading-relaxed text-ink-soft">
              Ten cities, one phone call away.
            </p>
          </div>
          <Link href="/quote" className="text-sm font-semibold text-brand-blue hover:text-brand-blue-deep">
            Not on the list? Ask anyway →
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-2 border-t border-line pt-6 sm:grid-cols-2">
          {servedCityNames.map((city) => (
            <p key={city} className="border-b border-line py-2 text-lg font-medium text-ink last:sm:border-b-0">
              {city}
            </p>
          ))}
        </div>
      </section>

      {/* Business path */}
      <section className="px-4 py-14 sm:px-8">
        <div className="flex flex-col gap-6 rounded-md bg-brand-blue p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div className="flex max-w-lg flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-widest text-brand-yellow">
              For small business
            </p>
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
              Run a business? We handle the IT side too.
            </h2>
            <p className="text-sm leading-relaxed text-white/85">
              Network and printer setup, new computer rollouts, Microsoft 365
              questions, and general troubleshooting — for businesses that
              don’t need a full-time IT department.
            </p>
          </div>
          <Link
            href="/quote"
            className="shrink-0 rounded-md bg-white px-6 py-3 text-center text-sm font-semibold text-ink hover:bg-brand-yellow"
          >
            Get a quote →
          </Link>
        </div>
      </section>
    </div>
  );
}
