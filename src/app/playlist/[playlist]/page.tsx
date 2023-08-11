export default function playlist({ params }) {
    return (
        <div className="bg-zinc-800 h-fit relative">
            <div className="p-[20px] flex flex-col">
                <h1 className="text-zinc-100 font-normal text-[30px]">Playlist: {params.playlist}</h1>
                <div className="flex flex-col gap-4 mt-5">
                    <div className="w-full min-h-[30px] bg-zinc-700 p-[10px] rounded-lg">
                        musica
                    </div>
                    <div className="w-full min-h-[30px] bg-zinc-700 p-[10px] rounded-lg">
                        musica
                    </div>
                    <div className="w-full min-h-[30px] bg-zinc-700 p-[10px] rounded-lg">
                        musica
                    </div>
                    <div className="w-full min-h-[30px] bg-zinc-700 p-[10px] rounded-lg">
                        musica
                    </div>
                    <div className="w-full min-h-[30px] bg-zinc-700 p-[10px] rounded-lg">
                        musica
                    </div>
                    <div className="w-full min-h-[30px] bg-zinc-700 p-[10px] rounded-lg">
                        musica
                    </div>
                </div>
            </div>
        </div>
    )
}