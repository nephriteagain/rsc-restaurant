import Image from "next/image";

const infos = [
    {
        id:0,
        text: 'Order & Pick Up'
    },
    {
        id:1,
        text: 'Download the App'
    },
    {
        id:2,
        text: '#97000'
    }
]

export default function Infos() {
    
    return (
        <div className="py-8 px-4 flex flex-row gap-4 flex-wrap items-center justify-center">
            {infos.map(i => {
                const { text, id } = i
                return (
                    <Info text={text} key={id} />
                )
            })}
        </div>
    )

    
}


function Info({text, imageLink}: {text: string; imageLink?: string}) {
    return (
        <div className="flex flex-col items-center gap-2 p-2">
            <div className="aspect-square w-[200px] bg-secondaryLight rounded-full shadow-md drop-shadow-md">
                {
                    imageLink !== undefined && 
                    <Image 
                        src={imageLink}
                        alt=""
                        width={300}
                        height={300}
                    />
                }
            </div>
            <p className="text-2xl font-semibold">{text}</p>
        </div>
    )
}