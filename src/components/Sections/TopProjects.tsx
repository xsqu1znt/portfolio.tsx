"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import ProjectCard from "@/components/ProjectCard";
import Autoplay from "embla-carousel-autoplay";
import projects from "@/constants/projects";
import * as React from "react";

export default function Projects() {
    const plugin = React.useRef(Autoplay({ delay: 5000 }));

    return (
        <section id="projects" className="flex flex-col items-center gap-12 justify-center px-6 py-12">
            <h2 className="text-3xl font-bold">🏆 Top Projects</h2>

            <Carousel className="w-full max-w-sm" opts={{ align: "start" }} plugins={[plugin.current]}>
                <CarouselContent>
                    {projects.map((project, i) => (
                        <CarouselItem key={i} /* className="basis-1/3" */>
                            <div className="p-1">
                                <ProjectCard project={project} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    );
}
