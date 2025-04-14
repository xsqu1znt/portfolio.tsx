import { Navbar } from "@/components/Navbar";

import Hero from "@/components/Sections/Hero";
import Projects from "@/components/Sections/Projects";
import AboutMe from "@/components/Sections/AboutMe";

export default function Home() {
    return (
        <div className="">
            <main className="">
                <Navbar />
                <div className="">
                    <Hero />
                    <Projects />
                    <AboutMe />
                </div>
            </main>
        </div>
    );
}
