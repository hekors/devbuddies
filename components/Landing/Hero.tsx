import { Button } from "../Button";
import { FaGithub, FaSearch } from 'react-icons/all';
import Link from "next/link";

const HeroSection: React.FunctionComponent = () => {
    return (
        <main className="hero-section py-24">
            <h1 className="hero-section-title text-8xl font-extrabold text-center w-[18ch] h-auto mx-auto">
                {"Find your future developer mate"}
            </h1>
            <p className="text-base font-normal text-gray-400 text-center w-[64ch] mx-auto mt-8">
                {"Find your perfect team mate match with devbuddies, designed to connect professionals with shared interests and skills."}
            </p>
            <div className="buttons-layer mt-12 flex flex-row items-center justify-center gap-6 w-fit h-auto mx-auto">
                <Button variant="primary">
                    <FaGithub />
                    {"Continue from GitHub"}
                </Button>
                <Link href={'/explore'}>
                    <Button variant="outline">
                        <FaSearch className="text-sm" />
                        {"Explore Devs"}
                    </Button>
                </Link>
            </div>
        </main>
    )
}

export default HeroSection;