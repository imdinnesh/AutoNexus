import { ChangeEvent, forwardRef } from "react";
import { CgAsterisk } from "react-icons/cg";

export const Input = forwardRef<
    HTMLInputElement,
    {
        label: string;
        type: "text" | "email" | "password";
        onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
        size?: "small" | "large";
        varient?: "default" | "login";
        placeholder?: string;
        error?: string;
    }
>(
    (
        {
            label,
            type,
            onChange,
            size = "small",
            varient = "default",
            placeholder,
            error,
            ...rest
        },
        ref
    ) => {
        return (
            <div className="flex flex-col space-y-1 py-1.5">
                <div>
                    <CgAsterisk className="text-red-500 inline-block" />
                    <label className="text-sm font-semibold">
                        {label} {varient === "login" ? "(required)" : ""}
                    </label>
                </div>
                <input
                    ref={ref}
                    onChange={onChange}
                    type={type}
                    placeholder={placeholder}
                    className={`border-2 border-gray-300 rounded-md p-2 ${size === "large" ? "w-full" : "w-52"
                        } focus:outline-none focus:border-blue-500`}
                    {...rest}
                />
                {error && <p className="text-sm text-red-500">{error}</p>}
            </div>
        );
    }
);

Input.displayName = "Input";
