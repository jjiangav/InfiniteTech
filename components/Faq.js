// Renders a visible FAQ list and matching FAQPage JSON-LD from the same
// data, so structured data never drifts from what's actually on the page.
export default function Faq({ items }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <div className="mt-6 space-y-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      {items.map(({ question, answer }) => (
        <div key={question} className="rounded-md border border-line bg-white p-6">
          <h2 className="text-lg font-bold text-ink">{question}</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{answer}</p>
        </div>
      ))}
    </div>
  );
}
