import Link from "next/link";
import { business } from "@/lib/business";
import { pageMetadata } from "@/lib/seo";
import Faq from "@/components/Faq";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata = pageMetadata({
  title: "AI for small business",
  description:
    "Not sure if AI can help your business? Tell us what you're dealing with and we'll tell you honestly whether it's solvable. Serving Metro Vancouver.",
  path: "/services/ai",
});

const faqItems = [
  {
    question: "What could an AI project turn into?",
    answer:
      "Maybe something that answers questions for your customers, automates a task you currently do by hand, or something else entirely — that's exactly what the first conversation is for. We won't promise a specific tool before we understand the problem.",
  },
  {
    question: "What if AI isn't a good fit for my business?",
    answer:
      "We'll say so directly. Some things aren't worth building, or aren't something we can build well, and you'll hear that instead of being sold something that doesn't hold up.",
  },
  {
    question: "How is AI work priced?",
    answer:
      "The first conversation is free. If there's a real project, we'll price that specific scope — no published rate card. See the pricing page for how that works.",
  },
];

export default function AiPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <ServiceSchema
        name="AI Solutions for Small Business"
        description="Conversation-first AI tools and automation scoped for small business problems in Metro Vancouver."
      />
      <p className="font-mono text-xs uppercase tracking-widest text-brand-blue">Services</p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        AI for small business
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
        There's no fixed menu here. The offer is a conversation: tell us
        what's slowing you down or what you've been wondering is possible,
        and we'll tell you straight whether it's realistically buildable.
      </p>

      <Faq items={faqItems} />

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
