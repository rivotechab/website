type IconName = "code" | "mobile" | "cloud" | "data" | "qa" | "design" | "agile" | "architecture";

function Shapes({ name }: { name: IconName }) {
  switch (name) {
    case "code":
      return (
        <>
          <polyline points="8 6 2 12 8 18" />
          <polyline points="16 6 22 12 16 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </>
      );
    case "mobile":
      return (
        <>
          <rect x="6.5" y="2" width="11" height="20" rx="2.5" />
          <line x1="11" y1="18" x2="13" y2="18" />
        </>
      );
    case "cloud":
      return <path d="M7.5 19h9.5a4.5 4.5 0 0 0 .4-8.98A6 6 0 0 0 5.9 11.3 4 4 0 0 0 7.5 19z" />;
    case "data":
      return (
        <>
          <ellipse cx="12" cy="5.5" rx="7.5" ry="3" />
          <path d="M4.5 5.5v6.5c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V5.5" />
          <path d="M4.5 12v6.5c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V12" />
        </>
      );
    case "qa":
      return (
        <>
          <circle cx="12" cy="12" r="9" />
          <polyline points="8 12.5 11 15.5 16.5 9.5" />
        </>
      );
    case "design":
      return (
        <>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="9" x2="9" y2="20" />
        </>
      );
    case "agile":
      return (
        <>
          <path d="M20 12a8 8 0 0 1-14.2 5" />
          <path d="M4 12a8 8 0 0 1 14.2-5" />
          <polyline points="18.5 3 18.5 7.2 14.3 7.2" />
          <polyline points="5.5 21 5.5 16.8 9.7 16.8" />
        </>
      );
    case "architecture":
      return (
        <>
          <rect x="3" y="3" width="6" height="6" rx="1" />
          <rect x="15" y="3" width="6" height="6" rx="1" />
          <rect x="9" y="15" width="6" height="6" rx="1" />
          <path d="M6 9v3h12V9" />
          <line x1="12" y1="12" x2="12" y2="15" />
        </>
      );
  }
}

export function ServiceIcon({ name }: { name: IconName }) {
  return (
    <span className="service-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <Shapes name={name} />
      </svg>
    </span>
  );
}
