import { FcOk } from "react-icons/fc";
export const Feature = ({label}:{label:string}) => {
    return (
        <div className="flex items-center space-x-3">
            <FcOk className="text-2xl" />
            <h1 className="text-md font-semibold">{label}</h1>
        </div>
    )
}