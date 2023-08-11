import { AiOutlineSearch } from "react-icons/ai"

function SearchBox() {
    return (
        < div className="relative mt-5 flex items-center px-5" >
            <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1px] rounded-md overflow-hidden group">
                <input spellCheck={false} placeholder="Search something..." className="font-[300] text-[14px] px-2 w-full h-8 bg-zinc-900 rounded-md placeholder:text-zinc-400 text-zinc-400 outline-none pl-9" />
            </div>
            <AiOutlineSearch className="absolute ml-3" />
        </div >
    )
}

export default SearchBox