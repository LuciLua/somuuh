import { Metadata } from "next"
import Link from "next/link"
import { AiOutlineGroup } from "react-icons/ai"

export const metadata: Metadata = { title: "Playlists" }

export default function playlists({ params }) {
    return (
        <div className="bg-zinc-800  relative h-full z-20 flex flex-col ">
            <div className="p-[20px] flex flex-col ">
                <h1 className="text-zinc-100 font-normal text-[30px] mb-[20px]">Meus grupos</h1>
                <div className="flex flex-col  h-full">

                    <Link href="/playlists/maisouvidas" className=" py-[10px] px-[20px] gap-[10px] items-center flex w-full min-h-[30px]  p-[10px] hover:bg-zinc-700">
                    <div className="flex justify-center items-center rounded-full w-[60px] h-[60px] overflow-hidden relative">
                            <AiOutlineGroup />
                        </div>
                        <p>Playlist: Mais Ouvidas</p>
                    </Link>
                    <div className="w-full h-[1px] bg-zinc-700" />
                    <Link href="/playlists/favoritasdekpop" className=" py-[10px] px-[20px] gap-[10px] items-center flex w-full min-h-[30px]  p-[10px] hover:bg-zinc-700">
                        <div className="flex justify-center items-center rounded-full w-[60px] h-[60px] overflow-hidden relative">
                            <AiOutlineGroup />
                        </div>
                        <p>Playlist: Favoritas de kpop</p>
                    </Link>
                    <div className="w-full h-[1px] bg-zinc-700 " />
                    <Link href="/playlists/sertanejohits" className=" py-[10px] px-[20px] gap-[10px] items-center flex w-full min-h-[30px]  p-[10px] hover:bg-zinc-700">
                    <div className="flex justify-center items-center rounded-full w-[60px] h-[60px] overflow-hidden relative">
                            <AiOutlineGroup />
                        </div>
                        <p>Playlist: Sertanejo hits</p>
                    </Link>
                    <Link href="/playlists/maistocadasdopop" className=" py-[10px] px-[20px] gap-[10px] items-center flex w-full min-h-[30px]  p-[10px] hover:bg-zinc-700">
                    <div className="flex justify-center items-center rounded-full w-[60px] h-[60px] overflow-hidden relative">
                            <AiOutlineGroup />
                        </div>
                        <p>Playlist: Mais tocadas do POP</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}