import { FaGithub } from "react-icons/fa";
import { Button } from "../../components/Button";

const ExplorePage: React.FunctionComponent = () => {
    return (
        <main className="explore-page py-12">
            <header className="explore-header view-wrapper">
                <h1 className="explore-header-section-title text-6xl font-extrabold h-auto w-[20ch]">
                    {"Explore"}
                </h1>
                <p className="text-base font-normal text-gray-400 w-[64ch] mt-4">
                    {"Search for Developers and People with same interests"}
                </p>

                <div className="mt-6">
                    <p className="text-xs text-gray-400 mb-4 w-[34ch]">
                        {"Better to continue exploring by creating an account, for better recommendations"}
                    </p>
                    <Button variant="outline" style={{ color: "white", backgroundColor: "black" }}>
                        <FaGithub />
                        {"Continue with GitHub"}
                    </Button>
                </div>

                <div className="search-input-wrapper mt-6 flex flex-row items-center justify-start gap-3">
                    <input 
                        type="text"
                        className="bg-white rounded-md border border-gray-200 px-6 py-2 w-96 hover:border-gray-300 focus:outline-blue-500"
                        placeholder="Search by names, skills, tech-stack, etc"
                    />
                    <Button>{"Explore"}</Button>
                </div>
            </header>
        </main>
    )
}

export default ExplorePage;