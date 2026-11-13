import Link from "next/link";
import { SITE } from "@/lib/site";
import { Logo } from "./Logo";

const FOOTER_NAV = [
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
      <div className="footer-top">
        <Link className="brand" href="/" aria-label="Rivo Tech AB, home">
          <Logo />
        </Link>
        <ul className="footer-nav">
          {FOOTER_NAV.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <ul className="footer-meta">
        <li>{SITE.name}</li>
        <li>Org. nr {SITE.orgNumber}</li>
        <li>{SITE.city}</li>
        <li>This site uses no cookies</li>
        <li>
          © {year} {SITE.name}
        </li>
      </ul>
    </footer>
  );
}
