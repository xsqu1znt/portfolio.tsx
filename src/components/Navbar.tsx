import { Download, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface Props {
    toggleMobileNav?: () => any;
    mobileNavIsOpen?: boolean;
}

export default function Navbar(props: Props) {
    return (
        <nav className="fixed top-0 z-50 flex items-center justify-between w-full px-8 py-4 nav-h">
            <p className="text-xl">Gunique G.</p>

            {/* Mobile Menu */}
            <div className="lg:hidden">
                <button className="hover:cursor-pointer hover:opacity-50" onClick={props.toggleMobileNav}>
                    <Menu size={32} className={`${props.mobileNavIsOpen && "hidden"}`} />
                    <X size={32} className={`${!props.mobileNavIsOpen && "hidden"}`} />
                </button>
            </div>

            {/* Desktop Menu */}
            <div className="items-center hidden gap-6 lg:flex">
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
