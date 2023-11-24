import { BiPlayCircle } from "react-icons/bi"

function Player() {
    return (
        <footer className="h-[80px] bg-zinc-800 flex justify-center items-center p-10 gap-3 z-20 bottom-0 lg:bottom-0 absolute w-full shadow-[0_10px_32px_1px_rgba(0,0,0,0.4)] min-h-[80px] ">
            <div className="w-fit h-fit flex justify-center items-center">
                <BiPlayCircle className="text-zinc-500 text-[40px]" />
            </div>
            <div className="h-2 w-full bg-zinc-600 rounded-lg flex items-center max-w-[1000px]">
                <div className="bg-zinc-900 rounded-full w-3 h-3 absolute"></div>
            </div>
            <div>
                <p className="text-zinc-500 text-[15px]">00:00</p>
            </div>
        </footer>
    )
}

export default Player
