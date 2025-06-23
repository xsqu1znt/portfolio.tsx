"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

interface Props {
    toggleMobileNav?: () => any;
    mobileNavIsOpen?: boolean;
}

const SECTIONS = [
    { id: "home", value: null },
    { id: "projects", value: "🏆 Top Projects" }
];

export function Navbar(props: Props) {
    /* const [currentSection, setCurrentSection] = useState<string | null>(null);
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                const visible = entries
                    .filter(entry => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visible.length > 0) {
                    const id = visible[0].target.id;
                    const found = SECTIONS.find(sec => sec.id === id);
                    if (found) setCurrentSection(found.value);
                }
            },
            {
                // rootMargin: "-30% 0px -60% 0px", // Trigger when section is near center
                threshold: 0.2
            }
        );

        SECTIONS.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) {
                sectionRefs.current[id] = el;
                observer.observe(el);
            }
        });

        return () => observer.disconnect();
    }, []); */

    return (
        <nav className="nav-h fixed top-0 z-[100] flex w-full items-center justify-between px-8 lg:px-16">
            <div className="flex items-center gap-4">
                <a href="#home" className="cursor-pointer text-xl font-bold select-none">
                    GG
                </a>

                {/* {currentSection && (
                    <span className="rounded-full border-2 border-dashed border-white/10 px-4 py-2 text-sm select-none">
                        {currentSection}
                    </span>
                )} */}
            </div>

            {/* Mobile Menu */}
            <div className={`${!props.mobileNavIsOpen && "lg:hidden"}`}>
                <button className="hover:cursor-pointer hover:opacity-50" onClick={props.toggleMobileNav}>
                    <Menu
                        size={32}
                        className={`transition-opacity duration-100 hover:opacity-50 ${props.mobileNavIsOpen && "hidden"}`}
                    />
                    <X
                        size={32}
                        className={`transition-opacity duration-100 hover:opacity-50 ${!props.mobileNavIsOpen && "hidden"}`}
                    />
                </button>
            </div>

            {/* Desktop Menu */}
            <div className={`hidden items-center gap-6 text-xl ${!props.mobileNavIsOpen && "lg:flex"}`}>
                <ul>
                    <li className="flex items-center gap-6">
                        <a href="#projects" className="hover:underline">
                            Projects
                        </a>
                        <a href="#about" className="hover:underline">
                            About
                        </a>
                        <a href="#tech" className="hover:underline">
                            Tech
                        </a>
                        <a href="#contact" className="hover:underline">
                            Contact
                        </a>
                    </li>
                </ul>

                {/*<Button asChild variant={"outline"} size={"lg"}>
                    <a
                        href="/Gunique%20Grimble%20-%20Full%20Stack%20Web%20Developer%20Resume.pdf"
                        download="Gunique Grimble - Full Stack Web Developer Resume.pdf"
                    >
                        <Download /> Resume
                    </a>
                </Button>*/}
            </div>
        </nav>
    );
}
