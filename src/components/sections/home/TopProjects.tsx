import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/constants/projects";

export default function TopProjects() {
    const topProjects = Object.entries(projects).map(([category, values]) => ({
        category,
        cards: values.slice(0, 3).map((p, i) => <ProjectCard key={i} project={p} className="w-xs lg:w-sm" />)
    }));

    return (
        <section id="projects" className="slide">
            <div className="slide-inner slide-inner-split-short">
                <div className="slide-header">
                    <h2>
                        🏆 <br /> Top Projects
                    </h2>
                    <p className="text-zinc-500 not-lg:hidden">The ones I love the most.</p>
                    <p className="text-sm text-center select-none text-attention-gradient lg:hidden">
                        {"<<"} swiper, yes swiping! {">>"}
                    </p>
                </div>

                <Tabs defaultValue={topProjects[0].category}>
                    <TabsList className="lg:mb-2 place-self-center">
                        {topProjects.map((p, idx) => (
                            <TabsTrigger key={idx} value={p.category} className="px-8 cursor-pointer">
                                {p.category}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {topProjects.map((cat, i) => (
                        <TabsContent key={i} value={cat.category}>
                            <Carousel className="w-[325px] lg:w-[384px]">
                                <CarouselContent>
                                    {cat.cards.map((c, idx) => (
                                        <CarouselItem key={idx}>{c}</CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="not-lg:hidden" />
                                <CarouselNext className="not-lg:hidden" />
                            </Carousel>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
}
