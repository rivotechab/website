import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { ContactForms } from "./ContactForms";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Rivo Tech AB about a consultant assignment, or send us your CV.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <header className="page-head">
        <p className="eyebrow">Contact</p>
        <h1>Contact us</h1>
        <p className="lead">Choose what your message is about and we&apos;ll make sure it reaches the right person.</p>
      </header>

      <div className="contact-layout">
        <ContactForms />

        <aside className="details" aria-labelledby="details-title">
          <h2 id="details-title">Contact details</h2>
          <dl>
            <div>
              <dt>Partners and general</dt>
              <dd>
                <a href={`mailto:${SITE.emails.partners}`}>{SITE.emails.partners}</a>
              </dd>
            </div>
            <div>
              <dt>Careers</dt>
              <dd>
                <a href={`mailto:${SITE.emails.careers}`}>{SITE.emails.careers}</a>
              </dd>
            </div>
            <div>
              <dt>Company</dt>
              <dd>
                {SITE.name}
                <br />
                Org. nr {SITE.orgNumber}
                <br />
                {SITE.city}
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </>
  );
}
