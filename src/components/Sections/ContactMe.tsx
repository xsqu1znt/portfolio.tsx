import Link from "next/link";
import socials from "@/constants/socials";

export default function ContactMe() {
    return (
        <section id="contact" className="flex flex-col items-center justify-center px-6 py-12 space-y-12">
            <h2 className="text-3xl font-bold">Contact Me</h2>

            <p className="text-zinc-400 mb-6">Want to work together? I'm always open to new opportunities!</p>

            <div className="flex justify-center gap-6 text-sm">
                {socials.map((social, i) => (
                    <Link key={i} href={social.link} target="_blank" className="text-blue-400 hover:underline">
                        {social.name}
                    </Link>
                ))}
            </div>
        </section>
    );
}
