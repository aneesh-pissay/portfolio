"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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

  const desktopNavClass = (href: string) =>
    `relative px-1 py-2 text-base font-medium transition-colors ${
      isActive(href) ? "text-[var(--text)]" : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
    }`;

  const mobileNavClass = (href: string) =>
    `block py-3.5 text-lg font-medium transition-colors ${
      isActive(href) ? "text-[var(--text)]" : "text-[var(--text-muted)]"
    }`;

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{
        borderColor: "var(--border-color)",
        background: "color-mix(in srgb, var(--bg) 92%, transparent)",
      }}
    >
      <div className="section-inner">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3 transition-opacity hover:opacity-90"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/logo.png"
              alt={`${title} logo`}
              width={56}
              height={56}
              className="h-11 w-11 md:h-12 md:w-12 shrink-0 rounded-full object-cover"
              priority
            />
            <span
              className="truncate text-lg md:text-xl font-semibold tracking-tight"
              style={{ color: "var(--text)", fontFamily: "var(--font-display), sans-serif" }}
            >
              {title}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={desktopNavClass(link.href)}>
                {link.label}
                {isActive(link.href) && (
                  <span
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full"
                    style={{ background: "var(--primary)" }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="w-10 h-10 flex items-center justify-center rounded-lg transition-colors hover:bg-[var(--surface-variant)]"
              style={{ color: "var(--text-muted)", border: "1px solid var(--border-color)" }}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="w-10 h-10 md:hidden flex items-center justify-center rounded-lg transition-colors hover:bg-[var(--surface-variant)]"
              style={{ color: "var(--text)", border: "1px solid var(--border-color)" }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 top-16 z-40 bg-black/50 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
          <nav
            className="absolute left-0 right-0 top-full z-50 border-b px-4 py-3 md:hidden"
            style={{
              borderColor: "var(--border-color)",
              background: "var(--bg)",
            }}
          >
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={mobileNavClass(link.href)}
                  style={{ borderBottom: "1px solid var(--border-color)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
