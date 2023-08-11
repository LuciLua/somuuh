import { BiLink } from "react-icons/bi";

function MaisTocadasItem({ name, link }) {
    return (
        <div className="w-full  h-full bg-zinc-950 overflow-hidden relative flex justify-center items-start flex-col p-3 border-b-zinc-800 border-b-[1px] hover:bg-[#121212]">
            <h1 className="cursor-default">{name}</h1>
            <a className="mt-4 relative" href={link}>
                <span className="relative flex justify-center items-center gap-2 px-[15px] py-[2px] text-zinc-600"><BiLink />Link</span>
            </a>
        </div>
    )
}

export default MaisTocadasItem