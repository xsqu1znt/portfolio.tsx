"use client";

import BubbleTag from "@/components/BubbleTag";
import { motion } from "motion/react";

export default function AboutMe() {
    return (
        <section id="about" className="section">
            {/* <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="text-3xl font-bold">About Me</h2>
                <p className="text-zinc-500">🚧 This section is under construction 🚧</p>
            </div> */}

            {/* Slideshow Container */}
            <div className="w-full h-full overflow-y-scroll leading-relaxed snap-y snap-proximity no-scrollbar">
                {/* Slide */}
                <div className="flex flex-col items-center justify-center w-full h-full snap-start">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ amount: "all" }}
                        className="flex flex-col items-center justify-center gap-8 max-w-[70%]"
                    >
                        <span className="font-bold text-8xl">Hi, I'm Gunique.</span>
                        <span className="text-4xl text-zinc-500">
                            I am a developer from the USA who takes his work seriously.
                        </span>
                    </motion.div>
                </div>

                {/* Slide */}
                <div className="flex flex-col items-center justify-center w-full h-full snap-start">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ amount: "all" }}
                        className="flex flex-col items-center justify-center gap-8 max-w-[70%]"
                    >
                        <span className="text-4xl text-zinc-500">
                            I have <span className="italic font-bold text-zinc-300">4+ years experience</span> freelancing,
                            <br /> and building real-world web apps and custom bots.
                        </span>
                    </motion.div>
                </div>

                {/* Slide */}
                <div className="flex flex-col items-center justify-center w-full h-full snap-start">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ amount: "all" }}
                        className="flex flex-col items-center justify-center gap-6 max-w-[70%] text-center"
                    >
                        <span className="text-4xl text-zinc-500">I've worked with real clients to build systems for</span>
                        <span className="font-bold text-7xl text-zinc-300">
                            Automation, Moderation <br /> Dashboards & Analytics
                        </span>

                        <div className="flex items-end gap-4">
                            <div className="px-2 py-1 pb-2 text-4xl font-normal border rounded-lg border-white/10">
                                <span>and yes... even</span>
                            </div>

                            <span className="font-bold text-7xl text-shine-gradient">AI.</span>
                        </div>
                    </motion.div>
                </div>

                <div className="flex flex-col items-center justify-center w-full h-full snap-start">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ amount: "all" }}
                        className="flex flex-col items-center justify-center gap-8 max-w-[70%]"
                    >
                        <span className="text-4xl font-light text-zinc-500">
                            I’m comfortable <span className="">working with both backend and frontend,</span> <br /> and can
                            learn <span className="italic font-bold underline">any framework or language</span> required to
                            get the job done.
                        </span>
                    </motion.div>
                </div>

                <div className="flex flex-col items-center justify-center w-full h-full snap-start">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ amount: "all" }}
                        className="flex flex-col items-center justify-center gap-8 max-w-[70%]"
                    >
                        <span className="text-4xl text-zinc-500">
                            I’m currently looking for{" "}
                            <span className="font-bold text-zinc-300">- remote job opportunities -</span> where I can bring
                            value, grow with a team, and work on meaningful projects.
                        </span>
                    </motion.div>
                </div>
            </div>

            {/* <div className="flex flex-col max-w-4xl gap-6 leading-relaxed text-center text-zinc-400">
                <p className="text-3xl font-semibold">👋 Hi, I'm Gunique.</p>

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
            </div> */}
        </section>
    );
}
