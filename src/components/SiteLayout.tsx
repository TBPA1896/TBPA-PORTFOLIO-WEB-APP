import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <Link to="/" className="brand">
            <span className="brand-mark">BP</span>
            <span className="brand-text">TBPA.dev</span>
          </Link>

          <nav className="nav">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={`nav-link ${loc.pathname === n.to ? "active" : ""}`}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="menu-btn"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="mobile-nav">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={`nav-link ${loc.pathname === n.to ? "active" : ""}`}
              >
                {n.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <p>© 2026 B Parameswaran — Built with care.</p>
          <div className="footer-socials">
            <a className="icon-btn" href="https://github.com/TBPA1896" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a className="icon-btn" href="https://www.linkedin.com/in/tbpa1896/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a className="icon-btn" href="mailto:bparameswaran96@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
