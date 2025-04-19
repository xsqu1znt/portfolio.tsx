import BubbleTag from "@/components/ui/bubbleTag";

export default function Skills() {
    return (
        <section id="skillset" className="section">
            <div className="flex flex-col items-center gap-4">
                <h2 className="text-3xl font-bold">Technolgies</h2>
                <p className="text-zinc-400">My skillset and the technology I've used in my projects.</p>
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <span className="text-lg text-bold">Tech:</span>

                    <div className="flex flex-wrap gap-4">
                        <BubbleTag size="md">NodeJS</BubbleTag>
                        <BubbleTag size="md">Next.js</BubbleTag>
                        <BubbleTag size="md">React</BubbleTag>

                        <BubbleTag size="md">Discord.js</BubbleTag>

                        <BubbleTag size="md">MongoDB</BubbleTag>
                        <BubbleTag size="md">Mongoose</BubbleTag>
                        <BubbleTag size="md">SQL</BubbleTag>

                        <BubbleTag size="md">Electron</BubbleTag>
                        <BubbleTag size="md">Docker</BubbleTag>
                        
                        <BubbleTag size="md">Amazon EC2</BubbleTag>

                        <BubbleTag size="md">FFMpeg</BubbleTag>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <span className="text-lg text-bold">Languages:</span>

                    <BubbleTag size="md">Javascript</BubbleTag>
                    <BubbleTag size="md">Typescript</BubbleTag>
                    <BubbleTag size="md">Python</BubbleTag>
                    <BubbleTag size="md">HTML</BubbleTag>
                    <BubbleTag size="md">CSS</BubbleTag>
                </div>
            </div>
        </section>
    );
}
