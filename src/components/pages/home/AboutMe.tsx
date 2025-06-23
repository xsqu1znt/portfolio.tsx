"use client";

import { motion } from "motion/react";

export function AboutMe() {
    return (
        <section id="about" className="slide">
            <div className="slide-inner-no-padding">
                {/* Slideshow Container */}
                <div className="no-scrollbar flex snap-x snap-mandatory snap-always flex-row flex-nowrap overflow-x-scroll scroll-smooth lg:snap-y lg:flex-col lg:overflow-y-scroll [&>div]:h-screen [&>div]:w-screen [&>div]:shrink-0 [&>div]:snap-start [&>div]:p-4">
                    {/* Slide */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col justify-center lg:items-center"
                    >
                        <div className="flex max-w-6xl flex-col justify-center gap-4 lg:items-center lg:gap-8">
                            <span className="text-6xl font-bold lg:text-8xl">Hi, I'm Gunique.</span>
                            <span className="text-2xl text-zinc-500 lg:text-4xl">
                                I am a developer from the USA who takes his work seriously.
                            </span>
                            <span className="text-shine-gradient select-none lg:hidden">
                                you can swipe {">>"} to see more, btw
                            </span>
                        </div>
                    </motion.div>

                    {/* Slide */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col justify-center lg:items-center"
                    >
                        <div className="flex max-w-6xl flex-col justify-center gap-4 lg:items-center lg:gap-8">
                            <span className="text-2xl text-zinc-500 lg:text-4xl">
                                I have <span className="font-bold text-zinc-300 italic">5+ years experience</span>{" "}
                                freelancing,
                                <br /> and building real-world web apps and custom bots.
                            </span>
                        </div>
                    </motion.div>

                    {/* Slide */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col justify-center lg:items-center"
                    >
                        <div className="flex max-w-6xl flex-col justify-center gap-4 lg:items-center lg:gap-8">
                            <span className="text-2xl text-zinc-500 lg:text-4xl">
                                I've worked with real clients to build systems for
                            </span>
                            <span className="text-5xl font-bold text-zinc-300 lg:text-7xl">
                                Automation, Moderation <br /> Dashboards & Analytics
                            </span>

                            <div className="flex items-end gap-4">
                                <div className="rounded-lg border border-white/10 px-2 py-1 pb-2 text-2xl font-normal lg:text-4xl">
                                    <span>and yes... even</span>
                                </div>

                                <span className="text-shine-gradient text-5xl font-bold lg:text-7xl">AI.</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col justify-center lg:items-center"
                    >
                        <div className="flex max-w-6xl flex-col justify-center gap-4 lg:items-center lg:gap-8">
                            <span className="text-2xl font-light text-zinc-500 lg:text-4xl">
                                I’m comfortable <span className="">working with both backend and frontend,</span> <br /> and
                                can learn <span className="font-bold italic underline">any framework or language</span>{" "}
                                required to get the job done.
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col justify-center lg:items-center"
                    >
                        <div className="flex max-w-6xl flex-col justify-center gap-4 lg:items-center lg:gap-8">
                            <span className="text-2xl text-zinc-500 lg:text-4xl">
                                I’m currently looking for{" "}
                                <span className="font-bold text-zinc-300">remote job opportunities</span> where I can bring
                                value, grow with a team, and work on meaningful projects.
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
