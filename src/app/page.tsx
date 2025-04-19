import { Navbar } from "@/components/navbar";

import Hero from "@/components/sections/home/hero";
import Projects from "@/components/sections/home/topProjects";
import AboutMe from "@/components/sections/home/aboutMe";
import Skills from "@/components/sections/home/skills";
import ContactMe from "@/components/sections/home/contactMe";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <main>
            <Navbar />
            <div>
                <Hero />
                <Projects />
                <AboutMe />
                <Skills />
                <ContactMe />
            </div>
            <Footer />
        </main>
    );
}
