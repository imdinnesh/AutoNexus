export const ExploreButton = ({onClick,children}:{
    onClick: () => void,
    children?: React.ReactNode
}) => {
    return (
        <button
        onClick={onClick}
         className="border-2 bg-indigo-600 rounded-md p-2 hover:bg-indigo-700 text-white font-semibold mt-4 cursor-pointer ">
            {children}
        </button>
    )
}