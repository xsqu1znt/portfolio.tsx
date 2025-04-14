import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

interface ProjectProps {
    title: string;
    description: string;
    tech: string[];
    client: boolean;
    links: {
        demo: string;
        site: string;
        github: string;
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
                    {project.client ? (
                        <span className="text-yellow-400 italic">Client Work</span>
                    ) : (
                        <span className="text-green-400 italic">Public</span>
                    )}

                    <div className="space-x-4">
                        {project.links?.demo && (
                            <a href={project.links.demo} target="_blank" className="text-blue-400 hover:underline">
                                Live Demo
                            </a>
                        )}
                        {project.links?.site && (
                            <a href={project.links.site} target="_blank" className="text-blue-400 hover:underline">
                                Website
                            </a>
                        )}
                        {project.links?.github && (
                            <a href={project.links.github} target="_blank" className="text-blue-400 hover:underline">
                                GitHub
                            </a>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
