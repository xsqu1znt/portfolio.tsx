import { cn } from "@/lib/utils";

interface Props {
    className?: string;
    title: string;
    content: string[];
}

export default function NoteCard(props: Props) {
    const fullContent = props.content.join(" ");

    const wordCount = fullContent
        .replace(/[^a-zA-Z0-9\s]/g, "")
        .split(" ")
        .filter(Boolean).length;

    const charCount = fullContent.length;

    return (
        <div className={cn("flex flex-col border rounded-xl border-zinc-800 bg-card drop-shadow-lg", props.className)}>
            {/* Titlebar */}
            <div className="flex items-center justify-between gap-4 px-4 py-2 border-b border-white/10">
                {/* Title */}
                <span className="font-mono text-zinc-400">{props.title}</span>

                {/* Controls */}
                <div className="flex gap-3">
                    <div className="transition-colors duration-200 bg-yellow-400 rounded-full cursor-pointer hover:bg-yellow-600 size-4" />
                    <div className="transition-colors duration-200 bg-green-400 rounded-full cursor-pointer hover:bg-green-700 size-4" />
                    <div className="transition-colors duration-200 bg-red-400 rounded-full cursor-pointer hover:bg-red-500 size-4" />
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-4 overflow-y-auto shadow-inner">
                {props.content.map((c, i) => (
                    <div key={i} className="flex items-center">
                        <span className="w-[24px] text-xs text-zinc-600 border-white/10 mt-[2px]">{i + 1}</span>
                        <span className="leading-relaxed text-wrap">{c}</span>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between gap-4 px-4 py-2 text-xs border-t border-white/10 text-zinc-600">
                <span className="font-mono">{">>>"}</span>
                <span className="font-mono">
                    words {wordCount}, chars {charCount}
                </span>
            </div>
        </div>
    );
}
