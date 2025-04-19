import { cn } from "@/lib/utils";

export default function BubbleTag({
    className,
    size,
    ...props
}: React.ComponentProps<"div"> & { size?: "sm" | "md" | "lg" }) {
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
                `inline-flex items-center rounded-full bg-white/5 border-white/10 hover:border-white/25 ${padding} border-[1px] select-none transition-colors duration-200`,
                className
            )}
            {...props}
        />
    );
}
