import { cn } from "@/lib/utils";

export function BubbleTag({ className, size, ...props }: React.ComponentProps<"div"> & { size?: "sm" | "md" | "lg" }) {
    const padding =
        size === "sm"
            ? "px-2 py-1 text-xs"
            : size === "md"
              ? "px-3 py-1 text-md"
              : size === "lg"
                ? "px-4 py-1 text-lg"
                : // Default: md
                  "px-3 py-1 text-md";

    return (
        <div
            data-slot="bubble-tag"
            className={cn(
                `inline-flex items-center rounded-full border-white/10 bg-white/5 hover:border-white/25 ${padding} border-[1px] transition-colors duration-200 select-none`,
                className
            )}
            {...props}
        />
    );
}
