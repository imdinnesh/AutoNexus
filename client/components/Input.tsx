import { CgAsterisk } from "react-icons/cg";
export const Input=({label,type,onClick,size="small"}:{
    label:string,
    type:"text" | "email",
    onClick:(e:any)=>void,
    size?:"small" | "large"
})=>{

    return (

        <div className="flex flex-col space-y-1 py-1.5">
            <div>
                <CgAsterisk className="text-red-500 inline-block" />
            <label className="text-sm font-semibold">{label}</label>
            </div>
            <input 
            onClick={onClick}
            type={type} 
            className={`border-2 border-gray-300 rounded-md p-2 ${size==="large"?"w-full":"w-52"} focus:outline-none focus:border-blue-500`} />
        </div>

    )

}