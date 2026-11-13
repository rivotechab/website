import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Hire IT consultants from Rivo Tech AB directly, through your broker or framework agreement, or as a subcontracting partner.",
  alternates: { canonical: "/partners/" },
};

export default function PartnersPage() {
  return (
    <>
      <header className="page-head">
        <p className="eyebrow">Partners</p>
        <h1>Hire consultants your way</h1>
        <p className="lead">
          Directly, through your broker, or as a subcontractor to your own consultancy.
        </p>
      </header>

      <section className="section" aria-labelledby="ways-title">
        <h2 id="ways-title">Ways to work with us</h2>
        <div className="section-body">
          <ul className="points">
            <li>
              <h3>Direct assignments</h3>
              <p>Contract with Rivo Tech AB for one consultant or a small team.</p>
            </li>
            <li>
              <h3>Through your broker</h3>
              <p>
                Hire through a broker or framework agreement? We can work through them, so you don&apos;t need a new
                supplier agreement.
              </p>
            </li>
            <li>
              <h3>Partner consultancies</h3>
              <p>Need extra capacity for your own assignment? Our consultants can work with you as subcontractors.</p>
            </li>
            <li>
              <h3>Our areas</h3>
              <p>
                Development, testing, design, cloud, data and AI, agile delivery and architecture.{" "}
                <Link href="/#services">See the roles we cover</Link>.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="how-title">
        <h2 id="how-title">How we work</h2>
        <div className="section-body">
          <ol className="steps">
            <li>
              <div>
                <h3>Send us the role</h3>
                <p>Stack, seniority, start date, location and how long you need someone. A short description is enough.</p>
              </div>
            </li>
            <li>
              <div>
                <h3>Get matching profiles</h3>
                <p>
                  We send CVs of consultants who fit, with availability and rate. We only present people who have
                  agreed to it.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Interview and start</h3>
                <p>
                  You meet the consultant and decide. The assignment runs on a contract with Rivo Tech AB, directly or
                  through your broker&apos;s framework agreement.
                </p>
              </div>
            </li>
          </ol>
          <div className="actions">
            <Link className="btn btn-primary" href="/contact/#partners">
              Send us a role
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
