import Link from "next/link"
import { MdKeyboardArrowDown, MdHomeFilled } from "react-icons/md"

function Profile() {
    return (
        <div className="flex gap-4 items-center px-5 pt-5 w-full" >
            <div className="w-10 h-10 overflow-hidden flex rounded-full">
                <img src="/a.jpg" alt="" className="object-cover w-full h-full" />
            </div>
            <div className="text-zinc-100 flex gap-1">
                <h1 className="text-sm font-bold ">Luci Lua</h1>
                <MdKeyboardArrowDown className="relative mt-[3px]" />
            </div>
            <div className="flex ml-auto mr-1 hover:text-zinc-400">
                <Link href="/">
                    <MdHomeFilled />
                </Link>
            </div>
        </div >
    )
}


export default Profile