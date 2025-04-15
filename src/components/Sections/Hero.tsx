import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="flex flex-col justify-center gap-12 px-6 py-12">
            <div className="flex flex-col gap-12 my-24 ml-24">
                <div className="flex flex-col gap-6">
                    <h1 className="text-6xl font-bold">Hi, I'm Gunique.</h1>
                    <p className="text-lg text-zinc-400">I build fast, scalable web apps and custom Discord bots. 🔥</p>
                </div>

                <div className="flex flex-row items-center gap-6">
                    <Button asChild className="cursor-pointer">
                        <Link href="/resume">
                            <Download /> My Resume
                        </Link>
                    </Button>
                    <Button asChild className="cursor-pointer" variant={"outline"}>
                        <Link href="/projects">View Projects</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
