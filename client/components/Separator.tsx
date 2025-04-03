export const Separator = ({text}:{text:string}) => {
    return (
        <div className="flex items-center justify-center my-4">
            <div className="border-t border-gray-300 w-full"></div>
            <span className="absolute bg-white px-2 text-gray-500">{text}</span>
        </div>
    )

}