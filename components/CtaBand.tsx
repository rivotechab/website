import Link from "next/link";

export function CtaBand() {
  return (
    <section className="cta-band" aria-label="Get in touch">
      <div>
        <h2>Need a consultant?</h2>
        <p>Tell us about the role and we&apos;ll come back with profiles that fit.</p>
        <Link className="btn btn-light" href="/contact/#partners">
          Contact us
        </Link>
      </div>
      <div>
        <h2>Looking for an assignment?</h2>
        <p>Send us your CV and tell us what you are looking for.</p>
        <Link className="btn btn-light" href="/contact/#careers">
          Apply
        </Link>
      </div>
    </section>
  );
}
