import { about } from "@/data/about";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <section id="about" className="spacing-section bg-background">
            <div className="container mx-auto spacing-container">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-16 text-foreground">
                        About Me
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Bio + Button */}
                        <div className="space-y-6">
                           {about.bio.map((paragraph, index) => (
                                <p key={index} className="text-muted-foreground text-lg leading-relaxed">
                                    {paragraph}
                                </p>
                           ))}
                            {/* Button to Skills Page */}
                            <Link
                                href="/skills"
                                className="btn-accent px-8 py-3 transition-colors font-medium cursor-pointer rounded-sm inline-block"
                            >
                                See My Skills
                            </Link>
                        </div>

                        {/* Right: Image */}
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="w-80 h-80 bg-secondary border border-border glass-effect flex items-center justify-center overflow-hidden">
                                    {about.profileImage ? (
                                        <Image
                                            src={about.profileImage}
                                            alt="Profile"
                                            width={288}
                                            height={288}
                                            className="w-72 h-72 object-cover"
                                            unoptimized
                                        />
                                    ) : (
                                        <span className="text-7xl font-bold text-muted-foreground">A</span>
                                    )}
                                </div>
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
