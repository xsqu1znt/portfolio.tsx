import { BubbleTag } from "@/components/ui";
import { NoTouchPropagation } from "@/components/common";

export function Projects() {
    return (
        <section id="projects" className="section">
            <div className="section-content section-center">
                <div className="flex flex-col gap-4">
                    {/* Placeholder Project 1 */}
                    <div className="grid grid-cols-2 gap-4 rounded-lg border border-white/10 p-4">
                        <div className="h-full w-full animate-pulse rounded-lg bg-white/5"></div>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl">Adverb</h2>
                            <p className="text-sm opacity-75">AI-powered copywriter tool</p>

                            <NoTouchPropagation>
                                <div className="no-scrollbar flex w-full touch-pan-x items-center gap-2 whitespace-nowrap not-lg:overflow-x-auto lg:flex-wrap">
                                    <BubbleTag size={"sm"}>TypeScript</BubbleTag>
                                    <BubbleTag size={"sm"}>Next.js</BubbleTag>
                                    <BubbleTag size={"sm"}>TailwindCSS</BubbleTag>
                                    <BubbleTag size={"sm"}>OpenAI</BubbleTag>
                                    <BubbleTag size={"sm"}>Supabase</BubbleTag>
                                    <BubbleTag size={"sm"}>Vercel</BubbleTag>
                                </div>
                            </NoTouchPropagation>
                        </div>
                    </div>

                    {/* Placeholder Project 2 */}
                    <div className="grid grid-cols-2 gap-4 rounded-lg border border-white/10 p-4">
                        <div className="order-last h-full w-full animate-pulse rounded-lg bg-white/5"></div>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl">Vinted Discord Bot</h2>
                            <p className="text-sm opacity-75">Real-time listing notifications and more</p>

                            <NoTouchPropagation>
                                <div className="no-scrollbar flex w-full touch-pan-x items-center gap-2 whitespace-nowrap not-lg:overflow-x-auto lg:flex-wrap">
                                    <BubbleTag size={"sm"}>TypeScript</BubbleTag>
                                    <BubbleTag size={"sm"}>Express</BubbleTag>
                                    <BubbleTag size={"sm"}>Playwright</BubbleTag>
                                    <BubbleTag size={"sm"}>Discord.js</BubbleTag>
                                    <BubbleTag size={"sm"}>MongoDB</BubbleTag>
                                    <BubbleTag size={"sm"}>Render</BubbleTag>
                                </div>
                            </NoTouchPropagation>
                        </div>
                    </div>
                </div>

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
