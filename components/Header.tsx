"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

interface HeaderProps {
  title: string;
  navLinks: NavLink[];
}

const SECTION_IDS = ["home", "about", "stack", "experience", "work", "contact"];

function hrefToSection(href: string): string | null {
  if (href === "/") return "home";
  const hash = href.split("#")[1];
  return hash ?? null;
}

export function Header({ title, navLinks }: HeaderProps) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isDark, setIsDark] = useState(true);

  // Sync initial theme from DOM (set by inline script in layout)
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  useEffect(() => {
    if (pathname !== "/") return;
    const intersecting = new Set<string>();
    const observers = SECTION_IDS.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) intersecting.add(id);
          else intersecting.delete(id);
          const active = SECTION_IDS.find((s) => intersecting.has(s)) ?? "home";
          setActiveSection(active);
        },
        { rootMargin: "-20% 0px -20% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [pathname]);

  function isActive(href: string): boolean {
    if (pathname !== "/") return pathname === href;
    return hrefToSection(href) === activeSection;
  }

  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{ borderColor: "var(--border-color)", background: "color-mix(in srgb, var(--bg) 90%, transparent)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-sm font-bold transition-colors font-mono tracking-tight"
            style={{ color: "var(--text)" }}
          >
            {title}
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: isActive(link.href) ? "var(--text)" : "var(--text-muted)",
                  textDecorationColor: "var(--primary)",
                }}
                className={`text-sm transition-all decoration-2 underline-offset-4 hover:opacity-100 ${
                  isActive(link.href) ? "underline" : "hover:underline"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors"
            style={{ color: "var(--text-muted)", border: "1px solid var(--border-color)" }}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
}
