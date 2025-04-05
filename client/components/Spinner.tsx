export const Spinner = ({ className = "" }: { className?: string }) => {
    return (
        <div
            className={`inline-block h-4 w-4 rounded-full border-2 border-t-transparent border-white animate-spin ${className}`}
        />
    );
};
