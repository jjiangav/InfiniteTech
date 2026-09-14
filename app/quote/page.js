import DiscoveryForm from "@/components/DiscoveryForm";

export const metadata = {
  title: "Get a free quote",
  description:
    "Tell me about your website or AI project and I'll get back to you fast, serving Metro Vancouver.",
};

export default function QuotePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
        Get a free quote
      </h1>
      <p className="mt-2 text-ink-soft">
        Tell me what you’re trying to build and I’ll get back to you fast.
      </p>

      <div className="mt-8">
        <DiscoveryForm />
      </div>
    </div>
  );
}
