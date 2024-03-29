import { BiSolidPlaylist } from "react-icons/bi";
import PlaylistMenuItem from "./PlaylistMenuItem";
import Link from "next/link";

function PlaylistsMenuList() {
    return (
        <div className="w-full" >
            <Link href="/playlists" className="px-5 mt-4 mb-3 text-lg flex items-center gap-2"><BiSolidPlaylist /> Playlists</Link>
            <ul className="flex gap-3 flex-col px-5 text-zinc-500">
                <PlaylistMenuItem name='Mais ouvidas' pathname='maisouvidas' key='maisouvidas' />
                <PlaylistMenuItem name='Favoritas de kpop' pathname='favoritasdekpop' key='favoritasdekpop' />
                <PlaylistMenuItem name='Sertanejo hits' pathname='sertanejohits' key='sertanejohits' />
                <PlaylistMenuItem name='Mais tocadas do POP' pathname='maistocadasdopop' key='maistocadasdopop' />
            </ul>
        </div>
    )
}


export default PlaylistsMenuList