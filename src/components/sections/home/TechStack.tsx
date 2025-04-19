import BubbleTag from "@/components/BubbleTag";
import NoteCard from "@/components/NoteCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function TechStack() {
    return (
        <section id="techstack" className="section">
            <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="text-3xl font-bold">Tech Stack</h2>
                <p className="text-zinc-500">The tech I'm expierenced in working with.</p>
            </div>

            <div className="flex flex-col items-center gap-4">
                <Carousel className="w-[300px] lg:w-[475px]">
                    <CarouselContent>
                        <CarouselItem>
                            <div className="p-1">
                                <NoteCard
                                    title="proficient_in.md"
                                    content={[
                                        "Javascript / Typescript / HTML / CSS",
                                        "NodeJS / Discord.js / MongoDB / Mongoose"
                                    ]}
                                    className="w-fit lg:w-[450px]"
                                />
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <NoteCard
                                    title="experienced_in.md"
                                    content={["Next.js / React / Express.js "]}
                                    className="w-fit lg:w-[450px]"
                                />
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <NoteCard
                                    title="familiar_with.md"
                                    content={["Python / SQL", "Docker / Electron / Amazon EC2"]}
                                    className="w-fit lg:w-[450px]"
                                />
                            </div>
                        </CarouselItem>
                    </CarouselContent>

                    <CarouselPrevious className="not-md:hidden" />
                    <CarouselNext className="not-md:hidden" />
                </Carousel>

                <span className="text-sm animate-text-gradient">
                    you can swipe {">>"} to see more, btw
                </span>
            </div>
        </section>
    );
}
