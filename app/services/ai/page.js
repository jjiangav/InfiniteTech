import Link from "next/link";
import { business } from "@/lib/business";

export const metadata = {
  title: "AI for small business",
  description:
    "Not sure if AI can help your business? Tell us what you're dealing with and we'll tell you honestly whether it's solvable. Serving Metro Vancouver.",
};

export default function AiPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-widest text-brand-blue">Services</p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        AI for small business
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
        There's no fixed menu here. The offer is a conversation: tell us
        what's slowing you down or what you've been wondering is possible,
        and we'll tell you straight whether it's realistically buildable.
      </p>

      <div className="mt-10 rounded-md border border-line bg-white p-6">
        <p className="text-base font-bold text-ink">What that conversation might turn into</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          Maybe it's something answering questions for your customers.
          Maybe it's automating a task you currently do by hand. Maybe it's
          something else entirely — that's exactly what the conversation is
          for. We're not going to promise a specific tool before we
          understand the problem.
        </p>
      </div>

      <div className="mt-6 rounded-md border border-line bg-white p-6">
        <h2 className="text-lg font-bold text-ink">If it's not a good fit</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          We'll say so. Some things aren't worth building, or aren't
          something we can build well. You'll hear that directly instead of
          being sold something that doesn't hold up.
        </p>
      </div>

      <div className="mt-6 rounded-md border border-line bg-white p-6">
        <h2 className="text-lg font-bold text-ink">How it's priced</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          The first conversation is free. If there's a real project, we'll
          price that specific scope — no published rate card. See{" "}
          <Link href="/pricing" className="font-medium text-brand-blue hover:text-brand-blue-deep">
            how pricing works
          </Link>
          .
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="inline-block rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-brand-blue-deep"
        >
          Start the conversation
        </Link>
        <a
          href={`mailto:${business.email}`}
          className="inline-block rounded-md border border-line bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-paper"
        >
          Email {business.email}
        </a>
      </div>
    </div>
  );
}
