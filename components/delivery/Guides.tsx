import { BsApple, BsGooglePlay } from 'react-icons/bs'
import { IoLocationSharp } from 'react-icons/io5'
import Link from 'next/link'

export default function Guides() {
    return (
        <div className="w-full px-4 py-8 flex flex-row flex-wrap gap-4 bg-secondaryLight justify-center">
            <div className="w-[370px] flex flex-col gap-4 items-center bg-bgLight rounded-lg p-8 justify-between">
                <div className='flex flex-col gap-4 items-center'>
                    <div className="rounded-full w-16 aspect-square shadow-sm drop-shadow-sm bg-secondaryLight" />
                    <p className='text-2xl font-bold'>Download the App</p>
                    <hr className="w-full border-2 border-dashed border-buttonOrange" />
                    <p className="leading-loose text-center">
                    Ordering your CheeryBug favorites has never been this easy. Enjoy App Exclusive deals only on the CheeryBug App.
                    </p>
                </div>                
                <div className='flex flex-row items-center gap-2'>
                    <Link href={'https://www.apple.com/ph/app-store/'} className='w-[140px] h-fit flex flex-row gap-1 p-1 bg-black text-white items-center rounded-sm shadow-sm drop-shadow-sm'>
                        <BsApple className="text-xl" />
                        <div>
                            <p className='text-[10px]'>Download on the</p>
                            <p className='text-lg'>App Store</p>
                        </div>
                    </Link>
                    <Link href={'https://play.google.com/store/games?hl=en&gl=US&pli=1'} className='w-[140px] h-fit flex flex-row gap-1 p-1 bg-black text-white items-center rounded-sm shadow-sm drop-shadow-sm'>
                        <BsGooglePlay className="text-xl" />
                        <div>
                            <p className='text-[10px]'>GET IT ON</p>
                            <p className='text-lg'>Google Play</p>
                        </div>
                    </Link>
                </div>
           </div>
           <div className="w-[370px] flex flex-col gap-4 items-center bg-bgLight rounded-lg p-8 justify-between">
                <div className='flex flex-col gap-4 items-center'>
                    <div className="rounded-full w-16 aspect-square shadow-sm drop-shadow-sm bg-secondaryLight" />  
                    <p className='text-2xl font-bold'>Call #97000</p>
                    <hr className="w-full border-2 border-dashed border-buttonOrange" />
                    <p className='leading-loose text-center'>
                        CheeryBug delivery is just a call away! Call #97000 to order your CheeryBug favorites! Don’t forget the hashtag!
                    </p>
                </div>
                <div className='w-fit text-2xl text-white font-semibold bg-buttonOrange px-2 py-1 btn-hover rounded-md shadow-md drop-shadow-md'>#97000</div>
            </div>
           <div className="w-[370px] flex flex-col gap-4 items-center bg-bgLight rounded-lg p-8 justify-between">
               <div className='flex flex-col gap-4 items-center'>
                    <div>
                        <div className='relative flex flex-row'>
                            <div className='relative w-fit text-buttonOrange'>
                                <IoLocationSharp className="text-6xl drop-shadow-md" />
                                <IoLocationSharp className="z-10 absolute top-3 -left-1 text-2xl drop-shadow-sm"  />
                                <IoLocationSharp className="z-10 absolute bottom-3 right-0 text-2xl drop-shadow-sm" />
                            </div>
                            <div className='font-semibold'>
                                <p>CheeryBug Group</p>
                                <p>Multi-Delivery</p>
                                <p className='font-normal text-[10px] bg-yellow-300 rounded-md px-1'>Send the joy of eating to many</p>
                            </div>
                        </div>
                    </div>
                    <p className='text-2xl font-bold'>Multi-Delivery</p>
                    <hr className="w-full border-2 border-dashed border-buttonOrange" />
                    <p className='leading-loose text-center'>                        
                        Order your CheeryBug favorites and send to multiple recipients and addresses.
                    </p>
                </div>
                <div className='w-fit text-2xl text-white font-semibold bg-buttonOrange px-2 py-1 btn-hover rounded-md shadow-md drop-shadow-md'>Order for Multi-Delivery</div>
            </div>
        </div>
    )
}

