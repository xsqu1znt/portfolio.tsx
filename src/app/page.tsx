import { Navbar } from "@/components/Navbar";

import Hero from "@/components/sections/home/Hero";
import TopProjects from "@/components/sections/home/TopProjects";
import AboutMe from "@/components/sections/home/AboutMe";
import TechStack from "@/components/sections/home/TechStack";
import ContactMe from "@/components/sections/home/ContactMe";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="overflow-x-hidden">
            <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory">
                <Navbar />
                <Hero />
                <TopProjects />
                <AboutMe />
                <TechStack />
                <ContactMe />
            </div>
            {/* <Footer /> */}
        </main>
    );
}
