import React, { useCallback, useEffect, useRef } from "react";

interface Position {
    x: number;
    y: number;
}

interface OutPosition {
    x: number;
    xNormalized: number;
    y: number;
    yNormalized: number;
}

interface UseMouseLerpOptions {
    lerpFactor?: number;
    threshold?: number;
    offset?: Position;
    enabled?: boolean;
    lookAt?: boolean;
}

interface UseMouseLerpReturn<T extends HTMLElement = HTMLElement> {
    elementRef: React.RefObject<T | null>;
    currentPosition: React.RefObject<Position>;
    isAnimating: React.RefObject<boolean>;
    startAnimation: () => void;
    stopAnimation: () => void;
}

export function useMouseLerp<T extends HTMLElement = HTMLElement>(options: UseMouseLerpOptions = {}): UseMouseLerpReturn<T> {
    const { lerpFactor = 0.1, threshold = 0.5, offset = { x: 0, y: 0 }, enabled = true } = options;

    const elementRef = useRef<T>(null);
    const mousePos = useRef<Position>({ x: 0, y: 0 });
    const currentPos = useRef<OutPosition>({ x: 0, xNormalized: 0, y: 0, yNormalized: 0 });
    const animationFrameRef = useRef<number>(0);
    const isAnimating = useRef<boolean>(false);

    const lerp = useCallback((start: number, end: number, factor: number): number => {
        return start + (end - start) * factor;
    }, []);

    const animate = useCallback((): void => {
        if (!elementRef.current || !enabled) return;

        // Lerp towards mouse position
        currentPos.current.x = lerp(currentPos.current.x, mousePos.current.x, lerpFactor);
        currentPos.current.y = lerp(currentPos.current.y, mousePos.current.y, lerpFactor);

        // Lerp towards normalized mouse position
        const elementRect = elementRef.current.getBoundingClientRect();
        currentPos.current.xNormalized = lerp(
            currentPos.current.xNormalized,
            (mousePos.current.x - elementRect.left - elementRect.width / 2) / (elementRect.width / 2),
            lerpFactor
        );
        currentPos.current.yNormalized = lerp(
            currentPos.current.yNormalized,
            (mousePos.current.y - elementRect.top - elementRect.height / 2) / (elementRect.height / 2),
            lerpFactor
        );

        // Update element position with offset
        elementRef.current.style.transform = `translate(${
            options.lookAt ? offset.x * currentPos.current.xNormalized : currentPos.current.x + offset.x
        }px, ${options.lookAt ? offset.y * currentPos.current.yNormalized : currentPos.current.y + offset.y}px)`;

        // Calculate distance to target
        const distance: number = Math.sqrt(
            Math.pow(mousePos.current.x - currentPos.current.x, 2) + Math.pow(mousePos.current.y - currentPos.current.y, 2)
        );

        // Continue animation if we're not close enough to the target
        if (distance > threshold) {
            animationFrameRef.current = requestAnimationFrame(animate);
        } else {
            // Snap to final position when very close
            if (!options.lookAt) {
                elementRef.current.style.transform = `translate(${
                    mousePos.current.x + offset.x
                }px, ${mousePos.current.y + offset.y}px)`;
            }
            isAnimating.current = false;
        }
    }, [lerpFactor, threshold, offset.x, offset.y, enabled, lerp]);

    const handleMouseMove = useCallback(
        (e: MouseEvent): void => {
            if (!enabled) return;

            mousePos.current = { x: e.clientX, y: e.clientY };

            // Start animation if not already running
            if (!isAnimating.current) {
                isAnimating.current = true;
                animationFrameRef.current = requestAnimationFrame(animate);
            }
        },
        [animate, enabled]
    );

    const startAnimation = useCallback((): void => {
        if (!enabled || isAnimating.current) return;

        isAnimating.current = true;
        animationFrameRef.current = requestAnimationFrame(animate);
    }, [animate, enabled]);

    const stopAnimation = useCallback((): void => {
        isAnimating.current = false;
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
    }, []);

    useEffect(() => {
        if (!enabled) return;

        // Initialize position to center or current mouse position
        currentPos.current = {
            x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
            xNormalized: 0,
            y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
            yNormalized: 0
        };

        document.addEventListener("mousemove", handleMouseMove, { passive: true });

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            stopAnimation();
        };
    }, [handleMouseMove, stopAnimation, enabled]);

    return {
        elementRef,
        currentPosition: currentPos,
        isAnimating,
        startAnimation,
        stopAnimation
    };
}
