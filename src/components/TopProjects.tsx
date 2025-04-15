"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import projects from "@/constants/projects";
import ProjectCard from "./ProjectCard";

export default function TopProjects() {
    const plugin = useRef(Autoplay({ delay: 5000 }));

    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold">🏆 Top Projects</h2>

            <Carousel className="w-full max-w-[355px]" plugins={[plugin.current]}>
                <CarouselContent>
                    {projects.map((project, i) => (
                        <CarouselItem key={i}>
                            <div className="p-1">
                                <ProjectCard project={project} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
