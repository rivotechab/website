import Link from "next/link";
import { SERVICES, SITE } from "@/lib/site";
import { Logo } from "./Logo";

const COMPANY_LINKS = [
  { href: "/partners/", label: "Partners" },
  { href: "/careers/", label: "Careers" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
  { href: "/privacy/", label: "Privacy" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link className="brand" href="/" aria-label="Rivo Tech AB, home">
            <Logo />
          </Link>
          <p>IT consultants in Stockholm, hired directly or through your broker.</p>
        </div>
        <nav aria-labelledby="footer-company">
          <h2 id="footer-company">Company</h2>
          <ul>
            {COMPANY_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2>Services</h2>
          <ul>
            {SERVICES.map((service) => (
              <li key={service.title}>
                <Link href="/#services">{service.short}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <ul>
            <li>
              <span className="footer-label">Partners</span>
              <a href={`mailto:${SITE.emails.partners}`}>{SITE.emails.partners}</a>
            </li>
            <li>
              <span className="footer-label">Careers</span>
              <a href={`mailto:${SITE.emails.careers}`}>{SITE.emails.careers}</a>
            </li>
            <li>{SITE.city}</li>
          </ul>
        </div>
      </div>
      <ul className="footer-meta">
        <li>
          © {year} {SITE.name}
        </li>
        <li>Org. nr {SITE.orgNumber}</li>
        <li>This site uses no cookies</li>
      </ul>
    </footer>
  );
}
