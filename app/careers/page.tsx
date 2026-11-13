import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { SERVICES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Rivo Tech AB looks for IT professionals who want client assignments in Sweden. Send us your CV.",
  alternates: { canonical: "/careers/" },
};

export default function CareersPage() {
  return (
    <>
      <header className="page-head">
        <p className="eyebrow">Careers</p>
        <h1>Work with us</h1>
        <p className="lead">
          We look for IT professionals who want client assignments in Sweden: developers, testers, designers,
          engineers, architects and agile leads. Experienced consultants and recent graduates are both welcome,
          including international graduates who studied here.
        </p>
        <div className="actions">
          <Link className="btn btn-primary" href="/contact/#careers">
            Apply now
          </Link>
        </div>
      </header>

      <section className="section" aria-labelledby="areas-title">
        <h2 id="areas-title">Where you fit</h2>
        <div className="section-body">
          <ul className="services">
            {SERVICES.map((service) => (
              <li className="service" key={service.title}>
                <h3>{service.title}</h3>
                <ul className="roles" aria-label="Roles">
                  {service.roles.map((role) => (
                    <li key={role}>{role}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="process-title">
        <h2 id="process-title">How it works</h2>
        <div className="section-body">
          <ol className="steps">
            <li>
              <div>
                <h3>Send your CV</h3>
                <p>
                  Use the form on our <Link href="/contact/#careers">contact page</Link> or email{" "}
                  <a href={`mailto:${SITE.emails.careers}`}>{SITE.emails.careers}</a>. PDF works best.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Talk to us</h3>
                <p>If we see a role that fits, we set up a short call about your experience and what you are looking for.</p>
              </div>
            </li>
            <li>
              <div>
                <h3>Get presented, with your OK</h3>
                <p>We never share your CV with a client without asking you first.</p>
              </div>
            </li>
          </ol>
          <div className="note">
            <h3>How we handle your CV</h3>
            <p>
              Rivo Tech AB (org. nr {SITE.orgNumber}) is responsible for the information you send us. We use it only to
              assess you for roles at Rivo or with our clients, and we delete it after 12 months. Read more in our{" "}
              <Link href="/privacy/">privacy notice</Link>.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
