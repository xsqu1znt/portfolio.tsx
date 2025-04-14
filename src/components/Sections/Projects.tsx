import ProjectCard from "@/components/ProjectCard";
import projects from "@/constants/projects";

export default function Projects() {
    return (
        <section className="flex flex-col items-center justify-center px-6 py-12 space-y-12">
            <h1 className="text-4xl font-bold">Projects</h1>

            <div className="flex flex-row gap-6">
                {projects.map((project, i) => (
                    <ProjectCard key={i} project={project} />
                ))}
            </div>
        </section>
    );
}
