import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Rivo Tech AB handles personal data from candidates, partners and website visitors.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <>
      <header className="page-head">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy notice</h1>
        <p className="updated">Last updated 13 November 2026</p>
      </header>

      <article className="legal">
        <h2>Who is responsible</h2>
        <p>
          {SITE.name} (org. nr {SITE.orgNumber}, {SITE.city}) is responsible for the personal data described here. For
          any question about your data, email <a href={`mailto:${SITE.emails.partners}`}>{SITE.emails.partners}</a>.
        </p>

        <h2>Candidates</h2>
        <h3>What we collect</h3>
        <p>
          What you send us through the careers form or by email: your name, contact details, LinkedIn profile, CV and
          anything in it, availability and your message.
        </p>
        <h3>Why and on what basis</h3>
        <p>
          To assess you for roles at Rivo or with our clients and to contact you about them. We do this to take steps
          at your request before a possible employment, and because we have a legitimate interest in recruiting. We
          never share your CV with a client without asking you first.
        </p>
        <h3>How long we keep it</h3>
        <p>
          12 months from when we receive it. After that we delete it, unless you are employed by us or ask us to keep
          it longer.
        </p>

        <h2>Partners and clients</h2>
        <h3>What we collect</h3>
        <p>
          What you send us through the partners form or by email: your name, company, contact details, details about
          the assignment and your message.
        </p>
        <h3>Why and on what basis</h3>
        <p>
          To answer your enquiry and follow up on possible assignments. We do this because we have a legitimate
          interest in running our business.
        </p>
        <h3>How long we keep it</h3>
        <p>
          If your enquiry leads to an agreement, for as long as the agreement lasts and then as long as Swedish
          accounting law requires. Otherwise we delete it within 24 months of our last contact.
        </p>

        <h2>Website visitors</h2>
        <p>
          This website uses no cookies, no analytics and no tracking. Fonts and images are served from our own site.
          Our hosting provider records technical information such as IP addresses in its server logs to run and
          protect the service.
        </p>

        <h2>Who helps us</h2>
        <p>These providers process personal data on our behalf, under data processing agreements:</p>
        <ul>
          <li>Microsoft (Microsoft 365), for email.</li>
          <li>n8n, which passes messages from our forms on to our email. It does not keep copies.</li>
          <li>GitHub, which hosts this website.</li>
        </ul>
        <p>
          Microsoft and GitHub are based in the United States. When data is transferred outside the EU/EEA, the
          transfer relies on the EU–US Data Privacy Framework or the European Commission&apos;s standard contractual
          clauses.
        </p>

        <h2>Your rights</h2>
        <p>
          You can ask to see the data we hold about you, have it corrected or deleted, restrict or object to how we use
          it, or receive a copy to take elsewhere. Email{" "}
          <a href={`mailto:${SITE.emails.partners}`}>{SITE.emails.partners}</a> and we will reply within one month.
        </p>
        <p>
          If you are unhappy with how we handle your data, you can contact the Swedish Authority for Privacy Protection
          (<a href="https://www.imy.se/en/" rel="noopener">IMY</a>).
        </p>

        <h2>Changes</h2>
        <p>We update this notice when our handling changes. The date at the top shows the latest version.</p>
      </article>
    </>
  );
}
