export interface Project {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    url: string;
    githubUrl: string;
    category: string;
}

export const projects: Project[] = [
    {
        title: "Noirly Calculator",
        description: "A clean, minimal calculator web app with a slick dark UI, smooth animations, and full keyboard support.",
        technologies: ["React", "TypeScript", "Vite"],
        imageUrl: "https://lh3.googleusercontent.com/mAUuDI0JttDQHXlGher49vaz1xvhbgO_WwqvVdtwgbWo63a_KS1QtIKFvC2qw9PO36A9gcvRhv0BEHHNtisJ",
        url: "https://noirly-calculator.aneesh-pissay.in/",
        githubUrl: "#",
        category: "Web"
    },
];