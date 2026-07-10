import Link from "next/link";

export function StatusDot() {
  return <i className="status-dot" aria-hidden="true" />;
}

export function Header({ active }: { active?: string }) {
  const links = [
    ["Projects", "/projects", "projects"],
    ["Experience", "/experience", "experience"],
    ["About", "/about", "about"],
    ["Résumé", "/resume", "resume"],
  ];
  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <Link className="brand" href="/" aria-label="Harsh Patel home">
          <span className="brand-mark">HP</span><span>Harsh Patel</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href, key]) => <Link className={active === key ? "active" : ""} href={href} key={href}>{label}</Link>)}
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span /><span /></summary>
          <nav>{links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav>
        </details>
      </div>
    </header>
  );
}

export function PageIntro({ index, eyebrow, title, copy }: { index: string; eyebrow: string; title: string; copy: string }) {
  return (
    <section className="page-intro shell">
      <div className="page-index">[{index}]</div>
      <div><p className="eyebrow"><StatusDot /> {eyebrow}</p><h1>{title}</h1><p>{copy}</p></div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="shell footer-inner">
        <div><span className="brand-mark">HP</span><p>Robotics software, autonomous systems, and thoughtful engineering.</p></div>
        <div className="footer-links"><a href="mailto:harsh8121998@gmail.com">Email</a><a href="tel:+14452089961">Phone</a><a href="https://github.com/Harshpatel0812" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/harshpatel0812/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        <small>© 2026 Harsh Patel · Philadelphia, PA</small>
      </div>
    </footer>
  );
}
