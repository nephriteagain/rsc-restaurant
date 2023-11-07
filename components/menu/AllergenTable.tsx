import { allergen } from "@/lib/data/allergen"

import { BsCheckCircleFill, BsCheckCircle } from 'react-icons/bs'

function isAllergic(item:string, yes:string[]) : boolean {
    return yes.some(y => item === y)
}

function isMaybeAllergic(item: string, maybe:string[]) : boolean {
    return maybe.some(m => item === m)
}


export default function AllergenTable({id}:{id:string}) {

    const product = allergen[id]

    

    

    const productTable : {name:string;row:('y'|'m'|'n')[]}[] = product.map(({contains, name}) => {
        return {
            name,
            row: [
                isAllergic('Peanuts', contains.yes) ? 'y' : isMaybeAllergic('Peanuts', contains.maybe) ? 'm' : 'n',
                isAllergic('Crustaceans', contains.yes) ? 'y' : isMaybeAllergic('Crustaceans', contains.maybe) ? 'm' : 'n',
                isAllergic('Fish', contains.yes) ? 'y' : isMaybeAllergic('Fish', contains.maybe) ? 'm' : 'n',
                isAllergic('Eggs', contains.yes) ? 'y' : isMaybeAllergic('Eggs', contains.maybe) ? 'm' : 'n',
                isAllergic('Tree Nuts', contains.yes) ? 'y' : isMaybeAllergic('Tree Nuts', contains.maybe) ? 'm' : 'n',
                isAllergic('Milk', contains.yes) ? 'y' : isMaybeAllergic('Milk', contains.maybe) ? 'm' : 'n',
                isAllergic('Soya', contains.yes) ? 'y' : isMaybeAllergic('Soya', contains.maybe) ? 'm' : 'n',
                isAllergic('Cereals Containing Gluten', contains.yes) ? 'y' : isMaybeAllergic('Cereals Containing Gluten', contains.maybe) ? 'm' : 'n',
                isAllergic('Sulphites', contains.yes) ? 'y' : isMaybeAllergic('Sulphites', contains.maybe) ? 'm' : 'n',
                isAllergic('Sesame Seeds', contains.yes) ? 'y' : isMaybeAllergic('Sesame Seeds', contains.maybe) ? 'm' : 'n',
            ]
        }
    })

    return (
        <table className="min-w-[600px] overflow-x-scroll w-full">
            <thead>
                <tr className="bg-bgLight">
                    <th className="border border-gray-600 w-[9.09%] p-1">Menu Item</th>
                    <th className="border border-gray-600 w-[9.09%] p-1">Peanuts	</th>
                    <th className="border border-gray-600 w-[9.09%] p-1">Crustaceans</th>
                    <th className="border border-gray-600 w-[9.09%] p-1">Fish</th>
                    <th className="border border-gray-600 w-[9.09%] p-1">Eggs</th>
                    <th className="border border-gray-600 w-[9.09%] p-1">Tree Nuts</th>
                    <th className="border border-gray-600 w-[9.09%] p-1">Milk</th>
                    <th className="border border-gray-600 w-[9.09%] p-1">Soya</th>
                    <th className="border border-gray-600 w-[9.09%] p-1">Cereals</th>
                    <th className="border border-gray-600 w-[9.09%] p-1">Containing Gluten Sulphites</th>
                    <th className="border border-gray-600 w-[9.09%] p-1">Sesame Seeds</th>                
                </tr>
            </thead>
            <tbody>
            {productTable.map(({name, row}) => {
                return (
                    <tr key={name} className="even:bg-bgLight odd:bg-white">
                        <td
                            className="border border-gray-400 p-2 text-center"
                        >
                        {name}
                        </td> 
                       {row.map((r,i) => {
                            return (
                                <td key={i} className="border border-gray-400 p-1">
                                    {
                                        r === 'y' ?
                                        <BsCheckCircleFill className="mx-auto fill-buttonOrange text-xl" /> :
                                        r === 'm' ?
                                        <BsCheckCircle className="mx-auto fill-buttonOrange text-xl" /> :
                                        ''
                                    }
                                </td>
                            )
                       })}
                    </tr>
                )
            })}
            </tbody>            
        </table>
    )
}