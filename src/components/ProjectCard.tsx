import BubbleTag from "./BubbleTag";
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
        <Card className="border-zinc-800 w-xs md:w-sm">
            <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                {project.subText && (
                    <CardDescription className="italic text-zinc-600">
                        {">"} {project.subText}
                    </CardDescription>
                )}
            </CardHeader>
            <CardContent className="flex flex-col">
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                        <BubbleTag key={i} size={"sm"}>{tech}</BubbleTag>
                    ))}
                </div>
            </CardContent>

            <CardFooter className="justify-between border-t border-white/5">
                <span className="text-sm italic font-bold select-none text-zinc-600">{project.projectType}</span>

                <ul className="flex flex-row gap-4 text-sm">
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
