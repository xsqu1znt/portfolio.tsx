import { FiverrSocialFLB, GithubSocialFLB, LinkedinSocialFLB } from "@/components/buttons";
import { ChevronDown, FileText, Phone } from "lucide-react";
import { Button } from "@/components/ui";
import "./index.css";

export function HeroV2() {
    return (
        <section id="home" className="section relative h-[85vh]">
            <div className="section-content section-center h-[85vh] flex-col">
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
                    <p>I'm a 21 year old SWE from the USA.</p>
                    <p>Automating workflows and building real-time web apps for business is what I do.</p>
                </div>

                {/* CTA */}
                <div className="animated-white-outline mt-4 flex flex-col gap-4 rounded-lg border border-white/10 bg-black/10 p-6">
                    <div className="flex items-center justify-between gap-4">
                        <span>#Socials</span>

                        <div className="flex items-center gap-4">
                            <GithubSocialFLB />
                            <LinkedinSocialFLB />
                            <FiverrSocialFLB />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-4 flex gap-4">
                        <Button asChild size="lg" variant="default">
                            <a href="#contact" rel="noopener noreferrer" target="_blank">
                                <Phone size={18} />
                                Contact Me
                            </a>
                        </Button>

                        <Button asChild size="lg" variant="outline">
                            <a href="/resume" rel="noopener noreferrer" target="_blank">
                                <FileText size={18} />
                                Resume
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Swipe down indicator */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce opacity-75">
                <Button asChild size="icon" variant="link">
                    <a href="#projects">
                        <ChevronDown className="size-8" />
                    </a>
                </Button>
            </div>
        </section>
    );
}
