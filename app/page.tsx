import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Logo } from "@/components/Logo";
import { SERVICES } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <Logo className="hero-mark" />
        <div className="hero-text">
          <p className="eyebrow">Rivo Tech AB</p>
          <h1 id="hero-title">IT consultants in Stockholm</h1>
          <p className="lead">
            Developers, cloud and data engineers, and architects for your team. On-site, hybrid or remote, hired
            directly or through your broker.
          </p>
          <div className="actions">
            <Link className="btn btn-primary" href="/contact/#partners">
              Hire a consultant
            </Link>
            <Link className="btn btn-secondary" href="/careers/">
              Work with us
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="services" aria-labelledby="services-title">
        <h2 id="services-title">What we do</h2>
        <div className="section-body">
          <p className="section-lead">Every consultant we present has been interviewed by us and matched to the role you need.</p>
          <ul className="services">
            {SERVICES.map((service) => (
              <li className="service" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
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

      <section className="section" aria-labelledby="doors-title">
        <h2 id="doors-title">Work with Rivo</h2>
        <div className="section-body">
          <div className="doors">
            <div className="door">
              <h3>For partners</h3>
              <p>
                Companies that need consultants, and brokers and consultancies looking for a partner who delivers.
                See how an assignment runs from first request to start.
              </p>
              <Link className="btn btn-secondary" href="/partners/">
                How we work
              </Link>
            </div>
            <div className="door">
              <h3>Careers</h3>
              <p>
                Developers, engineers and architects who want client assignments in Sweden, from experienced
                consultants to recent graduates.
              </p>
              <Link className="btn btn-secondary" href="/careers/">
                How we hire
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
