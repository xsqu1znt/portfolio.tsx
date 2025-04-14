import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";

interface ProjectProps {
    title: string;
    description: string;
    tech: string[];
    projectType: string;
    links: {
        demo?: string;
        site?: string;
        github?: string;
    } | null;
}

export default function ProjectCard({ project }: { project: ProjectProps }) {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex gap-2">
                    {project.tech.map((tech, i) => (
                        <span key={i} className="bg-zinc-800 text-xs px-2 py-1 rounded">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex justify-between gap-4 text-sm mt-6">
                    <span className="text-zinc-600 font-bold italic">{project.projectType}</span>

                    <div className="space-x-4">
                        {project.links?.demo && (
                            <Link href={project.links.demo} target="_blank" className="text-violet-400 hover:underline">
                                Live Demo
                            </Link>
                        )}
                        {project.links?.site && (
                            <Link href={project.links.site} target="_blank" className="text-violet-400 hover:underline">
                                Website
                            </Link>
                        )}
                        {project.links?.github && (
                            <Link href={project.links.github} target="_blank" className="text-violet-400 hover:underline">
                                GitHub
                            </Link>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
