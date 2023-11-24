import Link from "next/link";
import { BiSolidPlaylist } from "react-icons/bi";

function PlaylistMenuItem({ name, pathname }) {
   return <li><Link className="flex gap-2 items-center hover:text-zinc-400" href={`/playlists/${pathname}`}><BiSolidPlaylist />{name}</Link></li>
}


export default PlaylistMenuItem