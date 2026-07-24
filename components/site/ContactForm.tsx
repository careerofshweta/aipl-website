"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";

type Form = {
  name: string;
  phone: string;
  email: string;
  propertyType: string;
  budget: string;
};

const propertyTypes = [
  "Residential Plot",
  "Villa",
  "Apartment",
  "Commercial Space",
  "Office",
  "Retail Shop",
];
const budgets = ["Under ₹50 Lakhs", "₹50L–₹1 Cr", "₹1–2 Cr", "₹2–5 Cr", "Above ₹5 Cr"];

export function ContactForm() {
  const [form, setForm] = useState<Form>({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    budget: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = <K extends keyof Form>(k: K, v: Form[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof Form, string>> = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Please enter your name";
    if (!/^[0-9+\-\s()]{7,15}$/.test(form.phone.trim())) e.phone = "Enter a valid phone number";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = "Enter a valid email";
    if (!form.propertyType) e.propertyType = "Select a property type";
    if (!form.budget) e.budget = "Select a budget";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSuccess(true);
    setForm({ name: "", phone: "", email: "", propertyType: "", budget: "" });
  };

  const field =
    "w-full rounded-lg border border-border/70 bg-surface-2/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/75 outline-none transition-all duration-300 focus:border-gold focus:bg-surface-2/80 focus:ring-2 focus:ring-gold/30";

  return (
    <div className="relative">
      <form onSubmit={onSubmit} className="grid gap-4">
        <div>
          <input
            className={field}
            placeholder="Full Name *"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            maxLength={80}
          />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <input
              className={field}
              placeholder="Phone Number *"
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              maxLength={20}
            />
            {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
          </div>
          <div>
            <input
              className={field}
              placeholder="Email (optional)"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              maxLength={120}
            />
            {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
          </div>
        </div>
        <div>
          <select
            className={field}
            value={form.propertyType}
            onChange={(e) => set("propertyType", e.target.value)}
          >
            <option value="">Property Type *</option>
            {propertyTypes.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          {errors.propertyType && (
            <p className="mt-1 text-xs text-destructive">{errors.propertyType}</p>
          )}
        </div>
        <div>
          <select
            className={field}
            value={form.budget}
            onChange={(e) => set("budget", e.target.value)}
          >
            <option value="">Investment Budget *</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          {errors.budget && <p className="mt-1 text-xs text-destructive">{errors.budget}</p>}
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-full gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] disabled:opacity-70"
        >
          {submitting ? (
            <>
              <Loader2 className="animate-spin" size={16} /> Sending…
            </>
          ) : (
            "Request a Callback"
          )}
        </button>
      </form>

      {success && (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-background/80 backdrop-blur-md"
          onClick={() => setSuccess(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="glass mx-4 max-w-md rounded-2xl p-8 text-center glow-gold"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full gradient-gold text-primary-foreground">
              <CheckCircle2 size={28} />
            </div>
            <h3 className="mt-5 font-serif text-2xl">Thank You!</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Our advisory team will call you back shortly with curated options at AIPL DreamCity
              Ludhiana.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="mt-6 rounded-full gradient-gold px-6 py-2 text-sm font-semibold text-primary-foreground"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
