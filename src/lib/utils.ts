import { clsx, type ClassValue } from "clsx"
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function useSafeMediaQuery(query: string, defaultValue = false) {
    const [match, setMatch] = useState(defaultValue);

    useEffect(() => {
        const mql = window.matchMedia(query);
        setMatch(mql.matches);

        const listener = (e: MediaQueryListEvent) => setMatch(e.matches);
        mql.addEventListener("change", listener);
        return () => mql.removeEventListener("change", listener);
    }, []);

    return match;
}

export function clampOverflow(n: number, max: number) {
  if (n < 0) return max;
  return n % max;
}