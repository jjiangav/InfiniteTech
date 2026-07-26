import Link from "next/link";
import { business, servedCityNames, legal } from "@/lib/business";

export const metadata = {
  title: "About",
  description: "Computer repair and IT support for Metro Vancouver, run by Jimmy Jiang.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
        About {business.name}
      </h1>

      <div className="mt-6 space-y-4 text-ink-soft">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-grey">
            Meet the founder
          </p>
          <p className="mt-1 text-lg font-bold text-ink">{business.ownerName}</p>
        </div>
        <p>
          Five years of experience working in corporate IT. Experienced with
          IT Support, computer repair, websites, and AI.
        </p>
        <p>
          I’m building this business and I’ll work hard for your
          recommendation.
        </p>
        <p>
          Outside of work there are a lot of hobbies. Flight training as a
          student pilot,{" "}
          <a
            href={business.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-blue hover:text-brand-blue-deep"
          >
            laptop repair videos on YouTube
          </a>
          , building and taking things apart.
        </p>
      </div>

      <div className="mt-10 rounded-md border border-line bg-white p-6">
        <h2 className="text-lg font-bold text-ink">Service area</h2>
        <p className="mt-2 text-sm text-ink-soft">{servedCityNames.join(", ")}</p>
      </div>

      <div className="mt-10 space-y-2 rounded-md bg-paper p-5 font-mono text-xs text-grey">
        <p>{legal.priceDisclaimer}</p>
        <p>{legal.dataLossNote}</p>
      </div>

      <div className="mt-8">
        <Link
          href="/quote"
          className="inline-block rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-brand-blue-deep"
        >
          Get a free quote
        </Link>
      </div>
    </div>
  );
}
