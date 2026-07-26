import Link from "next/link";
import Logo from "@/components/Logo";
import { business, servedCityNames, legal } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <Logo markSize={26} />
            <p className="mt-2 text-sm text-ink-soft">{business.tagline}</p>
            <p className="mt-4 text-sm text-ink-soft">
              <a href={`tel:${business.phoneHref}`} className="hover:text-ink">
                {business.phoneDisplay}
              </a>
            </p>
            <p className="text-sm text-ink-soft">
              <a href={`mailto:${business.email}`} className="hover:text-ink">
                {business.email}
              </a>
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">Pages</p>
            <ul className="mt-2 space-y-1 text-sm text-ink-soft">
              <li><Link href="/quote" className="hover:text-ink">Get a free quote</Link></li>
              <li><Link href="/about" className="hover:text-ink">About</Link></li>
              <li><Link href="/contact" className="hover:text-ink">Contact</Link></li>
              <li>
                <a
                  href={business.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">Service area</p>
            <p className="mt-2 text-sm text-ink-soft">{servedCityNames.join(", ")}</p>
          </div>
        </div>

        <div className="mt-8 border-t border-line pt-6 font-mono text-xs text-grey">
          <p>{legal.priceDisclaimer}</p>
          <p className="mt-2">{legal.privacyNote}</p>
          <p className="mt-4">© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
