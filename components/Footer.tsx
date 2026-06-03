interface FooterProps {
  title: string;
}

export function Footer({ title }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8" style={{ borderTop: "1px solid var(--border-color)" }}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>© {currentYear} · {title}</span>
      </div>
    </footer>
  );
}
