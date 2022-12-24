import { useEffect, useState } from "react";

type ButtonType = {
    children?: React.ReactNode,
    style?: React.CSSProperties,
    variant?: string
};

const Button: React.FunctionComponent<ButtonType> = ({
    children,
    style,
    variant="primary"
}) => {
    const [styleProps, setStyleProps] = useState("");

    useEffect(() => {
        switch (variant) {
            case "outline":
                setStyleProps("bg-white hover:bg-black hover:bg-opacity-5");
            break;
            default:
                setStyleProps("text-white bg-blue-500 border-transparent hover:bg-blue-600");
            break;
        }
    }, [variant]);

    return (
        <button className={`px-6 py-2 rounded-md border hover:scale-105 transition-all
            flex flex-row items-center justify-center gap-2 ${styleProps}`} style={style}>
            {children || "Button"}
        </button>
    )
}

export { Button };