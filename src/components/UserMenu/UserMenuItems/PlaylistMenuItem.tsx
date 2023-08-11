import { BiSolidPlaylist } from "react-icons/bi";

function PlaylistMenuItem({ name, pathname }) {
   return <li><a className="flex gap-2 items-center hover:text-zinc-400" href={`/playlist/${pathname}`}><BiSolidPlaylist />{name}</a></li>
}


export default PlaylistMenuItem