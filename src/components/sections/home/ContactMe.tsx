import Footer from "@/components/Footer";
import socials from "@/constants/socials";
import Link from "next/link";

export default function ContactMe() {
    return (
        <section id="contact" className="slide">
            <div className="slide-inner slide-inner-col">
                <div className="slide-header">
                    <h2>Contact Me</h2>
                    {/* <p>🚧 This section is under construction 🚧</p> */}
                    <p className="text-zinc-500">Want to work together? I'm always open to new opportunities!</p>
                </div>

                <div className="flex justify-center gap-6">
                    {socials.map((social, i) => (
                        <Link key={i} href={social.link} target="_blank" className="link-accent-primary">
                            {social.name}
                        </Link>
                    ))}
                </div>

                <span className="text-sm cursor-default link-accent-primary">🇺🇸 +1 (808) 426-6141</span>
            </div>

            <Footer />
        </section>
    );
}
