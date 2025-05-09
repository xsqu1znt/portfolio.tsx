import { Download, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface Props {
    toggleMobileNav?: () => any;
    mobileNavIsOpen?: boolean;
}

export default function Navbar(props: Props) {
    return (
        <nav className="fixed top-0 z-[100] flex items-center justify-between w-full px-8 py-4 nav-h">
            <Link href="/#home" className="text-xl cursor-pointer select-none">
                Gunique G.
            </Link>

            {/* Mobile Menu */}
            <div className={`${!props.mobileNavIsOpen && "lg:hidden"}`}>
                <button className="hover:cursor-pointer hover:opacity-50" onClick={props.toggleMobileNav}>
                    <Menu
                        size={32}
                        className={`hover:opacity-50 transition-opacity duration-100 ${props.mobileNavIsOpen && "hidden"}`}
                    />
                    <X
                        size={32}
                        className={`hover:opacity-50 transition-opacity duration-100 ${!props.mobileNavIsOpen && "hidden"}`}
                    />
                </button>
            </div>

            {/* Desktop Menu */}
            <div className={`items-center hidden gap-6 ${!props.mobileNavIsOpen && "lg:flex"}`}>
                <ul>
                    <li className="flex items-center gap-6">
                        <Link href="#projects" className="text-lg hover:underline">
                            Projects
                        </Link>
                        <Link href="#about" className="text-lg hover:underline">
                            About
                        </Link>
                        <Link href="#tech" className="text-lg hover:underline">
                            Tech
                        </Link>
                        <Link href="#contact" className="text-lg hover:underline">
                            Contact
                        </Link>
                    </li>
                </ul>

                <Button asChild variant={"outline"} size={"lg"}>
                    <Link
                        href="/Gunique Grimble - Full Stack Web Developer Resume.pdf"
                        download="Gunique Grimble - Full Stack Web Developer Resume.pdf"
                    >
                        <Download /> Resume
                    </Link>
                </Button>
            </div>
        </nav>
    );
}
