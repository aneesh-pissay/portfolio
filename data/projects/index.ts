export interface Project {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    imageUrlDark?: string;
    url: string;
    githubUrl: string;
    category: string;
}

export const projects: Project[] = [
    {
        title: "Noirly AlgoLab",
        description:
            "A visual DSA learning platform with step-by-step animations, synced code tracing, and structured lessons from arrays to graphs.",
        technologies: ["Next.js", "React", "TypeScript", "MongoDB"],
        imageUrl: "/projects/noirly-algolab-feature-graphic.png",
        imageUrlDark: "/projects/noirly-algolab-feature-graphic-dark.png",
        url: "https://noirly.algolab.aneesh-pissay.in/",
        githubUrl: "#",
        category: "Web",
    },
    {
        title: "Noirly Calculator",
        description:
            "A full-featured browser calculator — basic, scientific, unit conversion, graphing, and programmer modes. Works offline with local history.",
        technologies: ["React", "TypeScript", "Vite"],
        imageUrl: "/projects/noirly-calculator-feature-graphic.png",
        imageUrlDark: "/projects/noirly-calculator-feature-graphic-dark.png",
        url: "https://noirly.calculator.aneesh-pissay.in/",
        githubUrl: "#",
        category: "Web",
    },
];
