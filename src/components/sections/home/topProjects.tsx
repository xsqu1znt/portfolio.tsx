import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import ProjectCard from "@/components/projectCard";
import projects from "@/constants/projects";

export default function Projects() {
    const topProjects = Object.entries(projects).map(([category, values]) => ({
        category,
        cards: (
            <div className="flex flex-row flex-wrap justify-center gap-6">
                {values.slice(0, 3).map((p, i) => (
                    <ProjectCard key={i} project={p} />
                ))}
            </div>
        )
    }));

    return (
        <section id="projects" className="section">
            <h2 className="text-3xl font-bold">🏆 Top Projects</h2>

            <Tabs defaultValue={topProjects[0].category}>
                <TabsList className="mb-2 place-self-center">
                    {topProjects.map((p, i) => (
                        <TabsTrigger key={i} value={p.category} className="px-8 cursor-pointer">
                            {p.category}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {topProjects.map((cat, i) => (
                    <TabsContent key={i} value={cat.category}>
                        {cat.cards}
                    </TabsContent>
                ))}
            </Tabs>
        </section>
    );
}
