import { GoPeople } from "react-icons/go";

function GroupMenuItem({ name, pathname }) {
   return <li><a className="flex gap-2 items-center hover:text-zinc-400" href={`/groups/${pathname}`}><GoPeople />{name}</a></li>
}


export default GroupMenuItem