import React from "react";

export interface FloatingLabelButtonProps extends React.ComponentProps<"div"> {
    href: string;
    label: string;
}

export function FloatingLabelButton(props: FloatingLabelButtonProps) {
    return (
        <div className="group/floating-label flex flex-row items-center gap-2 overflow-hidden">
            <a
                href={props.href}
                rel="noopener noreferrer"
                target="_blank"
                className="transition-opacity duration-300 hover:opacity-50"
            >
                {props.children}
            </a>
            <span className="-z-10 hidden translate-x-[-100px] transition-transform delay-100 duration-300 group-hover/floating-label:translate-x-0 lg:block">
                {props.label}
            </span>
        </div>
    );
}
