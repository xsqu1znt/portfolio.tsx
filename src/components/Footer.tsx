export default function Footer() {
    return (
        <footer className="flex flex-row items-center justify-center w-full p-4 text-sm text-center border-t nav-h nav-h-margin-negative text-zinc-500 border-zinc-800">
            <p>© {new Date().getFullYear()} Gunique G. All rights reserved.</p>
        </footer>
    );
}
