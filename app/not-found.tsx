import Link from "next/link";

export default function NotFound() {
  return (
    <header className="page-head">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p className="lead">The page you are looking for doesn&apos;t exist or has moved.</p>
      <div className="actions">
        <Link className="btn btn-primary" href="/">
          Go to the home page
        </Link>
      </div>
    </header>
  );
}
