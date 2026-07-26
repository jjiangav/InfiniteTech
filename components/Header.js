import Link from "next/link";
import Logo from "@/components/Logo";
import { business } from "@/lib/business";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b border-line bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${business.phoneHref}`}
            className="text-sm font-medium text-ink-soft hover:text-ink"
          >
            {business.phoneDisplay}
          </a>
          <Link
            href="/quote"
            className="rounded-md bg-brand-blue px-4 py-2 text-sm font-semibold text-white hover:bg-brand-blue-deep"
          >
            Get a free quote
          </Link>
        </div>

        <Link
          href="/quote"
          className="rounded-md bg-brand-blue px-3 py-2 text-sm font-semibold text-white md:hidden"
        >
          Free quote
        </Link>
      </div>
    </header>
  );
}
