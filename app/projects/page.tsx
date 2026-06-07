"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects/index";
import Icon from '@mdi/react';
import { mdiWeb, mdiCellphone } from '@mdi/js';

export default function Projects() {
    const [webPage, setWebPage] = useState(1);
    const [mobilePage, setMobilePage] = useState(1);
    const projectsPerPage = 9;

    // Icon mapping for project categories (if needed in future)
    // const categoryIcons = {
    //     "Web": mdiWeb,
    //     "Mobile": mdiCellphone
    // };

    const paginateProjects = (projectList: typeof projects, currentPage: number) => {
        const startIndex = (currentPage - 1) * projectsPerPage;
        const endIndex = startIndex + projectsPerPage;
        return projectList.slice(startIndex, endIndex);
    };

    const getTotalPages = (projectList: typeof projects) => {
        return Math.ceil(projectList.length / projectsPerPage);
    };

    const renderPagination = (projectList: typeof projects, currentPage: number, setPage: (page: number) => void) => {
        const totalPages = getTotalPages(projectList);
        if (totalPages <= 1) return null;

        return (
            <div className="flex justify-center items-center space-x-2 mt-8">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="btn-minimal"
                >
                    Previous
                </Button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <Button
                        key={pageNum}
                        variant={currentPage === pageNum ? "default" : "outline"}
                        size="sm"
                        onClick={() => setPage(pageNum)}
                        className={currentPage === pageNum ? "btn-accent" : "btn-minimal"}
                    >
                        {pageNum}
                    </Button>
                ))}
                
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="btn-minimal"
                >
                    Next
                </Button>
            </div>
        );
    };

    const webProjects = projects.filter(project => project.category === "Web");
    const mobileProjects = projects.filter(project => project.category === "Mobile");

    return (
        <section id="projects" className="spacing-section bg-background">
            <div className="container mx-auto spacing-container max-w-6xl">
                <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
                    Featured Projects
                </h2>
                <Tabs defaultValue="Web" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-8 max-w-md mx-auto">
                        <TabsTrigger 
                            value="Web"
                            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2"
                        >
                            <Icon path={mdiWeb} size={0.7} />
                            <span>Web</span>
                        </TabsTrigger>
                        <TabsTrigger 
                            value="Mobile"
                            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2"
                        >
                            <Icon path={mdiCellphone} size={0.7} />
                            <span>Mobile</span>
                        </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="Web" className="mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
                            {paginateProjects(webProjects, webPage).map((project, index) => (
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    imageUrl={project.imageUrl}
                                    imageUrlDark={project.imageUrlDark}
                                    tags={project.technologies}
                                    demoUrl={project.url}
                                    githubUrl={project.githubUrl}
                                    key={index}
                                />
                            ))}
                        </div>
                        {renderPagination(webProjects, webPage, setWebPage)}
                    </TabsContent>
                    
                    <TabsContent value="Mobile" className="mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
                            {paginateProjects(mobileProjects, mobilePage).map((project, index) => (
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    imageUrl={project.imageUrl}
                                    imageUrlDark={project.imageUrlDark}
                                    tags={project.technologies}
                                    demoUrl={project.url}
                                    githubUrl={project.githubUrl}
                                    key={index}
                                />
                            ))}
                        </div>
                        {renderPagination(mobileProjects, mobilePage, setMobilePage)}
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}