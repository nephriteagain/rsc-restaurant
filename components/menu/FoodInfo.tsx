import AllergenDeclaration from "./AllergenDeclaration"
import AllergenInfo from "./AllergenInfo"

export default function FoodInfo({id}: {id:string}) {
    return (
        <section className="flex flex-col gap-8 py-8">
            <h2 className="text-center text-3xl font-bold">
                Food Information
            </h2>
            <AllergenDeclaration />
            <AllergenInfo id={id} />
        </section>
    )
}