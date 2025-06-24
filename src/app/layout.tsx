import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import "../styles/layout.css";
import "../styles/animations.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
    title: "Gunique G. | Full-Stack SWE",
    description: "A full-stack SWE specializing in xsqu1zn't web apps and bots.",
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
        "next.js",
        "react",
        "fiverr",
        "freelancer"
    ]
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "oklch(0.21 0 264.48)" },
        { media: "(prefers-color-scheme: dark)", color: "oklch(0.21 0 264.48)" }
    ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`dark ${inter.variable} antialiased`}>{children}</body>
        </html>
    );
}
