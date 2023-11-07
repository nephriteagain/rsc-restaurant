"use client"

import { FaPlus } from 'react-icons/fa'
import { useState } from "react";

export default function Question({question, answer}: {question:string; answer:string}) {
    const [ isOpen, setIsOpen ] = useState(false)

    return (
        <div className="flex flex-col gap-2 w-full">
            <div
                onClick={() => setIsOpen(o => !o)}
                className={`${!isOpen ? 'bg-white text-black': 'bg-primaryRed text-white'}
                    p-6 font-semibold text-xl flex flex-row justify-between items-center shadow-lg drop-shadow-lg rounded-3xl cursor-pointer
                `}
            >
                <p>
                    {question}
                </p>
                <FaPlus className={`${!isOpen ? 'text-primaryRed' : 'text-white'}`} />
            </div>
            {
                isOpen &&
                <div className="p-6 text-lg bg-white shadow-lg drop-shadow-lg rounded-3xl animate-flip-down">{answer}</div>
            }
        </div>
    )
}