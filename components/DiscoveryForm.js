"use client";

import { useState } from "react";
import { business, legal, web3formsAccessKey } from "@/lib/business";

const initialState = {
  interest: "not-sure",
  name: "",
  phone: "",
  email: "",
  message: "",
  budget: "",
  smsConsent: false,
};

export default function DiscoveryForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    const payload = {
      access_key: web3formsAccessKey,
      subject: `New discovery call request (${form.interest}) — ${business.name}`,
      from_name: form.name || "Website discovery form",
      interest: form.interest,
      message: form.message,
      budget: form.budget,
      name: form.name,
      phone: form.phone,
      email: form.email,
      sms_consent: form.smsConsent ? "yes" : "no",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-md border border-line bg-white p-6 text-center">
        <p className="text-lg font-bold text-ink">Got it — thanks.</p>
        <p className="mt-2 text-sm text-ink-soft">
          We’ll read this over and get back to you to set up a time to talk.
          If it’s urgent, email {business.email}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <fieldset>
        <legend className="text-sm font-semibold text-ink">What are you interested in?</legend>
        <div className="mt-2 grid grid-cols-3 gap-3">
          {[
            { key: "website", label: "A website" },
            { key: "ai", label: "AI" },
            { key: "not-sure", label: "Not sure yet" },
          ].map((opt) => (
            <button
              key={opt.key}
              type="button"
              onClick={() => update("interest", opt.key)}
              className={`rounded-md border px-4 py-3 text-sm font-medium ${
                form.interest === opt.key
                  ? "border-brand-blue bg-brand-blue/10 text-brand-blue-deep"
                  : "border-line text-ink-soft hover:bg-paper"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="text-sm font-semibold text-ink" htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="mt-2 w-full rounded-md border border-line px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-ink" htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="mt-2 w-full rounded-md border border-line px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-ink" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="mt-2 w-full rounded-md border border-line px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-ink" htmlFor="message">
          What are you trying to build or fix?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us what's going on — a new site, something slowing your team down, an idea you're not sure is possible."
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="mt-2 w-full rounded-md border border-line px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-ink" htmlFor="budget">
          Rough budget in mind, if you have one <span className="font-normal text-grey">(optional)</span>
        </label>
        <input
          id="budget"
          name="budget"
          type="text"
          placeholder="No pressure — just helps us understand fit."
          value={form.budget}
          onChange={(e) => update("budget", e.target.value)}
          className="mt-2 w-full rounded-md border border-line px-3 py-2 text-sm"
        />
      </div>

      <label className="flex items-start gap-2 text-sm text-ink-soft">
        <input
          type="checkbox"
          checked={form.smsConsent}
          onChange={(e) => update("smsConsent", e.target.checked)}
          className="mt-0.5"
        />
        It’s okay to follow up by text.
      </label>

      <p className="font-mono text-xs text-grey">{legal.privacyNote}</p>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong sending this. Please email {business.email} instead.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-brand-blue-deep disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Start the conversation"}
      </button>
    </form>
  );
}
