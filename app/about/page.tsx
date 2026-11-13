import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Rivo Tech AB is an IT consultancy founded in Stockholm in 2025 to connect skilled people with the teams that need them.",
};

export default function AboutPage() {
  return (
    <>
      <header className="page-head">
        <p className="eyebrow">About</p>
        <h1>About Rivo</h1>
        <p className="lead">
          Rivo Tech AB is an IT consultancy founded in Stockholm in {SITE.founded}.
        </p>
      </header>

      <section className="section" aria-labelledby="why-title">
        <h2 id="why-title">Why we started</h2>
        <div className="section-body prose">
          <p>
            Swedish universities turn out skilled IT talent every year, from all over the world. We believe skills, not
            connections, should open doors, and that the best teams are built by giving good people a real chance to
            show what they can do.
          </p>
          <p>
            That&apos;s why we started Rivo. We connect skilled IT professionals, including international graduates who
            studied here, with teams that need them, and we support them as they grow.
          </p>
          <p>
            For our clients, that means consultants who are motivated, well prepared and matched to the role. For our
            consultants, it means a way into the industry and someone in their corner.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="values-title">
        <h2 id="values-title">What we stand for</h2>
        <div className="section-body">
          <ul className="points">
            <li>
              <h3>Quality first</h3>
              <p>We only present consultants we believe in, and only for roles they fit.</p>
            </li>
            <li>
              <h3>Straight talk</h3>
              <p>Clear terms, honest feedback and no surprises, for clients and consultants alike.</p>
            </li>
            <li>
              <h3>Room to grow</h3>
              <p>We help our consultants develop through their assignments, mentoring and the network we build together.</p>
            </li>
            <li>
              <h3>Open to everyone</h3>
              <p>We hire on skills and merit. Your background and where you come from do not decide.</p>
            </li>
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
