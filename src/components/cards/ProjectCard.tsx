import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./Card";
import { NoTouchPropagation } from "@/components/common";
import { BubbleTag } from "@/components/ui";
import { cn } from "@/lib/utils";

interface Props {
    project: {
        title: string;
        description: string;
        subText?: string | null;
        tech: string[];
        projectType: string;
        links: {
            demo?: string | null;
            site?: string | null;
            github?: string;
        } | null;
    };
    className?: string;
}

export function ProjectCard(props: Props) {
    return (
        <Card className={cn("border-zinc-800", props.className)}>
            <CardHeader>
                <CardTitle>{props.project.title}</CardTitle>
                <CardDescription>{props.project.description}</CardDescription>
                {props.project.subText && (
                    <CardDescription className="text-zinc-600 italic">
                        {">"} {props.project.subText}
                    </CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <NoTouchPropagation>
                    <div className="no-scrollbar flex w-full touch-pan-x items-center gap-2 whitespace-nowrap not-lg:overflow-x-auto lg:flex-wrap">
                        {props.project.tech.map((tech, i) => (
                            <BubbleTag key={i} size={"sm"} className="">
                                {tech}
                            </BubbleTag>
                        ))}
                    </div>
                </NoTouchPropagation>
            </CardContent>

            <CardFooter className="-mb-2 justify-between border-t border-white/5 [.border-t]:pt-3">
                <span className="text-sm font-bold text-zinc-600 italic select-none">{props.project.projectType}</span>

                <ul className="flex flex-row gap-4 text-sm">
                    {props.project.links?.demo && (
                        <li>
                            <a
                                href={props.project.links.demo}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="link-accent-primary"
                            >
                                Live Demo
                            </a>
                        </li>
                    )}
                    {props.project.links?.site && (
                        <li>
                            <a
                                href={props.project.links.site}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="link-accent-primary"
                            >
                                Website
                            </a>
                        </li>
                    )}
                    {props.project.links?.github && (
                        <li>
                            <a
                                href={props.project.links.github}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="link-accent-primary"
                            >
                                GitHub
                            </a>
                        </li>
                    )}
                </ul>
            </CardFooter>
        </Card>
    );
}
