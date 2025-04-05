import { Spinner } from "../Spinner";
export const AuthButton = ({
    children,
    varient = "default",
    size = "small",
    isDisabled = true,
    isLoading = false,
}: {
    children?: React.ReactNode;
    varient?: "default" | "login";
    size?: "small" | "large";
    isDisabled?: boolean;
    isLoading?: boolean;
}) => {
    return (
        <button
            type="submit"
            disabled={isDisabled}
            className={`border-2 border-gray-300 rounded-2xl p-2 w-full text-white font-semibold mt-4 transition-all ${isDisabled ? "bg-slate-300 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600 cursor-pointer"
                }`}
        >
            {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                    <Spinner />
                    <span>Loading...</span>
                </div>
            ) : (
                children
            )}

        </button>
    );
};