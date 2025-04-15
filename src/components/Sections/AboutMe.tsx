export default function AboutMe() {
    return (
        <section id="about" className="flex flex-col items-center justify-center px-6 py-12 space-y-12">
            <h2 className="text-3xl font-bold">About Me</h2>

            <div className="max-w-[750px]">
                <p className="text-zinc-400 leading-relaxed">
                    I’m a self-taught JavaScript/TypeScript developer with 4 years of freelance experience building custom
                    Discord bots and web applications. I specialize in creating fast, scalable backends with clean, intuitive
                    UIs using tools like <span className="text-white">Next.js, TailwindCSS, and Discord.js</span>.
                    <br />
                    <br />
                    Most of my work has been client-based, building systems for automation, moderation, dashboards, and data
                    handling. I’m comfortable with both frontend and backend—and I enjoy solving technical problems with
                    practical, real-world solutions.
                    <br />
                    <br />
                    I’m currently looking for <span className="text-white">remote developer opportunities</span> where I can
                    bring value, grow with a team, and work on meaningful projects.
                </p>
            </div>
        </section>
    );
}
