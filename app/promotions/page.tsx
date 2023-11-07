import PromoList from "@/components/promos/PromoList"

export default function Promos() {
    return (
        <main>
            <hr className="relative left-0 w-screen border-2 border-buttonOrange" />
            <h1 className="w-full text-center text-5xl font-bold py-10 bg-primaryRed text-white">
                Promos
            </h1>
            <PromoList />
        </main>
    )
}