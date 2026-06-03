export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  achievements: string[];
}

export const workExperience: WorkExperience[] = [
  {
    role: "Full Stack Developer",
    company: "Cloudsight Nexus Inc.",
    period: "September 2021 – Present",
    achievements: [
      "Built scalable Full Stack web and mobile applications.",
      "Developed backend services and REST APIs.",
      "Created reusable component libraries improving development efficiency.",
      "Implemented authentication, state management and API integrations.",
      "Managed Cloud deployments and CI/CD workflows.",
      "Optimized application performance for production environments.",
    ],
  },
];
