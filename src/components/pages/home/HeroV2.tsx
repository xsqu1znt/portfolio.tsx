import { FiverrSocialFLB, GithubSocialFLB, LinkedinSocialFLB } from "@/components/buttons";
import "./index.css";

export function HeroV2() {
    return (
        <section id="home" className="section relative">
            <div className="section-content section-center">
                {/* My name */}
                <div className="flex flex-col rounded-lg border border-white/25 bg-white/5 p-6 text-6xl font-bold">
                    <span>Gunique Grimble</span>
                </div>
            </div>
        </section>
    );
}
