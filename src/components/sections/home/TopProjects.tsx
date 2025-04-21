import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/constants/projects";

export default function Projects() {
    const topProjects = Object.entries(projects).map(([category, values]) => ({
        category,
        cards: (
            <div className="flex flex-wrap justify-center gap-6">
                {values.slice(0, 3).map((p, i) => (
                    <ProjectCard key={i} project={p} />
                ))}
            </div>
        )
    }));

    return (
        <section id="top" className="section">
            <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="text-3xl font-bold">
                    🏆 <br /> Top Projects
                </h2>
                <p className="text-zinc-500">🚧 This section is under construction 🚧</p>
            </div>

            <Tabs defaultValue={topProjects[0].category}>
                <TabsList className="mb-2 place-self-center">
                    {topProjects.map((p, i) => (
                        <TabsTrigger key={i} value={p.category} className="px-8 cursor-pointer">
                            {p.category}
                        </TabsTrigger>
                    ))}
                </TabsList>

                <div className="mt-6" />

                {topProjects.map((cat, i) => (
                    <TabsContent key={i} value={cat.category}>
                        {cat.cards}
                    </TabsContent>
                ))}
            </Tabs>
        </section>
    );
}
