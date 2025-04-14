import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center px-6 py-12 space-y-12">
            <div className="flex flex-col items-center mt-12 space-y-6">
                <h1 className="text-6xl font-bold">Hi, I'm Gunique.</h1>
                <p className="text-lg text-zinc-400">I build fast, scalable web apps and custom Discord bots. 🔥</p>
            </div>

            <div className="space-x-6">
                <Button asChild className="cursor-pointer">
                    <Link href="/projects">View Projects</Link>
                </Button>
                <Button asChild className="cursor-pointer">
                    <Link href="/about">About Me</Link>
                </Button>
            </div>
        </section>
    );
}
