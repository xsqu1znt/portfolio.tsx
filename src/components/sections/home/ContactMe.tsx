import socials from "@/constants/socials";
import Link from "next/link";

export default function ContactMe() {
    return (
        <section id="contact" className="section">
            <div className="flex flex-col items-center gap-4">
                <h2 className="text-3xl font-bold">Contact Me</h2>
                <p className="text-zinc-500">Want to work together? I'm always open to new opportunities</p>
            </div>

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
