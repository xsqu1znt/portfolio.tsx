"use client";

import { useMouseLerp } from "@/hooks";

export function MouseGlow() {
    const { elementRef } = useMouseLerp<HTMLDivElement>({
        lerpFactor: 0.1, // Smoothness (0-1)
        threshold: 0.5, // Stop animation when this close
        offset: { x: -25, y: -25 } // Center the 50px element
    });

    return (
        <div className="pointer-events-none absolute top-0 left-0 h-screen w-screen">
            <div
                ref={elementRef}
                className="absolute top-0 left-0 -z-50 size-[50px] rounded-full bg-white opacity-50 blur-3xl"
                style={{ transform: `translate(-50%, -50%)` }}
            ></div>
        </div>
    );
}
