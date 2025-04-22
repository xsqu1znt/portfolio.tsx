"use client";

import { motion } from "motion/react";

export default function AboutMe() {
    return (
        <section id="about" className="slide">
            <div className="slide-inner-no-padding">
                {/* Slideshow Container */}
                <div className="flex flex-row lg:flex-col flex-nowrap overflow-x-scroll lg:overflow-y-scroll snap-x lg:snap-y snap-always scroll-smooth snap-mandatory [&>div]:w-screen [&>div]:h-screen [&>div]:p-4 [&>div]:shrink-0 [&>div]:snap-start no-scrollbar">
                    {/* Slide */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col justify-center lg:items-center"
                    >
                        <div className="flex flex-col justify-center max-w-6xl gap-4 lg:gap-8 lg:items-center">
                            <span className="text-6xl font-bold lg:text-8xl">Hi, I'm Gunique.</span>
                            <span className="text-2xl lg:text-4xl text-zinc-500">
                                I am a developer from the USA who takes his work seriously.
                            </span>
                            <span className="select-none text-shine-gradient lg:hidden">
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
                        <div className="flex flex-col justify-center max-w-6xl gap-4 lg:gap-8 lg:items-center">
                            <span className="text-2xl lg:text-4xl text-zinc-500">
                                I have <span className="italic font-bold text-zinc-300">4+ years experience</span>{" "}
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
                        <div className="flex flex-col justify-center max-w-6xl gap-4 lg:gap-8 lg:items-center">
                            <span className="text-2xl lg:text-4xl text-zinc-500">
                                I've worked with real clients to build systems for
                            </span>
                            <span className="text-5xl font-bold lg:text-7xl text-zinc-300">
                                Automation, Moderation <br /> Dashboards & Analytics
                            </span>

                            <div className="flex items-end gap-4">
                                <div className="px-2 py-1 pb-2 text-2xl font-normal border rounded-lg lg:text-4xl border-white/10">
                                    <span>and yes... even</span>
                                </div>

                                <span className="text-5xl font-bold lg:text-7xl text-shine-gradient">AI.</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col justify-center lg:items-center"
                    >
                        <div className="flex flex-col justify-center max-w-6xl gap-4 lg:gap-8 lg:items-center">
                            <span className="text-2xl font-light lg:text-4xl text-zinc-500">
                                I’m comfortable <span className="">working with both backend and frontend,</span> <br /> and
                                can learn <span className="italic font-bold underline">any framework or language</span>{" "}
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
                        <div className="flex flex-col justify-center max-w-6xl gap-4 lg:gap-8 lg:items-center">
                            <span className="text-2xl lg:text-4xl text-zinc-500">
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
