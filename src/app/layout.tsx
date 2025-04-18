import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../styles/globals.css";
import "../styles/layout.css";
import "../styles/functional.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins"
});

export const metadata: Metadata = {
    title: "Gunique G. - A passionate software engineer",
    description: "Portfolio of a passionate software engineer specializing in full-stack web apps and custom bots.",
    keywords: [
        "web developer",
        "portfolio",
        "javascript",
        "typescript",
        "next.js",
        "react",
        "discord bots",
        "freelancer",
        "software developer",
        "software engineer",
        "fiverr",
        "github"
    ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`dark ${inter.className} ${poppins.className} antialiased`}>{children}</body>
        </html>
    );
}
