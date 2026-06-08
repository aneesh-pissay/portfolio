import type { StaticImageData } from "next/image";
import noirlyCalculatorFeatureGraphic from "@/public/projects/noirly-calculator-feature-graphic.png";
import noirlyCalculatorFeatureGraphicDark from "@/public/projects/noirly-calculator-feature-graphic-dark.png";
import noirlyCalculatorLogo from "@/public/projects/noirly-calculator-logo.png";
import noirlyAlgolabFeatureGraphic from "@/public/projects/noirly-algolab-feature-graphic.png";
import noirlyAlgolabFeatureGraphicDark from "@/public/projects/noirly-algolab-feature-graphic-dark.png";
import noirlyAlgolabLogo from "@/public/projects/noirly-algolab-logo.png";

export interface FeaturedProject {
  title: string;
  type: string;
  description: string;
  stack: string[];
  url: string;
  featureGraphic: StaticImageData | string | null;
  featureGraphicDark: StaticImageData | string | null;
  logo: StaticImageData | string | null;
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Noirly AlgoLab",
    type: "EdTech Product",
    description:
      "A visual DSA learning platform with step-by-step animations, synced code tracing, and structured lessons from arrays to graphs.",
    stack: ["Next.js", "React", "TypeScript", "MongoDB"],
    url: "https://noirly.algolab.aneesh-pissay.in/",
    featureGraphic: noirlyAlgolabFeatureGraphic,
    featureGraphicDark: noirlyAlgolabFeatureGraphicDark,
    logo: noirlyAlgolabLogo,
  },
  {
    title: "Noirly Calculator",
    type: "Utility Product",
    description:
      "A full-featured browser calculator with basic, scientific, unit conversion, graphing, and programmer modes. Works offline with local history.",
    stack: ["React", "TypeScript", "Vite"],
    url: "https://noirly.calculator.aneesh-pissay.in/",
    featureGraphic: noirlyCalculatorFeatureGraphic,
    featureGraphicDark: noirlyCalculatorFeatureGraphicDark,
    logo: noirlyCalculatorLogo,
  },
];
