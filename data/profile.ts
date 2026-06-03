export interface HeroStat {
  value: string;
  label: string;
}

export interface TerminalCheck {
  label: string;
  status: "done" | "pending";
  timing?: string;
}

export interface CodeProfile {
  role: string;
  experience: string;
  frontend: string[];
  backend: string[];
  devOps: string[];
}

export interface ContactEntry {
  label: string;
  href: string;
}

export interface ProfileContact {
  email: ContactEntry;
  linkedin: ContactEntry;
  github: ContactEntry;
}

export interface Profile {
  name: string;
  role: string;
  badge: string;
  titleLines: [string, string, string];
  highlightLineIndex: number;
  description: string;
  heroStats: HeroStat[];
  terminalChecks: TerminalCheck[];
  techChips: string[];
  aboutHeading: string;
  aboutBio: string;
  aboutChecklist: string[];
  codeProfile: CodeProfile;
  stackSubtitle: string;
  experienceSectionTagline: string;
  ctaTitle: string;
  ctaSubtitle: string;
  contact: ProfileContact;
}

export const profile: Profile = {
  name: "Aneesh Pissay",
  role: "Full Stack Developer",
  badge: "FULL STACK DEVELOPER • 4+ YEARS EXPERIENCE",
  titleLines: ["Building Scalable", "Web & Mobile", "Experiences"],
  highlightLineIndex: 1,
  description:
    "Full Stack Developer with 4+ years of experience building production-ready web and mobile applications using React, Next.js, React Native, Node.js, MongoDB and modern cloud workflows.",
  heroStats: [
    { value: "4+", label: "Years Experience" },
    { value: "Full Stack", label: "Web + Mobile" },
    { value: "Cloud Ready", label: "Docker + CI/CD" },
  ],
  terminalChecks: [
    { label: "Frontend Optimized", status: "done", timing: "1.2s" },
    { label: "Backend APIs Ready", status: "done" },
    { label: "Mobile Builds Verified", status: "done" },
    { label: "Deployment Pipeline Active", status: "pending" },
  ],
  techChips: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
  aboutHeading: "Building scalable full stack applications with clean architecture.",
  aboutBio:
    "Full Stack Developer with 4+ years of experience building production-ready web and mobile applications using React, Next.js, React Native, Node.js, MongoDB and modern cloud workflows. Experienced in creating scalable frontend architectures, REST APIs, mobile applications, performance optimization, Docker deployments and CI/CD automation.",
  aboutChecklist: [
    "Scalable Frontend Architectures (React, Next.js, TypeScript)",
    "Backend APIs & Mobile Development (Node.js, React Native)",
    "Docker, CI/CD & Cloud Deployments (AWS, GitHub Actions)",
  ],
  codeProfile: {
    role: "Full Stack Developer",
    experience: "4+ Years",
    frontend: ["React", "Next.js", "React Native", "TypeScript"],
    backend: ["Node.js", "Express.js", "MongoDB"],
    devOps: ["AWS", "Docker", "CI/CD"],
  },
  stackSubtitle: "Specialized tools for full stack web and mobile engineering",
  experienceSectionTagline:
    "Chronology of building production-grade web and mobile systems.",
  ctaTitle: "Ready to build something?",
  ctaSubtitle:
    "Open to Full Stack Developer opportunities building scalable web and mobile products.",
  contact: {
    email: { label: "aneeshpissay330@gmail.com", href: "mailto:aneeshpissay330@gmail.com" },
    linkedin: {
      label: "aneesh-pissay",
      href: "https://www.linkedin.com/in/aneesh-pissay-1559a31a9",
    },
    github: { label: "aneesh-pissay", href: "https://github.com/aneesh-pissay" },
  },
};
