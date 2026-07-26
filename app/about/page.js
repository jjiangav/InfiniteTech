import Link from "next/link";
import { business, coreCities, extendedCities, legal } from "@/lib/business";

export const metadata = {
  title: "About",
  description: "Computer repair and IT support for Metro Vancouver, run by Jimmy Jiang.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        About {business.name}
      </h1>

      <div className="mt-6 space-y-4 text-slate-600">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Meet the founder
          </p>
          <p className="mt-1 text-lg font-medium text-slate-900">Jimmy</p>
        </div>
        <p>
          Five years of experience working in corporate IT. Experienced with
          IT support, computer repair, websites, and AI.
        </p>
        <p>
          Mostly Windows and Mac laptops: slowdowns, virus removal, OS
          reinstalls, new computer setups, SSD and RAM upgrades, batteries,
          screens, and general “it won’t turn on” diagnosis. I also help
          small businesses with network and printer setup, new computer
          rollouts, and Microsoft 365 questions. There’s no storefront — I
          travel to you, or arrange pickup and return.
        </p>
        <p>No question is too small. Ask without worry.</p>
        <p>
          Outside of work there are a lot of hobbies: flight training as a
          student pilot,{" "}
          <a
            href={business.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-700 hover:text-blue-800"
          >
            laptop repair videos on YouTube
          </a>
          , and building and taking things apart.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-semibold text-slate-900">Service area</h2>
        <p className="mt-2 text-sm text-slate-600">
          <span className="font-medium text-slate-800">Free travel:</span>{" "}
          {coreCities.join(", ")}
        </p>
        <p className="mt-1 text-sm text-slate-600">
          <span className="font-medium text-slate-800">Larger jobs, quoted per job:</span>{" "}
          {extendedCities.join(", ")}
        </p>
      </div>

      <div className="mt-10 space-y-2 rounded-lg bg-slate-50 p-5 text-sm text-slate-600">
        <p>{legal.priceDisclaimer}</p>
        <p>{legal.dataLossNote}</p>
      </div>

      <div className="mt-8">
        <Link
          href="/quote"
          className="inline-block rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Get a free quote
        </Link>
      </div>
    </div>
  );
}
