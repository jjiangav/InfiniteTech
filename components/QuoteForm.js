"use client";

import { useState } from "react";
import { business, servedCityNames, legal } from "@/lib/business";

// TODO: replace with a real Web3Forms access key (free, no account, from
// web3forms.com) before launch. Submissions will fail silently until then.
const WEB3FORMS_ACCESS_KEY = "REPLACE_WITH_WEB3FORMS_ACCESS_KEY";

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
      <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
        <p className="text-lg font-semibold text-green-800">Got it — thanks.</p>
        <p className="mt-2 text-sm text-green-700">
          I’ll get back to you shortly. If it’s urgent, call {business.phoneDisplay}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Service type toggle */}
      <fieldset>
        <legend className="text-sm font-semibold text-slate-900">What do you need help with?</legend>
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
                  ? "border-blue-600 bg-blue-50 text-blue-800"
                  : "border-slate-300 text-slate-700 hover:bg-slate-50"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="text-sm font-semibold text-slate-900" htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-900" htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-900" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-900" htmlFor="city">City</label>
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
          className="mt-2 w-full max-w-xs rounded-md border border-slate-300 px-3 py-2 text-sm"
        >
          <option value="" disabled>Select a city</option>
          {servedCityNames.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
          <option value="elsewhere">Somewhere else</option>
        </select>
        {form.isElsewhere && (
          <p className="mt-2 text-sm text-amber-700">
            I’ll confirm coverage before booking anything.
          </p>
        )}
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-900" htmlFor="message">
          What’s going on?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell me about the problem, or what you need help with."
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
        />
      </div>

      <label className="flex items-start gap-2 text-sm text-slate-600">
        <input
          type="checkbox"
          checked={form.smsConsent}
          onChange={(e) => update("smsConsent", e.target.checked)}
          className="mt-0.5"
        />
        It’s okay to text me about this.
      </label>

      <div className="space-y-1 text-xs text-slate-500">
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
        className="w-full rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send my quote request"}
      </button>
    </form>
  );
}
