import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/Carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/Tabs";
import { ProjectCard } from "@/components/cards";
import projects from "@/constants/projects";

export function Projects() {
    return (
        <section id="projects" className="section">
            <div className="section-content section-center">
                {/* Section header */}
                {/* <div className="flex flex-col leading-[1.2] tracking-tight">
                    <h2 className="mt-2 text-4xl font-bold">🏆 Top Projects</h2>
                </div> */}

                {/* <div className="grid grid-cols-2 gap-2">
                    {Object.values(projects).map(projs =>
                        projs.map((proj, i) => <ProjectCard key={i} project={proj} className="w-lg" />)
                    )}
                </div> */}

                {/* <div className="slide-header">
                    <h2>
                        🏆 <br /> Top Projects
                    </h2>
                    <p className="text-zinc-500 not-lg:hidden">The ones I love the most.</p>
                    <p className="text-attention-gradient text-center text-sm select-none lg:hidden">
                        {"<<"} swiper, yes swiping! {">>"}
                    </p>
                </div> */}

                {/* <Tabs defaultValue={topProjects[0].category}>
                    <TabsList className="place-self-center lg:mb-2">
                        {topProjects.map((p, idx) => (
                            <TabsTrigger key={idx} value={p.category} className="cursor-pointer px-8">
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
                </Tabs> */}
            </div>
        </section>
    );
}
