export const AuthButton = ({
    onClick,
    children,
    varient = "default",
    size = "small",
    isDisabled = true,
}: {
    onClick: () => void;
    children?: React.ReactNode;
    varient?: "default" | "login";
    size?: "small" | "large";
    isDisabled?: boolean;
}) => {
    return (
        <button 
        onClick={onClick}
        disabled={isDisabled}
        className={`border-2 border-gray-300 rounded-2xl p-2 w-full text-white font-semibold mt-4 ` + (isDisabled ? " bg-slate-300 cursor-not-allowed " : " bg-orange-500 hover:bg-orange-600 cursor-pointer")}>
        {children}
    </button>
    );
}