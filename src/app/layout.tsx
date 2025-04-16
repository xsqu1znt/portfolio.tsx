import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Gunique G. | A passionate software engineer.",
    description: "A portfolio of a passionate software engineer."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`dark ${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
