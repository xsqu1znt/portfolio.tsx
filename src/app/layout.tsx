import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/layout.css";
import "../styles/functional.css";
import "../styles/animations.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
    title: "Gunique G. | Full-Stack Web/Software Developer",
    description: "Portfolio of a Web/Software Developer specializing in full-stack web apps and custom bots.",
    keywords: [
        "portfolio",
        "github",
        "web developer",
        "web engineer",
        "software developer",
        "software engineer",
        "discord bots",
        "javascript",
        "typescript",
        "nodejs",
        "nextjs",
        "react",
        "fiverr",
        "freelancer"
    ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`dark ${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
