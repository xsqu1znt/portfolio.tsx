import ProjectCard from "@/components/ProjectCard";
import projects from "@/constants/projects";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col items-center justify-center px-6 py-12 space-y-12">
            <h2 className="text-3xl font-bold">🏆 Top Projects</h2>

            <div className="flex flex-row gap-6">
                {projects.map((project, i) => (
                    <ProjectCard key={i} project={project} />
                ))}
            </div>

            <div className="flex flex-row items-center gap-4">
                <p className="text-zinc-400 text-xl italic">Want to see my other projects?</p>
                <Button asChild className="cursor-pointer" variant={"outline"}>
                    <Link href="/projects">
                        View Projects <ArrowRight />
                    </Link>
                </Button>
            </div>
        </section>
    );
}
