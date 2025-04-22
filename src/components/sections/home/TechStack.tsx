"use client";

import { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { motion } from "motion/react";
import techNotes from "@/constants/techNotes";
import NoteCard from "@/components/NoteCard";

export default function TechStack() {
    const rootRef = useRef(null);
    const sizeStyle = "w-80 lg:w-175 techcard-responsive-short";

    const [mousePosition, setMousePosition] = useState({ x: 0, xNormalized: 0, y: 0, yNormalized: 0 });

    const [cardOffset, setCardOffset] = useState({ x: 50, y: 25 });
    const [cardScaleFactor, setCardScaleFactor] = useState(0.06);

    const [notes, setNotes] = useState(techNotes.map((n, idx) => ({ index: idx, ...n })));

    useEffect(() => {
        if (isMobile) return;

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
            setNotes(prev => prev.map(note => ({ ...note, index: (note.index + 1) % notes.length })));
        }, 5_000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="techstack" className="slide">
            <div className="slide-inner slide-inner-col">
                <div className="slide-header">
                    <h2>Tech Stack</h2>
                    <p>The tech I'm expierenced in working with.</p>
                </div>

                <div ref={rootRef} className={`relative techstack-margin-responsive-short ${sizeStyle}`}>
                    {notes.map((note, idx) => {
                        return (
                            <motion.div
                                key={idx}
                                className={`absolute flex flex-col justify-between ${sizeStyle}`}
                                style={{ transformOrigin: "top center" }}
                                initial={{
                                    opacity: 0
                                }}
                                whileInView={{
                                    top: note.index * -cardOffset.y * -(mousePosition.yNormalized || -0.4),
                                    left: note.index * -cardOffset.x * -mousePosition.xNormalized,
                                    scale: 1 - note.index * cardScaleFactor,
                                    zIndex: notes.length - note.index,
                                    opacity: 1 - note.index / (notes.length * 2)
                                }}
                                whileHover={{
                                    scale: (1 - note.index * cardScaleFactor) * (!note.index ? 1.06 : 1)
                                }}
                                viewport={{ amount: "all" }}
                            >
                                <NoteCard
                                    key={idx}
                                    title={note.title}
                                    content={note.content}
                                    className={`${sizeStyle} ${
                                        !note.index && "border-2 border-zinc-600 drop-shadow-lg"
                                    } transition-colors duration-1000`}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
