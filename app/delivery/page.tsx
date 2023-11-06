import Banner from "@/components/delivery/Banner"
import Guides from "@/components/delivery/Guides"
import FAQs from "@/components/delivery/FAQs"

export default function Delivery() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <Banner />
            <Guides />
            <FAQs />
        </main>
    )
}