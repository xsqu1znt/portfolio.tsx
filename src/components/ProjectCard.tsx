import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";

interface ProjectProps {
    title: string;
    description: string;
    subText?: string;
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
        <Card className="border-zinc-800 w-sm">
            <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                {project.subText && <CardDescription className="text-zinc-600 italic">{">"} {project.subText}</CardDescription>}
            </CardHeader>
            <CardContent className="flex flex-col">
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                        <span
                            key={i}
                            className="bg-white/5 border-white/10 hover:border-white/25 text-xs px-2 py-1 rounded-full border-[1px] select-none transition-colors duration-200"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </CardContent>

            <CardFooter className="border-white/5 justify-between border-t">
                <span className="text-zinc-600 text-sm font-bold italic select-none">{project.projectType}</span>

                <ul className="text-sm flex flex-row gap-4">
                    {project.links?.demo && (
                        <li>
                            <Link href={project.links.demo} target="_blank" className="link-accent-primary">
                                Live Demo
                            </Link>
                        </li>
                    )}
                    {project.links?.site && (
                        <li>
                            <Link href={project.links.site} target="_blank" className="link-accent-primary">
                                Website
                            </Link>
                        </li>
                    )}
                    {project.links?.github && (
                        <li>
                            <Link href={project.links.github} target="_blank" className="link-accent-primary">
                                GitHub
                            </Link>
                        </li>
                    )}
                </ul>
            </CardFooter>
        </Card>
    );
}
