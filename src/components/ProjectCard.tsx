import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";
import BubbleTag from "./BubbleTag";
import Link from "next/link";

interface Props {
    project: {
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
    };
    className?: string;
}

export default function ProjectCard(props: Props) {
    return (
        <Card className={cn("border-zinc-800", props.className)}>
            <CardHeader>
                <CardTitle>{props.project.title}</CardTitle>
                <CardDescription>{props.project.description}</CardDescription>
                {props.project.subText && (
                    <CardDescription className="italic text-zinc-600">
                        {">"} {props.project.subText}
                    </CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <div className="flex items-center w-full gap-2 not-lg:overflow-x-auto lg:flex-wrap no-scrollbar">
                    {props.project.tech.map((tech, i) => (
                        <BubbleTag key={i} size={"sm"} className="not-lg:flex-shrink-0">
                            {tech}
                        </BubbleTag>
                    ))}
                </div>
            </CardContent>

            <CardFooter className="justify-between [.border-t]:pt-3 -mb-2 border-t border-white/5">
                <span className="text-sm italic font-bold select-none text-zinc-600">{props.project.projectType}</span>

                <ul className="flex flex-row gap-4 text-sm">
                    {props.project.links?.demo && (
                        <li>
                            <Link href={props.project.links.demo} target="_blank" className="link-accent-primary">
                                Live Demo
                            </Link>
                        </li>
                    )}
                    {props.project.links?.site && (
                        <li>
                            <Link href={props.project.links.site} target="_blank" className="link-accent-primary">
                                Website
                            </Link>
                        </li>
                    )}
                    {props.project.links?.github && (
                        <li>
                            <Link href={props.project.links.github} target="_blank" className="link-accent-primary">
                                GitHub
                            </Link>
                        </li>
                    )}
                </ul>
            </CardFooter>
        </Card>
    );
}
