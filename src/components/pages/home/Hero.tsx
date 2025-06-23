"use client";

import { FiverrSocialFLB, GithubSocialFLB, LinkedinSocialFLB } from "@/components/buttons";
import { isMobile } from "react-device-detect";
import { MapPin } from "lucide-react";
import { useMouseLerp } from "@/hooks";

import "./index.css";

export function Hero() {
    const { elementRef: nameRef } = useMouseLerp<HTMLHeadingElement>({
        lerpFactor: 0.075,
        offset: { x: 2, y: 1 },
        lookAt: true,
        enabled: !isMobile
    });

    return (
        <section id="home" className="page-container relative">
            <div className="page-content content-center not-lg:-mt-16">
                {/* Header container */}
                <div className="flex cursor-default flex-col duration-300">
                    {/* CONST container */}
                    <div className="overflow-hidden py-2 text-lg font-bold not-lg:-mb-2 lg:text-2xl">
                        <div className="revealUp">
                            <span className="opacity-25">
                                CONST NAME:{" "}
                                <span className="rounded-sm border-2 border-dashed border-transparent bg-white/10 px-1 transition-colors hover:border-white/25 lg:px-2 lg:py-1">
                                    STRING
                                </span>{" "}
                                =
                            </span>
                        </div>
                    </div>

                    {/* My name */}
                    <div ref={nameRef} className="flex flex-row text-7xl font-bold lg:text-9xl">
                        {Array.from("Gunique").map((char, index) => (
                            <span key={index} className="fadeSlideInUp" style={{ animationDelay: `${index * 100}ms` }}>
                                {char}
                            </span>
                        ))}
                    </div>

                    {/* Location/occupation container */}
                    <div className="mt-4 place-self-center overflow-hidden text-lg font-bold lg:mt-6 lg:place-self-end lg:text-2xl">
                        <div className="revealDown flex flex-row items-center gap-2">
                            {/*<CakeSlice size={24} />*/}
                            {/*<p>{calculateAge(new Date(2003, 9, 10))} years old</p>*/}
                            <div className="group/location flex flex-row items-center gap-1 opacity-25 transition-opacity hover:opacity-75 lg:gap-2">
                                <MapPin className="size-[17px] fill-transparent transition-colors delay-200 duration-300 group-hover/location:fill-red-400 group-hover/location:text-black lg:size-[24px]" />
                                <p>Hawaii, USA</p>
                            </div>
                            <p className="opacity-25">-</p>
                            <span className="opacity-25 transition-opacity hover:opacity-75">Full Stack SWE</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social links (Mobile only) */}
            <div
                className="fadeIn absolute bottom-16 flex items-center gap-6 place-self-center rounded-full border border-white/10 p-3 lg:hidden"
                style={{ animationDelay: "2s" }}
            >
                <GithubSocialFLB />
                <LinkedinSocialFLB />
                <FiverrSocialFLB />
            </div>

            {/* Social links (Desktop only) */}
            <div
                className="fadeIn absolute bottom-16 left-16 flex flex-col gap-6 not-lg:hidden"
                style={{ animationDelay: "2s" }}
            >
                <GithubSocialFLB />
                <LinkedinSocialFLB />
                <FiverrSocialFLB />
            </div>

            {/* Quick info */}
            <div
                className="fadeSlideInUp absolute bottom-16 flex cursor-default items-center gap-4 place-self-center rounded-lg border border-white/10 px-6 py-2 text-lg"
                style={{ animationDelay: "1s" }}
            >
                <span className="opacity-50">
                    <span className="text-2xl font-bold">5+</span> years experience
                </span>
                <span className="opacity-25">{"</>"}</span>
                <span className="opacity-50">
                    <span className="text-2xl font-bold">20+</span> client projects
                </span>
            </div>

            {/* Scroll indicator */}
            <div className="fadeIn absolute right-16 bottom-16" style={{ animationDelay: "2s" }}>
                <div className="flex cursor-default flex-col items-center text-lg opacity-25 *:transition-opacity *:duration-300 *:hover:opacity-50">
                    {Array.from("SCROLL|").map((letter, index) => (
                        <span key={index} className="delayedPulse" style={{ animationDelay: `${index * 100}ms` }}>
                            {letter}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
