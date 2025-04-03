import { FcGoogle } from "react-icons/fc";
export const GoogleButton = ({onClick}:{onClick:(e:any)=>void}) => {
    return (
        <div>
            <button onClick={onClick} className="flex items-center justify-center border-2 border-gray-300 rounded-md p-2 w-full hover:bg-gray-100 transition duration-200">
                <FcGoogle className="text-2xl mr-2" />
                <h1 className="text-md font-semibold">Sign up with Google</h1>
            </button>
        </div>

    )  
}