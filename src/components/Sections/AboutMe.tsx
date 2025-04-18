export default function AboutMe() {
    return (
        <section id="about" className="flex flex-col items-center justify-center px-6 py-12 space-y-12">
            <h2 className="text-3xl font-bold">About Me</h2>

            <div className="flex flex-col gap-6 max-w-2xl text-zinc-400 leading-relaxed">
                <p className="text-3xl font-bold">👋 Hi, I'm Gunique.</p>
                <p className="[&>span]:text-2xl [&>span]:font-semibold [&>span]:text-zinc-300 [&>span]:px-1">
                    I am a developer from the USA who takes his work seriously. I have <span>4+ years experience</span>{" "}
                    freelancing, building real-world web apps and custom Discord bots.
                </p>
                <p>
                    I've worked with real clients to build systems for{" "}
                    <b>automation, moderation, AI, dashboards, and data analytics.</b> I’m comfortable working with both
                    backend and frontend, and can learn any framework or language required to get the job done.
                </p>
                <p>
                    I focus on building{" "}
                    <i>
                        clean, <span className="text-xl">scalable</span> code
                    </i>{" "}
                    to solve everyday problems. No CS degree — just curiosity, consistency, and a drive to build awesome
                    things.
                </p>
                <p className="[&>span]:text-2xl [&>span]:font-semibold [&>span]:text-zinc-300 [&>span]:px-1">
                    I’m currently <span>looking for remote job opportunities</span> where I can bring value, grow with a
                    team, and work on meaningful projects.
                </p>
            </div>
        </section>
    );
}

/* 
Hi there! I am a self-taught developer from the USA.
Currently work with web-based applications such as websites and bots, and can learn any framework or language required to get the job done.

I currently do freelance work as well.
If you have a job opprotunity, feel free to contact me!
*/
