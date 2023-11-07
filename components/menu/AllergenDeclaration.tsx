"use client"
import { FaPlus } from "react-icons/fa"

import { useState } from "react"

export default function AllergenDeclaration() {
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
                <p>Allergen Declaration</p>
                <FaPlus className="text-white" />
            </div>
            {
                isOpen &&
                <div className="flex flex-col gap-4 p-8 text-base bg-white shadow-lg drop-shadow-lg rounded-3xl">
                    <p>
                        Jollibee’s manufacturing and kitchen operations may involve the use of shared cooking equipment, preparation areas, tools, and utensils that come in contact with or contains allergens. As such, we cannot guarantee that a food ingredient or food product is free from a specific allergen, since possible allergen cross-contact between different products could occur.
                    </p>
                    <p>
                        The allergen information found in this document has been derived from the data provided by our suppliers. As such, Jollibee, its directors, officers, employees, subsidiaries, and franchisees assume no responsibility on the accuracy and veracity of these given allergen information.
                    </p>
                    <p>
                        The listing is updated regularly in attempt to reflect the actual allergen content although variation could occur from time to time due to continuous improvement in our products. Non-permanent products, such as test and limited time offerings, may also not be listed in this document.
                    </p>
                    <p>
                        The allergen information in this document is intended to serve as a general guide only and is not intended to provide any legal or medical advice. Such medical or legal advice relevance to a customers circumstances should be obtained separately by such customers. Jollibee, its directors, employees, subsidiaries and franchisees expressly disclaim liability for any loss, costs, or damage suffered or incurred by users relying on this document.
                    </p>
                    <p>
                        The information only applies to stores operating in the Philippines and does not apply to stores outside the Philippines.
                    </p>
                    <p>
                        Current as of: May 30, 2023
                    </p>
                </div>
            }
        </div> 
    )
}