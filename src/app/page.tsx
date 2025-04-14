import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Sections/Hero";
import Projects from "@/components/Sections/Projects";

export default function Home() {
    return (
        <div className="mx-auto">
            <main className="">
                <Navbar />
                <div className="">
                    <Hero />
                    <Projects />
                </div>
            </main>
        </div>
    );
}
