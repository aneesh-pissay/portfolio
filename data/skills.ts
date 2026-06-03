export type SkillIconKey = "Globe" | "Smartphone" | "Server" | "Cloud" | "Zap";

export interface SkillCard {
  iconKey: SkillIconKey;
  title: string;
  color: string;
  items: string[];
}

export const skillCards: SkillCard[] = [
  {
    iconKey: "Globe",
    title: "Frontend Development",
    color: "#3b82f6",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Reusable Components"],
  },
  {
    iconKey: "Smartphone",
    title: "Mobile Development",
    color: "#60a5fa",
    items: ["React Native", "Android", "iOS", "Redux Toolkit", "React Navigation"],
  },
  {
    iconKey: "Server",
    title: "Backend Development",
    color: "#22c55e",
    items: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication"],
  },
  {
    iconKey: "Cloud",
    title: "Cloud & DevOps",
    color: "#22d3ee",
    items: ["AWS", "Docker", "CI/CD", "GitHub Actions", "Deployment"],
  },
  {
    iconKey: "Zap",
    title: "Engineering",
    color: "#f59e0b",
    items: [
      "Performance Optimization",
      "Clean Architecture",
      "Scalable Systems",
      "Debugging",
    ],
  },
];
