import MenuList from "@/components/menu/MenuList"
import FoodInfo from "@/components/menu/FoodInfo"
export default function Page() {
    
    return (
        <div className="px-4 py-8 w-full flex-grow">
            <MenuList id='best-sellers' />
            <FoodInfo id='best-sellers' />
        </div>
    )
}