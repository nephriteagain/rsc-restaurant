
export default function Error({error,reset}:{error:Error & {digest?:string}; reset: () => void}) {

    return (
        <div className="h-[400px] w-full flex flex-col items-center justify-center gap-4 text-lg">
            <p className="opacity-60">{error.message}</p>            
            <button onClick={reset} className="px-4 py-2 text-white font-semibold bg-accentRed btn-hover rounded-md shadow-md">
                Try again
            </button>
        </div>
    )
}