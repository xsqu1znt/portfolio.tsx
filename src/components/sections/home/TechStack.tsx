"use client";

import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { clampOverflow, useSafeMediaQuery } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import NoteCard from "@/components/NoteCard";
import tech from "@/constants/tech";

export default function TechStack() {
    const [mousePosition, setMousePosition] = useState({ x: 0, xNormalized: 0, y: 0, yNormalized: 0 });

    const [cards, setCards] = useState(tech.map((t, idx) => ({ index: idx, ...t })));
    const [cardSize, setCardSize] = useState({ w: 320, h: 240 });
    const [canPlay, setCanPlay] = useState(true);
    const canPlayRef = useRef(canPlay);

    const mediaIsLarge = useSafeMediaQuery("(width >= 64rem)");
    const mediaIsShort = useSafeMediaQuery("(height <= 500px)");

    useEffect(() => {
        canPlayRef.current = canPlay;
    }, [canPlay]);

    useEffect(() => {
        let size = { w: 0, h: 0 };

        if (mediaIsLarge) {
            size.w = 700;
            size.h = 320;
        } else {
            size.w = 320;
            size.h = 240;
        }

        if (mediaIsShort) {
            size.h = 160;
        }

        setCardSize(size);
    }, [mediaIsLarge, mediaIsShort]);

    useEffect(() => {
        if (isMobile) {
            setMousePosition({ x: 0, xNormalized: 0, y: 0, yNormalized: 0 });
            return;
        }

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                xNormalized: (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2),
                y: e.clientY,
                yNormalized: (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2)
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!canPlayRef.current) return;
            setCards(prev => prev.map(c => ({ ...c, index: clampOverflow(c.index - 1, cards.length - 1) })));
        }, 5_000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="tech" className="slide">
            <div className="slide-inner slide-inner-col">
                <div className="z-10 slide-header">
                    <h2>Tech Stack</h2>
                    <Popover>
                        <PopoverTrigger>
                            <p className="text-base font-normal text-zinc-500">
                                The tech I'm experienced in working with.{" "}
                                <span className="text-shine-gradient">{isMobile ? "Tap" : "Click"} me for a rant.</span>
                            </p>
                        </PopoverTrigger>
                        <PopoverContent className="border-zinc-600">
                            <span>
                                This stack effect was originally done using the{" "}
                                <a
                                    href="https://motion.dev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-accent-primary"
                                >
                                    Motion
                                </a>{" "}
                                library. <br /> I then realized the shuffling effect was very bugged on Chromium browsers (I
                                use Firefox). <br /> <br /> So I remade the effect entirely from scratch. ☠️
                            </span>
                        </PopoverContent>
                    </Popover>
                </div>

                <div
                    className="relative techstack-margin-responsive-short"
                    style={{ width: `${cardSize.w}px`, height: `${cardSize.h}px` }}
                >
                    {cards.map((card, idx) => {
                        const [isHovering, setIsHovering] = useState(false);

                        const offset = { x: 50, y: !mediaIsShort ? 25 : 10 };
                        const scaleFactor = 0.06;
                        const hoverScaleFactor = 1.05;

                        return (
                            <div
                                key={idx}
                                className="absolute transition-all duration-500 ease-out"
                                style={{
                                    width: `${cardSize.w - scaleFactor * card.index}px`,
                                    height: `${cardSize.h}px`,
                                    scale: isHovering ? 1 * hoverScaleFactor : 1 - scaleFactor * card.index,
                                    top: `${card.index * -offset.y + card.index * offset.y * mousePosition.yNormalized}px`,
                                    left: `${card.index * -offset.x * -mousePosition.xNormalized}px`,
                                    opacity: `${1 - card.index / cards.length}`,
                                    zIndex: cards.length - card.index
                                }}
                                onMouseEnter={() => {
                                    setIsHovering(!card.index && !isMobile ? true : false);
                                    setCanPlay(!card.index && !isMobile ? false : true);
                                }}
                                onMouseLeave={() => {
                                    setIsHovering(false);
                                    setCanPlay(true);
                                }}
                            >
                                <NoteCard
                                    title={card.title}
                                    content={card.content}
                                    className={`w-full h-full ${
                                        !card.index && "border-zinc-600 drop-shadow-lg"
                                    } transition-all duration-1000`}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
