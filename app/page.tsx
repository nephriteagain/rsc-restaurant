import Infos from "@/components/home/Infos"
import Banner from "@/components/home/Banner"
import Promos from "@/components/home/Promos"
import FeaturedMenu from "@/components/home/FeaturedMenu"
import Missions from "@/components/home/Missions"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <Banner />
            <Infos />
            <hr className="border-2 border-accentRed w-full" />
            <Promos />
            <FeaturedMenu />
            <Missions />
            <hr className="border-2 border-accentRed w-full" />
        </main>
  )
}
