import { FolderClosed, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="section mt-24">
            <div className="flex flex-col items-center gap-12">
                <div className="flex flex-col items-center gap-6">
                    <h1 className="text-6xl font-bold">Hi, I'm Gunique.</h1>
                    <p className="text-lg text-zinc-400">
                        I'm a passionate developer that builds fast, scalable web apps and custom Discord bots. 🔥
                    </p>
                </div>

                <div className="flex flex-row items-center gap-6">
                    <Button asChild className="cursor-pointer" variant={"outline"} size={"lg"}>
                        <Link href="/projects">
                            <FolderClosed /> My Projects
                        </Link>
                    </Button>

                    <Button asChild className="cursor-pointer" variant={"outline"} size={"lg"}>
                        <Link href="https://github.com/xsqu1znt" target="_blank">
                            <GitBranch /> Github
                        </Link>
                    </Button>
                </div>
            </div>

            <hr className="border-zinc-800 w-md mt-12" />
        </section>
    );
}
