import Link from "next/link";
import { business, servedCityNames, legal } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-base font-semibold text-slate-900">{business.name}</p>
            <p className="mt-2 text-sm text-slate-600">{business.tagline}</p>
            <p className="mt-4 text-sm text-slate-600">
              <a href={`tel:${business.phoneHref}`} className="hover:text-slate-900">
                {business.phoneDisplay}
              </a>
            </p>
            <p className="text-sm text-slate-600">
              <a href={`mailto:${business.email}`} className="hover:text-slate-900">
                {business.email}
              </a>
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Pages</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li><Link href="/quote" className="hover:text-slate-900">Get a free quote</Link></li>
              <li><Link href="/about" className="hover:text-slate-900">About</Link></li>
              <li><Link href="/contact" className="hover:text-slate-900">Contact</Link></li>
              <li>
                <a
                  href={business.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Service area</p>
            <p className="mt-2 text-sm text-slate-600">{servedCityNames.join(", ")}</p>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-xs text-slate-500">
          <p>{legal.priceDisclaimer}</p>
          <p className="mt-2">{legal.privacyNote}</p>
          <p className="mt-4">© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
