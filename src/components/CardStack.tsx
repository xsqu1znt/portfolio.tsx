"use client";

import { motion } from "motion/react";
import React from "react";

interface Props {
    offset?: number;
    scaleFactor?: number;
    cards: React.ReactNode[];
}

export default function CardStack(props: Props) {
    const offset = props.offset || 10;
    const scaleFactor = props.scaleFactor || 0.06;

    const [cards, setCards] = React.useState(props.cards);

    return (
        <div className="relative w-120">
            {cards.map((card, i) => (
                <motion.div
                    key={i}
                    className="absolute flex flex-col justify-between w-120"
                    style={{ transformOrigin: "top center" }}
                    animate={{
                        top: i * -offset,
                        scale: 1 - i * scaleFactor,
                        zIndex: cards.length - i
                    }}
                >
                    {card}
                </motion.div>
            ))}
        </div>
    );
}
