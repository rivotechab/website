"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/site";
import { Logo } from "./Logo";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const current = (href: string) => (pathname === href || pathname === href.slice(0, -1) ? "page" : undefined);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Rivo Tech AB, home">
        <Logo />
      </Link>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="menu-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        Menu
      </button>
      <nav id="site-nav" className={open ? "nav open" : "nav"} aria-label="Main">
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} aria-current={current(item.href)}>
            {item.label}
          </Link>
        ))}
        <Link className="nav-cta" href="/contact/" aria-current={current("/contact/")}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
