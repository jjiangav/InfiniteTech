import Link from "next/link";
import { business } from "@/lib/business";

export default function StickyCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-line bg-white/95 backdrop-blur md:hidden">
      <a
        href={`tel:${business.phoneHref}`}
        className="flex flex-1 items-center justify-center gap-2 border-r border-line py-3 text-sm font-medium text-ink-soft"
      >
        Call {business.phoneDisplay}
      </a>
      <Link
        href="/quote"
        className="flex flex-1 items-center justify-center bg-brand-blue py-3 text-sm font-semibold text-white"
      >
        Get a free quote
      </Link>
    </div>
  );
}
