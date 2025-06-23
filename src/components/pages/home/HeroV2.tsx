import { FiverrSocialFLB, GithubSocialFLB, LinkedinSocialFLB } from "@/components/buttons";
import "./index.css";
import { ChevronDown, FileText, Folder, FolderClosed, GitBranch, Phone } from "lucide-react";

export function HeroV2() {
    return (
        <section id="home" className="section relative h-[80vh]">
            <div className="section-content section-center h-[80vh] flex-col">
                {/* Name */}
                <div className="flex flex-col leading-[1.2] tracking-tight">
                    <span className="cursor-default text-lg opacity-75">
                        CONST NAME:{" "}
                        <span className="rounded-sm border-2 border-dashed border-transparent bg-white/10 px-1 transition-colors hover:border-white/25 lg:px-2 lg:py-1">
                            STRING
                        </span>
                    </span>
                    <span className="mt-2 text-6xl font-bold">Gunique G.</span>
                </div>

                {/* Summary */}
                <div className="max-w-prose text-center text-lg opacity-75">
                    <p>I'm a 21 year old SWE from the USA who builds fun, tasteful web apps.</p>
                </div>

                {/* CTA */}
                <div className="mt-4 flex gap-4">
                    <button className="bg-accent text-md flex items-center gap-2 rounded-lg border border-blue-400 px-4 py-2 font-medium whitespace-nowrap">
                        {/* <FolderClosed size={18} /> */}
                        <Phone size={18} />
                        Contact Me
                    </button>

                    <button className="btn-animated-outline text-md flex items-center gap-2 rounded-lg px-4 py-2 font-medium whitespace-nowrap">
                        <FileText size={18} />
                        Resume
                    </button>

                    {/* <button className="btn-animated-outline text-md flex items-center gap-2 rounded-lg px-4 py-2 font-medium whitespace-nowrap">
                        <GitBranch size={18} />
                        Github
                    </button> */}
                </div>
            </div>

            {/* Social Links */}
            <div className="absolute bottom-18 left-1/2 flex -translate-x-1/2 items-center gap-4">
                <GithubSocialFLB />
                <LinkedinSocialFLB />
                <FiverrSocialFLB />
            </div>

            {/* Swipe down indicator */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce opacity-75">
                <ChevronDown className="size-8" />
            </div>
        </section>
    );
}
