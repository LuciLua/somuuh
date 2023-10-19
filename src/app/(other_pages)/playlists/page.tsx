import { AiOutlineGroup } from "react-icons/ai"

export default function playlists({ params }) {
    return (
        <div className="bg-zinc-800  relative h-full z-20 flex flex-col ">
            <div className="p-[20px] flex flex-col ">
                <h1 className="text-zinc-100 font-normal text-[30px] mb-[20px]">Meus grupos</h1>
                <div className="flex flex-col  h-full">

                    <a href="/playlists/maisouvidas" className=" py-[10px] px-[20px] gap-[10px] items-center flex w-full min-h-[30px]  p-[10px] hover:bg-zinc-700">
                    <div className="flex justify-center items-center rounded-full w-[60px] h-[60px] overflow-hidden relative">
                            <AiOutlineGroup />
                        </div>
                        <p>Playlist: Mais Ouvidas</p>
                    </a>
                    <div className="w-full h-[1px] bg-zinc-700" />
                    <a href="/playlists/favoritasdekpop" className=" py-[10px] px-[20px] gap-[10px] items-center flex w-full min-h-[30px]  p-[10px] hover:bg-zinc-700">
                        <div className="flex justify-center items-center rounded-full w-[60px] h-[60px] overflow-hidden relative">
                            <AiOutlineGroup />
                        </div>
                        <p>Playlist: Favoritas de kpop</p>
                    </a>
                    <div className="w-full h-[1px] bg-zinc-700 " />
                    <a href="/playlists/sertanejohits" className=" py-[10px] px-[20px] gap-[10px] items-center flex w-full min-h-[30px]  p-[10px] hover:bg-zinc-700">
                    <div className="flex justify-center items-center rounded-full w-[60px] h-[60px] overflow-hidden relative">
                            <AiOutlineGroup />
                        </div>
                        <p>Playlist: Sertanejo hits</p>
                    </a>
                    <a href="/playlists/maistocadasdopop" className=" py-[10px] px-[20px] gap-[10px] items-center flex w-full min-h-[30px]  p-[10px] hover:bg-zinc-700">
                    <div className="flex justify-center items-center rounded-full w-[60px] h-[60px] overflow-hidden relative">
                            <AiOutlineGroup />
                        </div>
                        <p>Playlist: Mais tocadas do POP</p>
                    </a>
                </div>
            </div>
        </div>
    )
}