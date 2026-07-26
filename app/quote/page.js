import QuoteForm from "@/components/QuoteForm";

export const metadata = {
  title: "Get a free quote",
  description:
    "Tell me what's going on and I'll get back to you fast. Personal device or business IT, serving Metro Vancouver.",
};

export default function QuotePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        Get a free quote
      </h1>
      <p className="mt-2 text-slate-600">
        Tell me what’s going on and I’ll get back to you fast.
      </p>

      <div className="mt-8">
        <QuoteForm />
      </div>
    </div>
  );
}
