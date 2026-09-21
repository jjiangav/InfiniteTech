import Image from "next/image";
import Link from "next/link";
import { business, servedCityNames } from "@/lib/business";

const howItWorks = [
  {
    step: "01",
    border: "border-ink",
    title: "Tell me what you're trying to do",
    body: "A new site, something slowing your team down, an idea you're not sure is even possible. Start with the problem, not the solution.",
  },
  {
    step: "02",
    border: "border-brand-blue",
    title: "I tell you straight",
    body: "If it's doable, I'll say so and scope it. If it's not worth doing, or not something I can build, I'll say that too.",
  },
  {
    step: "03",
    border: "border-brand-yellow",
    title: "You approve the price",
    body: "A fixed project fee, agreed before anything starts. No surprises on the invoice.",
  },
];

const serviceCards = [
  {
    href: "/services/websites",
    label: "Websites",
    body: "A site built for a small business, not templated and forgotten. Mobile-first, fast, and actually maintained.",
  },
  {
    href: "/services/ai",
    label: "AI",
    body: "Not sure if AI can help your business? Tell me what's slowing you down and I'll tell you honestly whether it's solvable.",
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
              Websites &amp; AI for small business · {business.region}
            </p>
            <h1 className="text-4xl font-extrabold leading-[0.98] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              A website or an AI project, built by someone who'll actually talk to you first.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
              Sites and AI tools for small businesses in Metro Vancouver.
              Describe what you're trying to do, and you'll get an honest
              answer on whether it's worth doing and what it'd take.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              {serviceCards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="rounded-md border border-line bg-white px-4 py-2.5 text-sm font-medium text-ink hover:border-ink"
                >
                  {card.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 rounded-md bg-brand-blue-deep p-8">
            <p className="text-xl font-bold leading-snug text-white">
              Fastest way in is a short conversation, no commitment.
            </p>
            <Link
              href="/contact"
              className="flex flex-col gap-0.5 rounded-md bg-brand-yellow px-5 py-4 text-center hover:brightness-95"
            >
              <span className="text-sm font-semibold text-ink">Start the conversation</span>
            </Link>
            <a
              href={`mailto:${business.email}`}
              className="rounded-md border border-white/25 px-5 py-3.5 text-center text-sm font-semibold text-white hover:border-brand-yellow hover:text-brand-yellow"
            >
              Or email {business.email}
            </a>
          </div>
        </div>
      </section>

      {/* Hero photo */}
      <section className="px-4 sm:px-8">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md sm:aspect-[21/9]">
          <Image
            src="/images/hero.jpg"
            alt="Hands-on at the workbench"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* How it works */}
      <section className="mt-4 border-y border-line bg-white px-4 py-14 sm:px-8">
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

      {/* Service area */}
      <section className="border-y border-line bg-white px-4 py-14 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex max-w-xl flex-col gap-2">
            <p className="font-mono text-xs uppercase tracking-widest text-grey">Who I work with</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Any small business in Metro Vancouver
            </h2>
            <p className="text-base leading-relaxed text-ink-soft">
              Web and AI work is remote-friendly — it's not limited to how
              far I can drive. Based out of Surrey, working across:
            </p>
          </div>
          <Link href="/contact" className="text-sm font-semibold text-brand-blue hover:text-brand-blue-deep">
            Not sure if you're a fit? Ask anyway →
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
    </div>
  );
}
