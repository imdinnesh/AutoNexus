export const SecondaryButton=({children,onClick,size="large"}:{children:React.ReactNode,onClick:()=>void,size?:"small"|"large"})=>{
    const sizeClass=size==="small"?"px-4 py-2 h-10":"px-6 py-3 w-68 text-xl"
    return (
        <div onClick={onClick} className={`${sizeClass} rounded-3xl cursor-pointer text-center items-center border-2`} >
            {children}
        </div>

    )

}