export type SkillIconKey = "Globe" | "Smartphone" | "Server" | "Cloud";

export interface SkillCard {
  iconKey: SkillIconKey;
  title: string;
  tags: string[];
  color: string;
}

export const skillCards: SkillCard[] = [
  {
    iconKey: "Globe",
    title: "Frontend",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    color: "#38BDF8",
  },
  {
    iconKey: "Smartphone",
    title: "Mobile",
    tags: ["React Native", "iOS", "Android", "Redux"],
    color: "#818CF8",
  },
  {
    iconKey: "Server",
    title: "Backend",
    tags: ["Node.js", "Express", "MongoDB", "REST APIs"],
    color: "#22C55E",
  },
  {
    iconKey: "Cloud",
    title: "DevOps",
    tags: ["AWS", "Docker", "CI/CD", "GitHub Actions"],
    color: "#0EA5E9",
  },
];
