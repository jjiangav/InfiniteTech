"use client";

import { useState } from "react";
import { business, servedCityNames, legal } from "@/lib/business";

const WEB3FORMS_ACCESS_KEY = "d4e64292-dfb7-4d59-9553-92c97daa9eaa";

const initialState = {
  serviceType: "personal",
  name: "",
  phone: "",
  email: "",
  city: "",
  isElsewhere: false,
  message: "",
  smsConsent: false,
};

export default function QuoteForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New ${form.serviceType} quote request — ${business.name}`,
      from_name: form.name || "Website quote form",
      service_type: form.serviceType,
      city: form.isElsewhere ? "Somewhere else (unconfirmed)" : form.city,
      message: form.message,
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
          We’ll get back to you shortly. If it’s urgent, call {business.phoneDisplay}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Service type toggle */}
      <fieldset>
        <legend className="text-sm font-semibold text-ink">What do you need help with?</legend>
        <div className="mt-2 grid grid-cols-2 gap-3">
          {[
            { key: "personal", label: "Personal device" },
            { key: "business", label: "Business IT" },
          ].map((opt) => (
            <button
              key={opt.key}
              type="button"
              onClick={() => update("serviceType", opt.key)}
              className={`rounded-md border px-4 py-3 text-sm font-medium ${
                form.serviceType === opt.key
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
        <label className="text-sm font-semibold text-ink" htmlFor="city">City</label>
        <select
          id="city"
          value={form.isElsewhere ? "elsewhere" : form.city}
          onChange={(e) => {
            if (e.target.value === "elsewhere") {
              update("isElsewhere", true);
              update("city", "");
            } else {
              update("isElsewhere", false);
              update("city", e.target.value);
            }
          }}
          className="mt-2 w-full max-w-xs rounded-md border border-line px-3 py-2 text-sm"
        >
          <option value="" disabled>Select a city</option>
          {servedCityNames.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
          <option value="elsewhere">Somewhere else</option>
        </select>
        {form.isElsewhere && (
          <p className="mt-2 text-sm text-brand-blue-deep">
            No problem — we’ll follow up to see how we can help.
          </p>
        )}
      </div>

      <div>
        <label className="text-sm font-semibold text-ink" htmlFor="message">
          What’s going on?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about the problem, or what you need help with."
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="mt-2 w-full rounded-md border border-line px-3 py-2 text-sm"
        />
        <p className="mt-2 text-xs text-grey">
          Got a photo of the screen or error? This box is text only — text it
          to {business.phoneDisplay} instead.
        </p>
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

      <div className="space-y-1 font-mono text-xs text-grey">
        <p>{legal.diagnosticNote}</p>
        <p>{legal.dataLossNote}</p>
        <p>{legal.privacyNote}</p>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong sending this. Please call {business.phoneDisplay} instead.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-brand-blue-deep disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send quote request"}
      </button>
    </form>
  );
}
