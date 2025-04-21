import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/constants/projects";

export default function TopProjects() {
    const topProjects = Object.entries(projects).map(([category, values]) => ({
        category,
        cards: values.slice(0, 3).map((p, i) => <ProjectCard key={i} project={p} />)
    }));

    return (
        <section id="top" className="section">
            <div className="flex flex-col items-center gap-4 mt-8 text-center">
                <h2 className="text-3xl font-bold">
                    🏆 <br /> Top Projects
                </h2>
                {/* <span className="text-sm select-none text-attention-gradient">you can swipe {">>"} to see more, btw</span> */}
                {/* <p className="text-zinc-500">🚧 This section is under construction 🚧</p> */}
            </div>

            <Tabs defaultValue={topProjects[0].category}>
                <TabsList className="mb-2 place-self-center">
                    {topProjects.map((p, idx) => (
                        <TabsTrigger key={idx} value={p.category} className="px-8 cursor-pointer">
                            {p.category}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {topProjects.map((cat, i) => (
                    <TabsContent key={i} value={cat.category}>
                        <Carousel className="w-[320px] lg:w-[384px]">
                            <CarouselContent>
                                {cat.cards.map((c, idx) => (
                                    <CarouselItem key={idx}>{c}</CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="hidden lg:inline-flex" />
                            <CarouselNext className="hidden lg:inline-flex" />
                        </Carousel>
                    </TabsContent>
                ))}

                <span className="text-sm text-center select-none text-attention-gradient lg:hidden">
                    {"<<"} swiper, yes swiping! {">>"}
                </span>
            </Tabs>
        </section>
    );
}
