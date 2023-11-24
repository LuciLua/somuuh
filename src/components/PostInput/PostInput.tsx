import Image from "next/image"
import { AiOutlineSend, AiFillCamera, AiFillVideoCamera, AiOutlineLink } from "react-icons/ai"

function PostInput() {
    return (
        <div className="w-full bg-zinc-900 relative h-fit flex flex-col py-3">
            <div className="flex w-full h-fit relative">
                <div className="w-[70px] h-[70px] m-3 overflow-hidden rounded-full relative flex">
                    <Image className="object-cover" src={'/e.jpg'} fill alt="you" />
                </div>
                <div className="flex flex-col w-full relative h-fit justify-center ">
                    <input className="w-full min-h-[100px] h-fit bg-zinc-900 border-none p-4 outline-none text-zinc-400 placeholder:text-zinc-500" type="text" placeholder="Digite aqui sua postagem..." />
                    <div className="flex justify-between items-center ">
                        <div className="flex bg-[linear-gradient(40deg,#1f1f22,#1b1b1e_40%)] relative ml-2 rounded-[30px] px-3  gap-4 border-[1px] border-zinc-700 ">
                            <button className="flex justify-center items-center text-zinc-300 gap-3 p-2 pr-[16px] w-fit h-fit relative border-r-[1px] border-zinc-700"><AiFillCamera /></button>
                            <button className="flex justify-center items-center text-zinc-300 gap-3 p-2 pl-[3px] pr-[17px] w-fit h-fit relative border-r-[1px] border-zinc-700"><AiFillVideoCamera /></button>
                            <button className="flex justify-center items-center text-zinc-300 gap-3 p-2 pl-[0px] w-fit h-fit relative "><AiOutlineLink /></button>
                        </div>
                        <div className="mr-2 w-fit h-fit flex justify-center items-center">
                            <button className="flex justify-center items-center text-zinc-300 gap-3 bg-[linear-gradient(40deg,#121212,#202020_95%)] py-2 px-4  shadow-[12px]  rounded-md w-fit h-fit "><AiOutlineSend /> Postar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostInput