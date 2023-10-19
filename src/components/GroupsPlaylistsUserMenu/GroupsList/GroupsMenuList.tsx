import { GoPeople } from "react-icons/go"
import GroupMenuItem from "./GroupMenuItem"

function GroupsMenuList() {
    return (
        <div className="w-full" >
            <a href="/groups" className="px-5 mt-4 mb-3 text-lg flex items-center gap-2"><GoPeople /> Grupos</a>
            <ul className="flex gap-3 flex-col px-5 text-zinc-500">
                <GroupMenuItem name={'kpop'} pathname={'kpop'} key='kpop' />
                <GroupMenuItem name={'Ariana Grande Fãs'} pathname={'arianagrandefas'} key='arianagrandefas' />
                <GroupMenuItem name={'Amo a Gaga'} pathname={'amoagaga'} key='amoagaga' />
            </ul>
        </div >
    )
}

export default GroupsMenuList