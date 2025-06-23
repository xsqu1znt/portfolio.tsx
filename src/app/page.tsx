"use client";

import { Navbar } from "@/components/layout";
import { Hero, HeroV2, Projects } from "@/components/pages/home";
import { MouseGlow } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";
import { useState } from "react";

export default function Home() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };

    return (
        <main className="relative overflow-x-hidden">
            <div className="h-screen w-screen snap-y snap-mandatory snap-always overflow-x-hidden overflow-y-scroll scroll-smooth">
                <Navbar toggleMobileNav={toggleNav} mobileNavIsOpen={mobileNavOpen} />
                {/* <Hero /> */}
                <HeroV2 />
                <Projects />
                {/*<AboutMe />*/}
                {/*<TechStack />*/}
                {/*<ContactMe />*/}
            </div>

            {/* TODO: This shouldn't be here, and make it a component. */}
            <div
                className={`bg-card absolute top-0 z-50 flex h-screen w-screen flex-col gap-6 border-white/10 p-6 transition-all duration-300 ease-[cubic-bezier(.15,1.05,.81,1)] lg:w-[30%] lg:border-l ${
                    mobileNavOpen ? "right-0 opacity-100" : "right-0 translate-x-full opacity-0"
                }`}
            >
                <ul className="nav-h-margin">
                    <li className="flex flex-col items-center gap-6">
                        <a
                            href="/#projects"
                            rel="noopener noreferrer"
                            className="flex w-full justify-center text-lg hover:underline"
                            onClick={toggleNav}
                        >
                            Projects
                        </a>
                        <a
                            href="/#about"
                            rel="noopener noreferrer"
                            className="flex w-full justify-center text-lg hover:underline"
                            onClick={toggleNav}
                        >
                            About
                        </a>
                        <a
                            href="/#tech"
                            rel="noopener noreferrer"
                            className="flex w-full justify-center text-lg hover:underline"
                            onClick={toggleNav}
                        >
                            Tech
                        </a>
                        <a
                            href="/#contact"
                            rel="noopener noreferrer"
                            className="flex w-full justify-center text-lg hover:underline"
                            onClick={toggleNav}
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                <Button asChild variant={"outline"} size={"lg"}>
                    <a
                        href="/Gunique Grimble - Full Stack Web Developer Resume.pdf"
                        rel="noopener noreferrer"
                        download="Gunique Grimble - Full Stack Web Developer Resume.pdf"
                    >
                        <Download /> Resume
                    </a>
                </Button>
            </div>

            {/* <MouseGlow /> */}
        </main>
    );
}
