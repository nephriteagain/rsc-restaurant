"use client"
import { FaPlus } from "react-icons/fa"
import { BsCheckCircleFill, BsCheckCircle } from 'react-icons/bs'


import { useState } from "react"

import AllergenTable from "./AllergenTable"

export default function ({id}: {id:string}) {
    const [ isOpen, setIsOpen ] = useState(false)

    return (
        <div className="flex flex-col gap-2">
            <div 
                role="button" 
                onClick={() => setIsOpen(o => !o)}
                className={`
                    text-white bg-buttonOrange p-6 font-semibold text-xl flex flex-row justify-between items-center shadow-lg drop-shadow-lg rounded-3xl cursor-pointer
                `}
            >
                <p>Food Information</p>
                <FaPlus className="text-white" />
            </div>
            {
                isOpen &&
                <div className="bg-white p-8 rounded-xl shadow-xl">
                    <AllergenTable id={id} />
                    <div className="py-8 flex flex-col gap-4">
                        <p className="font-semibold px-4">Legend</p>
                        <div className="flex flex-col gap-3 p-4">
                            <div className="flex flex-row gap-1 items-center text-md">
                                <BsCheckCircleFill className="text-lg fill-buttonOrange" />
                                <p>Contains</p>                            
                            </div>
                            <div className="flex flex-row gap-1 items-center text-md">
                                <BsCheckCircle className="text-lg fill-buttonOrange" />
                                <p>May Contain</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div> 
    )
}