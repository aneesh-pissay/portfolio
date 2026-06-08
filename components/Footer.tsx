import Link from "next/link";
import { profile } from "@/data/profile";

interface FooterProps {
  title: string;
}

export function Footer({ title }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "About", href: "/#about" },
    { label: "Stack", href: "/#stack" },
    { label: "Experience", href: "/#experience" },
    { label: "Work", href: "/#work" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="section-block">
      <div className="section-inner py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <p className="text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-display), sans-serif", color: "var(--text)" }}>
              {title}
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {profile.role} · {profile.heroStats[0].value} {profile.heroStats[0].label.toLowerCase()}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "var(--text-muted)" }}>
              Navigation
            </p>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors hover:opacity-80"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "var(--text-muted)" }}>
              Connect
            </p>
            <div className="flex flex-col gap-2">
              <a href={profile.contact.email.href} className="text-sm transition-colors hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
                {profile.contact.email.label}
              </a>
              <a href={profile.contact.linkedin.href} target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
                LinkedIn
              </a>
              <a href={profile.contact.github.href} target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 text-center text-xs" style={{ borderTop: "1px solid var(--border-color)", color: "var(--text-muted)" }}>
          © {currentYear} {title}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
