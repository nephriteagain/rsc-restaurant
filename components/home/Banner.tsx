import Image from "next/image"
import Link from "next/link"

export default function Banner() {
    return (
        <div className="relative w-full h-fit overflow-hidden flex flex-col items-center text-white">
            <div className="min-w-[300px] max-w-[400px] absolute-center sm:left-12 sm:top-12 sm:translate-x-0 sm:translate-y-0 flex flex-col gap-6">
                <p className="p-2 bg-primaryRed  text-5xl font-bold text-center rounded-lg shadow-lg" >Bringing cheer to you</p>
                <p className="p-2 bg-primaryRed text-2xl font-semibold text-center justify-center rounded-lg shadow-lg" >Have your CheeryBug favorites delivered right at your doorstep!</p>
                <div className="flex items-center justify-center">
                <Link href='/menu' className="bg-accentRed text-xl text-center w-fit p-2 rounded-md shadow-md btn-hover">
                    Check Menu
                </Link>
                </div>
                
            </div>
            <Image 
                src={'https://images.unsplash.com/photo-1626082929543-5bab0f090c42?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
                alt="fried chicken"
                height={1000}
                width={1500}
                />                
        </div>
    )
}