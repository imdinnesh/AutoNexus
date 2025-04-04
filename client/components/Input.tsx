import { CgAsterisk } from "react-icons/cg";
export const Input=({label,type,onChange,size="small",varient="default",placeholder}:{
    label:string,
    type:"text" | "email",
    onChange:(e:any)=>void,
    size?:"small" | "large",
    varient?:"default" | "login"
    placeholder?:string

})=>{

    return (

        <div className="flex flex-col space-y-1 py-1.5">
            <div>
                <CgAsterisk className="text-red-500 inline-block" />
            <label className="text-sm font-semibold">{label} {varient==="login"?"(required)":""}</label>
            </div>
            <input 
            onChange={onChange}
            type={type} 
            placeholder={placeholder}
            className={`border-2 border-gray-300 rounded-md p-2 ${size==="large"?"w-full":"w-52"} focus:outline-none focus:border-blue-500`} />
        </div>

    )

}