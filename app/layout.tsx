import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { LogoSprite } from "@/components/Logo";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE } from "@/lib/site";
import "./globals.css";

const ubuntu = localFont({
  src: [
    { path: "./fonts/ubuntu-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ubuntu-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ubuntu-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-ubuntu",
  display: "swap",
});

const description =
  "Rivo Tech AB is an IT consultancy in Stockholm. Developers, testers, designers, engineers, architects and agile leads for client assignments, on-site, hybrid or remote.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Rivo Tech AB – IT consultants in Stockholm",
    template: "%s – Rivo Tech AB",
  },
  description,
  icons: { icon: { url: "/favicon.svg", type: "image/svg+xml" } },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Rivo Tech AB – IT consultants in Stockholm",
    description: "Developers, testers, designers, engineers and architects for your team.",
    images: [{ url: "/og-image.png", width: 1200, height: 675 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#f2f2f7",
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={ubuntu.variable}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <LogoSprite />
        <div className="wrap">
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
