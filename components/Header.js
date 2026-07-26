import Link from "next/link";
import { business } from "@/lib/business";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
          {business.name}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${business.phoneHref}`}
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            {business.phoneDisplay}
          </a>
          <Link
            href="/quote"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Get a free quote
          </Link>
        </div>

        <Link
          href="/quote"
          className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white md:hidden"
        >
          Free quote
        </Link>
      </div>
    </header>
  );
}
