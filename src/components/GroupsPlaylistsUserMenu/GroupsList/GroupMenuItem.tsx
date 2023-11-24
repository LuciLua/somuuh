import Link from "next/link";
import { GoPeople } from "react-icons/go";

function GroupMenuItem({ name, pathname }) {
   return <li><Link className="flex gap-2 items-center hover:text-zinc-400" href={`/groups/${pathname}`}><GoPeople />{name}</Link></li>
}


export default GroupMenuItem