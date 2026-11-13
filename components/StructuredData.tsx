import { SITE } from "@/lib/site";

const data = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.name,
    alternateName: ["Rivo Tech", "Rivo"],
    url: `${SITE.url}/`,
    logo: `${SITE.url}/logo.png`,
    email: SITE.emails.partners,
    foundingDate: String(SITE.founded),
    description:
      "IT consultancy in Stockholm providing developers, testers, designers, engineers, architects and agile leads for client assignments.",
    address: { "@type": "PostalAddress", addressLocality: "Stockholm", addressCountry: "SE" },
    identifier: { "@type": "PropertyValue", propertyID: "Organisationsnummer", value: SITE.orgNumber },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: "Rivo Tech",
    alternateName: [SITE.name, "Rivo", "rivotech.se"],
    url: `${SITE.url}/`,
    publisher: { "@id": `${SITE.url}/#organization` },
  },
];

export function StructuredData() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
