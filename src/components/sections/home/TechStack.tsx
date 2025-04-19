import NoteCard from "@/components/NoteCard";

export default function TechStack() {
    return (
        <section id="techstack" className="section">
            <div className="flex flex-col items-center gap-4">
                <h2 className="text-3xl font-bold">Tech Stack</h2>
                <p className="text-zinc-500">The tech I'm expierenced in working with.</p>
            </div>

            <div className="grid grid-cols-3 gap-6">
                <NoteCard
                    title="proficient_in.md"
                    content={["Javascript / Typescript / HTML / CSS", "NodeJS / Discord.js / MongoDB / Mongoose"]}
                    className="col-span-3 h-[250px]"
                />

                <NoteCard
                    title="experienced_in.md"
                    content={["Next.js / React / Express.js "]}
                    className="col-span-2 h-[250px]"
                />

                <NoteCard
                    title="familiar_with.md"
                    content={["Python / SQL", "Docker / Electron / Amazon EC2"]}
                    className="col-span-1 h-[250px]"
                />
            </div>
        </section>
    );
}
