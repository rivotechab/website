import { LOGO_PATHS, LOGO_VIEWBOX } from "./logo-paths";

export function LogoSprite() {
  return (
    <svg className="sprite" aria-hidden="true" focusable="false">
      <symbol id="rivo-logo" viewBox={LOGO_VIEWBOX}>
        <g fill="currentColor">
          {LOGO_PATHS.map((p) => (
            <path key={p.transform} transform={p.transform} d={p.d} />
          ))}
        </g>
      </symbol>
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 416 223" aria-hidden="true" focusable="false">
      <use href="#rivo-logo" />
    </svg>
  );
}
