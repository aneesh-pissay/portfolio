import type { StaticImageData } from "next/image";
import noirlyCalculatorFeatureGraphic from "@/public/projects/noirly-calculator-feature-graphic.png";
import noirlyCalculatorLogo from "@/public/projects/noirly-calculator-logo.png";

export interface FeaturedProject {
  title: string;
  type: string;
  description: string;
  stack: string[];
  features: string[];
  tags: string[];
  coreTech: string;
  keyFeature: string;
  githubUrl: string;
  url: string;
  featureGraphic: StaticImageData | string | null;
  logo: StaticImageData | string | null;
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Noirly Calculator",
    type: "Web Application",
    description:
      "A clean, minimal calculator web app with a slick dark UI, smooth animations, and full keyboard support.",
    stack: ["React", "TypeScript", "Vite"],
    features: ["Arithmetic Operations", "Keyboard Support", "Responsive UI"],
    tags: ["WEB APPLICATION", "REACT"],
    coreTech: "React, TypeScript",
    keyFeature: "Minimal UI, Keyboard Support",
    githubUrl: "#",
    url: "https://noirly-calculator.aneesh-pissay.in/",
    featureGraphic: noirlyCalculatorFeatureGraphic,
    logo: noirlyCalculatorLogo,
  },
];
