export const LinkButton=({children,onClick,varient="default"}:{
    children:React.ReactNode,
    onClick:()=>void,
    varient?:"default"|"outline"
})=>{

    const outlineClass=varient==="outline"?"border border-gray-300":""


    return (
        <div onClick={onClick} className={`px-3 py-2 hover:bg-gray-100 font-extralight ${outlineClass}`} >
            {children}
        </div>
    )
}
