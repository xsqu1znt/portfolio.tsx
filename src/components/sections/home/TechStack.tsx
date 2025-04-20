"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import techNotes from "@/constants/techNotes";
import NoteCard from "@/components/NoteCard";

let flipInterval: any;

export default function TechStack() {
    const rootRef = useRef(null);

    const [cardOffsetY, setCardOffsetY] = useState(20);
    const [cardScaleFactor, setCardScaleFactor] = useState(0.06);
    const [notes, setNotes] = useState(techNotes);

    const handleShow = (idx: number) => {
        setNotes(prev => {
            const newNotes = [...prev];
            const temp = newNotes.splice(idx, 1);
            newNotes.unshift(temp[0]);
            return newNotes;
        });
    };

    /* useEffect(() => {
        flipCards();

        return () => clearInterval(flipInterval);
    }, []);

    const flipCards = () => {
        flipInterval = setInterval(() => {
            setNotes((prevNotes: any) => {
                const newArray = [...prevNotes]; // create a copy of the array
                newArray.unshift(newArray.pop()!); // move the last element to the front
                return newArray;
            });
        }, 1000);
    }; */

    return (
        <section id="techstack" className="section">
            <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="text-3xl font-bold">Tech Stack</h2>
                <p className="text-zinc-500">The tech I'm expierenced in working with.</p>
            </div>

            <div ref={rootRef} className="relative mt-12 w-120 h-60">
                {notes.map((note, i) => {
                    return (
                        <motion.div
                            key={i}
                            className="absolute flex flex-col justify-between w-120"
                            style={{ transformOrigin: "top center" }}
                            transition={{ duration: 0.3 }}
                            initial={{
                                top: -100 - i * -(cardOffsetY * 4),
                                scale: 1,
                                zIndex: notes.length - i,
                                opacity: 0
                            }}
                            whileInView={{
                                top: i * -cardOffsetY,
                                left: (i * cardOffsetY) * 2,
                                scale: 1 - i * cardScaleFactor,
                                zIndex: notes.length - i,
                                rotateZ: i * 3,
                                opacity: 1 - (i / notes.length)
                            }}
                            whileHover={{
                                top: i * -cardOffsetY - (i ? 50 : 0),
                                zIndex: notes.length,
                                scale: 1,
                                opacity: 1,
                                rotateZ: 0
                            }}
                            viewport={{ amount: "all", root: rootRef }}
                        >
                            <NoteCard
                                key={i}
                                title={note.title}
                                content={note.content}
                                onClickGreen={() => handleShow(i)}
                                className="w-120 h-60"
                            />
                        </motion.div>
                    );
                })}
            </div>

            <span className="text-sm select-none text-attention-gradient">check out the stack flow</span>
            {/* <span className="text-sm select-none text-attention-gradient">you can swipe {">>"} to see more, btw</span> */}
        </section>
    );
}
