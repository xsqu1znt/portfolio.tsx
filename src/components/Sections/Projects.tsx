import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/constants/projects";
import Link from "next/link";

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col items-center gap-12 justify-center px-6 py-12">
            <div className="flex flex-row items-center gap-6">
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
