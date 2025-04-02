export const LinkButton=({children,onClick}:{children:React.ReactNode,onClick:()=>void})=>{
    return (
        <div onClick={onClick} className="px-3 py-2 hover:bg-gray-100 font-extralight" >
            {children}
        </div>
    )
}
