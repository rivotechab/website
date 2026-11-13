"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { SERVICES, SITE } from "@/lib/site";

type Tab = "partners" | "careers";
type Status = { kind: "idle" } | { kind: "sending" } | { kind: "success" } | { kind: "error"; message: string };

const MAX_CV_BYTES = 5 * 1024 * 1024;

function tabFromHash(hash: string): Tab {
  return hash === "#careers" ? "careers" : "partners";
}

async function submit(form: HTMLFormElement, type: Tab): Promise<Status> {
  const data = new FormData(form);
  if (String(data.get("website") ?? "").trim() !== "") return { kind: "success" };

  if (type === "careers") {
    const cv = data.get("cv");
    if (!(cv instanceof File) || cv.size === 0) return { kind: "error", message: "Please attach your CV as a PDF." };
    const isPdf = cv.type === "application/pdf" || cv.name.toLowerCase().endsWith(".pdf");
    if (!isPdf) return { kind: "error", message: "Your CV needs to be a PDF file." };
    if (cv.size > MAX_CV_BYTES) return { kind: "error", message: "Your CV is larger than 5 MB. Please send a smaller PDF." };
  }

  const fallback = type === "careers" ? SITE.emails.careers : SITE.emails.partners;
  if (!SITE.contactEndpoint) {
    return { kind: "error", message: `The form isn't connected yet. Please email us at ${fallback}.` };
  }

  data.set("formType", type);
  try {
    const res = await fetch(SITE.contactEndpoint, { method: "POST", body: data });
    if (!res.ok) throw new Error(String(res.status));
    return { kind: "success" };
  } catch {
    return {
      kind: "error",
      message: `We couldn't send your message. Please try again, or email us at ${fallback}.`,
    };
  }
}

function StatusMessage({ status, successText }: { status: Status; successText: string }) {
  if (status.kind === "error") {
    return (
      <p className="form-status error" role="alert">
        {status.message}
      </p>
    );
  }
  if (status.kind === "success") {
    return (
      <p className="form-status success" role="status">
        {successText}
      </p>
    );
  }
  return null;
}

function Honeypot({ id }: { id: string }) {
  return (
    <div className="hp" aria-hidden="true">
      <label htmlFor={id}>Leave this field empty</label>
      <input id={id} name="website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

function PrivacyLine() {
  return (
    <p>
      We handle what you send as described in our <Link href="/privacy/">privacy notice</Link>.
    </p>
  );
}

function PartnersForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ kind: "sending" });
    const result = await submit(form, "partners");
    setStatus(result);
    if (result.kind === "success") form.reset();
  }

  return (
    <form className="form-panel" onSubmit={onSubmit}>
      <p className="form-intro">For companies that need consultants, and for brokers and partner consultancies.</p>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="p-name">Name</label>
          <input id="p-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="p-company">Company</label>
          <input id="p-company" name="company" type="text" autoComplete="organization" required />
        </div>
        <div className="field">
          <label htmlFor="p-email">Email</label>
          <input id="p-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="p-phone">
            Phone <span className="optional">(optional)</span>
          </label>
          <input id="p-phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="field field-wide">
          <label htmlFor="p-roles">Role(s) you need</label>
          <input id="p-roles" name="roles" type="text" placeholder="For example: senior backend developer, Java" required />
        </div>
        <div className="field">
          <label htmlFor="p-start">
            Start date <span className="optional">(optional)</span>
          </label>
          <input id="p-start" name="start" type="text" placeholder="For example: January 2027" />
        </div>
        <div className="field">
          <label htmlFor="p-duration">
            Duration <span className="optional">(optional)</span>
          </label>
          <input id="p-duration" name="duration" type="text" placeholder="For example: 6 months" />
        </div>
        <div className="field field-wide">
          <label htmlFor="p-location">Location</label>
          <select id="p-location" name="location" defaultValue="" required>
            <option value="" disabled>
              Choose one
            </option>
            <option>On-site</option>
            <option>Hybrid</option>
            <option>Remote</option>
            <option>Not decided yet</option>
          </select>
        </div>
        <div className="field field-wide">
          <label htmlFor="p-message">
            Message <span className="optional">(optional)</span>
          </label>
          <textarea id="p-message" name="message" />
        </div>
      </div>
      <Honeypot id="p-website" />
      <div className="form-footer">
        <button className="btn btn-primary" type="submit" disabled={status.kind === "sending"}>
          {status.kind === "sending" ? "Sending…" : "Send"}
        </button>
        <PrivacyLine />
      </div>
      <StatusMessage
        status={status}
        successText="Thanks. We've received your message and will get back to you. You'll also get a confirmation by email."
      />
    </form>
  );
}

function CareersForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ kind: "sending" });
    const result = await submit(form, "careers");
    setStatus(result);
    if (result.kind === "success") form.reset();
  }

  return (
    <form className="form-panel" onSubmit={onSubmit}>
      <p className="form-intro">For IT professionals who want client assignments in Sweden.</p>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="c-name">Name</label>
          <input id="c-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="c-email">Email</label>
          <input id="c-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="c-phone">
            Phone <span className="optional">(optional)</span>
          </label>
          <input id="c-phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="c-linkedin">
            LinkedIn <span className="optional">(optional)</span>
          </label>
          <input id="c-linkedin" name="linkedin" type="url" placeholder="https://www.linkedin.com/in/…" />
        </div>
        <div className="field">
          <label htmlFor="c-area">Area</label>
          <select id="c-area" name="area" defaultValue="" required>
            <option value="" disabled>
              Choose one
            </option>
            {SERVICES.map((service) => (
              <option key={service.title}>{service.title}</option>
            ))}
            <option>Other</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="c-availability">Availability</label>
          <select id="c-availability" name="availability" defaultValue="" required>
            <option value="" disabled>
              Choose one
            </option>
            <option>Available now</option>
            <option>Within a month</option>
            <option>In 1–3 months</option>
            <option>In more than 3 months</option>
            <option>Part-time while studying</option>
          </select>
        </div>
        <div className="field field-wide">
          <label htmlFor="c-cv">CV</label>
          <input id="c-cv" name="cv" type="file" accept="application/pdf,.pdf" required />
          <span className="field-hint">PDF, max 5 MB.</span>
        </div>
        <div className="field field-wide">
          <label htmlFor="c-message">
            Message <span className="optional">(optional)</span>
          </label>
          <textarea id="c-message" name="message" placeholder="What kind of assignment are you looking for?" />
        </div>
      </div>
      <Honeypot id="c-website" />
      <div className="form-footer">
        <button className="btn btn-primary" type="submit" disabled={status.kind === "sending"}>
          {status.kind === "sending" ? "Sending…" : "Send application"}
        </button>
        <PrivacyLine />
      </div>
      <StatusMessage
        status={status}
        successText="Thanks. We've received your CV and will get back to you if we see a role that fits. You'll also get a confirmation by email."
      />
    </form>
  );
}

export function ContactForms() {
  const [tab, setTab] = useState<Tab>("partners");

  useEffect(() => {
    const sync = () => setTab(tabFromHash(window.location.hash));
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  function choose(next: Tab) {
    setTab(next);
    window.history.replaceState(null, "", `#${next}`);
  }

  return (
    <div>
      <div className="tabs" role="tablist" aria-label="What is your message about?">
        <button
          id="tab-partners"
          className="tab"
          type="button"
          role="tab"
          aria-selected={tab === "partners"}
          aria-controls="panel-partners"
          onClick={() => choose("partners")}
        >
          Partners
        </button>
        <button
          id="tab-careers"
          className="tab"
          type="button"
          role="tab"
          aria-selected={tab === "careers"}
          aria-controls="panel-careers"
          onClick={() => choose("careers")}
        >
          Careers
        </button>
      </div>
      <div id="panel-partners" role="tabpanel" aria-labelledby="tab-partners" hidden={tab !== "partners"}>
        <PartnersForm />
      </div>
      <div id="panel-careers" role="tabpanel" aria-labelledby="tab-careers" hidden={tab !== "careers"}>
        <CareersForm />
      </div>
    </div>
  );
}
