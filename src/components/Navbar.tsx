export function Navbar() {
    return (
        <nav className="flex justify-between px-6 py-4 border-b-[1px] border-white/10">
            <p className="text-lg">Gunique G.</p>

            <div className="hidden lg:block">
                <ul>
                    <li className="space-x-6">
                        <a href="#" className="text-lg">
                            Home
                        </a>
                        <a href="#" className="text-lg">
                            Projects
                        </a>
                        <a href="#" className="text-lg">
                            About
                        </a>
                        <a href="#" className="text-lg">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
