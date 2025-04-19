import { Download, Menu } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function Navbar() {
    return (
        <nav className="flex items-center justify-between px-8 py-4 border-b-[1px] border-white/10 sticky top-0 z-50 backdrop-blur-sm">
            <p className="text-lg">Gunique G.</p>

            {/* Mobile Menu */}
            <div className="block lg:hidden">
                <Menu size={32} />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
                <ul>
                    <li className="flex items-center gap-6">
                        <Link href="#home" className="text-lg hover:underline">
                            Home
                        </Link>
                        <Link href="#projects" className="text-lg hover:underline">
                            Projects
                        </Link>
                        <Link href="#about" className="text-lg hover:underline">
                            About
                        </Link>
                        <Link href="#contact" className="text-lg hover:underline">
                            Contact
                        </Link>
                    </li>
                </ul>

                <Button asChild className="cursor-pointer" variant={"outline"} size={"lg"}>
                    <Link href="/resume">
                        <Download /> Resume
                    </Link>
                </Button>
            </div>
        </nav>
    );
}
