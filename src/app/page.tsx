import { Navbar } from "@/components/Navbar";

import Hero from "@/components/Sections/Hero";
import Projects from "@/components/Sections/TopProjects";
import AboutMe from "@/components/Sections/AboutMe";
import ContactMe from "@/components/Sections/ContactMe";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <Navbar />
            <div>
                <Hero />
                <Projects />
                <AboutMe />
                <ContactMe />
            </div>
            <Footer />
        </main>
    );
}
