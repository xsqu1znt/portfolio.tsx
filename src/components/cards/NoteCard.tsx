import { cn } from "@/lib/utils";

interface Props {
    title: string;
    content: string[];

    onClickYellow?: () => void;
    onClickGreen?: () => void;
    onClickRed?: () => void;

    className?: string;
}

export function NoteCard(props: Props) {
    const fullContent = props.content.join(" ");

    const wordCount = fullContent
        .replace(/[^a-zA-Z0-9\s]/g, "")
        .split(" ")
        .filter(Boolean).length;

    const charCount = fullContent.length;

    return (
        <div className={cn("bg-card flex flex-col rounded-xl border-2 border-zinc-800", props.className)}>
            {/* Titlebar */}
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-2">
                {/* Title */}
                <span className="font-mono text-zinc-400">{props.title}</span>

                {/* Controls */}
                <div className="flex gap-3">
                    <div
                        onClick={props.onClickYellow}
                        className="size-4 animate-[pulse_1.5s_ease-in-out_infinite] cursor-pointer rounded-full bg-yellow-400 transition-colors duration-200 hover:bg-yellow-600"
                    />
                    <div
                        onClick={props.onClickGreen}
                        className="size-4 animate-[pulse_2s_ease-in-out_infinite] cursor-pointer rounded-full bg-green-400 transition-colors duration-200 hover:bg-green-700"
                    />
                    <div
                        onClick={props.onClickRed}
                        className="size-4 animate-[pulse_3s_ease-in-out_infinite] cursor-pointer rounded-full bg-red-400 transition-colors duration-200 hover:bg-red-500"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col overflow-y-auto p-4 shadow-inner">
                {props.content.map((c, i) => (
                    <div key={i} className="flex items-center">
                        <span className="mt-[2px] w-[24px] border-white/10 text-xs text-zinc-600 select-none">{i + 1}</span>
                        <span className="leading-relaxed text-wrap">{c}</span>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between gap-4 border-t border-white/10 px-4 py-2 text-xs text-zinc-600">
                <span className="font-mono select-none">{">>>"}</span>
                <span className="font-mono">
                    words {wordCount}, chars {charCount}
                </span>
            </div>
        </div>
    );
}
