import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { Lexend, Space_Grotesk } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aneesh Pissay",
  description: "Aneesh Pissay's Portfolio - Full Stack and Mobile App Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Stack", href: "/#stack" },
    { label: "Experience", href: "/#experience" },
    { label: "Work", href: "/#work" },
    { label: "Contact", href: "/#contact" },
  ];
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Restore theme before first paint to avoid flash */}
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            var t = localStorage.getItem('theme');
            if (t === 'light') document.documentElement.classList.remove('dark');
            else document.documentElement.classList.add('dark');
          } catch(e) {}
        `}} />
      </head>
      <body
        className={`${lexend.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Header
          title="Aneesh Pissay"
          navLinks={navLinks}
        />
        {children}
        <Footer
          title="Aneesh Pissay"
        />
      </body>
    </html>
  );
}
