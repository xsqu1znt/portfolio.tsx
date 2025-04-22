"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/home/Hero";
import TopProjects from "@/components/sections/home/TopProjects";
import AboutMe from "@/components/sections/home/AboutMe";
import TechStack from "@/components/sections/home/TechStack";
import ContactMe from "@/components/sections/home/ContactMe";
import Link from "next/link";

export default function Home() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };

    return (
        <main className="relative overflow-x-hidden">
            <div className="w-screen h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory snap-always scroll-smooth touch-pan-y">
                <Navbar toggleMobileNav={toggleNav} mobileNavIsOpen={mobileNavOpen} />
                <Hero />
                <TopProjects />
                <AboutMe />
                <TechStack />
                <ContactMe />
            </div>

            <div
                className={`absolute top-0 w-screen lg:w-[30%] h-screen bg-card lg:border-l border-white/10 flex flex-col p-6 gap-6 transition-all duration-300 ease-[cubic-bezier(.15,1.05,.81,1)] ${
                    mobileNavOpen ? "right-0 opacity-100" : "right-0 opacity-0 translate-x-full"
                }`}
            >
                <ul className="nav-h-margin">
                    <li className="flex flex-col items-center gap-6">
                        <Link href="#home" className="flex justify-center w-full text-lg hover:underline">
                            Home
                        </Link>
                        <Link href="#projects" className="flex justify-center w-full text-lg hover:underline">
                            Projects
                        </Link>
                        <Link href="#about" className="flex justify-center w-full text-lg hover:underline">
                            About
                        </Link>
                        <Link href="#contact" className="flex justify-center w-full text-lg hover:underline">
                            Contact
                        </Link>
                    </li>
                </ul>

                <Button asChild className="cursor-pointer" variant={"outline"} size={"lg"}>
                    <Link href="/resume">
                        <Download /> Resume
                    </Link>
                </Button>
            </div>
        </main>
    );
}
