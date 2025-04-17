"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import ProjectCard from "@/components/ProjectCard";
import Autoplay from "embla-carousel-autoplay";
import projects from "@/constants/projects";
import * as React from "react";

export default function Projects() {
    const plugin = React.useRef(Autoplay({ delay: 5000 }));

    return (
        <section id="projects" className="section">
            <h2 className="text-3xl font-bold">🏆 Top Projects</h2>

            <div className="flex flex-row flex-wrap justify-center gap-6">
                {projects.map((project, i) => (
                    <ProjectCard key={i} project={project} />
                ))}
            </div>
        </section>
    );
}
