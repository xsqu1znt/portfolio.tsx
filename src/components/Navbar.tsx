import { Menu } from "lucide-react";

export function Navbar() {
    return (
        <nav className="flex justify-between px-8 py-4 border-b-[1px] border-white/10 sticky top-0 z-50 backdrop-blur-sm">
            <p className="text-lg">Gunique G.</p>

            <div className="block lg:hidden">
                <Menu size={32} />
            </div>

            <div className="hidden lg:block">
                <ul>
                    <li className="space-x-6">
                        <a href="#home" className="text-lg" scrol>
                            Home
                        </a>
                        <a href="#projects" className="text-lg">
                            Projects
                        </a>
                        <a href="#about" className="text-lg">
                            About
                        </a>
                        <a href="#contact" className="text-lg">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
