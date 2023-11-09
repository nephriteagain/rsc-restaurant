import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export default function Loading() {
    return (
        <div className='w-full h-[400px] flex items-center justify-center'>
            <div className='text-6xl text-primaryRed animate-spin'>
                <AiOutlineLoading3Quarters />
            </div>
        </div>
    )
}