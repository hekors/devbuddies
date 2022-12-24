import Link from "next/link";
import { Button } from "../Button";

const Navbar: React.FunctionComponent = () => {
    return (
        <div className="navbar-component view-wrapper my-4 py-4 rounded-lg border border-gray-100 bg-white shadow-2xl shadow-gray-200">
            <div className="navbar-content-wrapper flex flex-row items-center justify-around">
                <div className="navbar-logo-wrapper w-fit h-fit">
                    <Link href={'/'}>
                        <span className="logo-text-wrapper font-semibold text-lg">
                            <span>{"dev"}</span>
                            <span className="text-blue-500">{"buddies"}</span>
                        </span>
                    </Link>
                </div>
                <div className="account-options-layer-wrapper w-fit h-fit flex flex-row items-center justify-end gap-4">
                    <Button variant="primary">{"Get Started"}</Button>
                    <Link href={'/explore'}>
                        <Button variant="outline">{"Explore Devs"}</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Navbar;