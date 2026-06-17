"use client";

import { useState, type FormEvent } from "react";

export default function FooterNewsletter() {
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") || "");
    if (!email) return;
    window.location.href = `mailto:hello@klynova.in?subject=${encodeURIComponent(
      "Newsletter signup"
    )}&body=${encodeURIComponent(`Please add me to the Klynova newsletter: ${email}`)}`;
    setDone(true);
  };

  return (
    <form onSubmit={onSubmit} className="footer-newsletter" style={{ display: "flex", gap: 8, marginTop: 6 }}>
      <input name="email" type="email" required placeholder="you@company.com" aria-label="Email address" />
      <button type="submit" className="lg-btn lg-btn-primary" style={{ fontSize: 13.5, padding: "10px 18px" }}>
        {done ? "Thanks!" : "Subscribe"}
      </button>
    </form>
  );
}
