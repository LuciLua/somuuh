import Image from "next/image"
import { AiFillLike, AiOutlineComment } from "react-icons/ai"

function Post({ username, content, img, title, likesNum, commentsNum }) {
    return (
        <div className="flex flex-col w-full p-[10px] bg-zinc-800 h-fit border-b-[1px] border-zinc-700">
            <header className="flex mb-[10px]">
                <div className="relative w-[45px] h-[45px] overflow-hidden rounded-full mr-[15px]">
                    <Image alt="photo_user" src={img} objectFit="cover" fill />
                </div>
                <div className="leading-5">
                    <h1 className="text-[17px] text-zinc-500">{title}</h1>
                    <h2 className="text-[13px] text-zinc-600">{username}</h2>
                </div>
            </header>
            <p className="text-[14px] text-zinc-400 text-justify">{content}</p>
            <div className="mt-[20px] flex justify-between">
                <div className="flex gap-3">
                    <div className="flex items-center justify-center gap-2 text-[20px] text-zinc-500 hover:text-zinc-100 cursor-pointer"><AiFillLike /></div>
                    <div className="flex items-center justify-center gap-2 text-[20px] text-zinc-500 hover:text-zinc-100 cursor-pointer"><AiOutlineComment /></div>
                </div>
                <div className="flex gap-3">
                    <div className="text-[13px] text-zinc-500">
                        {likesNum <= 0 ? `Nenhuma curtida` : `${likesNum} Curtidas`}
                    </div>
                    <div className="text-[13px] text-zinc-500">
                        {commentsNum <= 0 ? `Nenhum comentário` : `${commentsNum} Comentários`}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post