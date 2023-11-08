import Image from "next/image";

const missions = [
    {
        id: 0,
        header: 'What We Do',
        text: "CheeryBug's Mission is to serve great-tasting food, bringing the cheer of eating to everyone."
    },
    {
        id:1,
        header: 'What We Stand For',
        text: "CheeryBug is a family-centric brand that promotes family values and togetherness and espouses Filipino pride."
    }
]

export default function Missions() {
    return (
        <div className="relative px-4 py-8 gap-4 flex flex-row flex-wrap items-center justify-center">
            {missions.map(m => {
                const { id, header, text } = m
                return (
                    <Mission
                    key={id}
                        header={header}
                        text={text}
                        />
                        )
                    })}
        </div>

    )
}

function Mission({header, text, src}: {header: string; text:string; src?:string}) {
    return (
        <div className="flex flex-col items-center max-w-[400px] gap-4">
            <div className="relative w-[300px] aspect-square">
                <div className="z-10 absolute top-0 left-0 rounded-lg w-10/12 aspect-square bg-secondaryLight">
                    {src !== undefined &&
                    <Image 
                        src={src} 
                        alt="mission"
                        width={300}
                        height={300}
                    />
                    }
                </div>
                <div className="absolute bottom-0 right-0 rounded-lg w-10/12 aspect-square bg-primaryRed"></div>
            </div>
            <div className="text-center flex flex-col items-center gap-4"> 
                <p className="font-semibold text-xl">{header}</p>
                <hr  className="border-2 border-accentRed w-full" />
                <p>{text}</p>
            </div>
        </div>
    )
}