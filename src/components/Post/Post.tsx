import Image from "next/image"

function Post({ username, content, img, title }) {
    return (
        <div className="flex flex-col w-full p-[20px] bg-zinc-800 h-fit ">
            <header className="flex mb-[10px]">
                <div className="relative w-[60px] h-[60px] overflow-hidden rounded-full mr-[10px]">
                    <Image alt="photo_user" src={img} objectFit="cover" fill />
                </div>
                <div>
                    <h1 className="text-[20px] text-zinc-500">{title}</h1>
                    <h2 className="text-[14px] text-zinc-600">{username}</h2>
                </div>
            </header>
            <p className="text-[14px] text-zinc-400 text-justify">{content}</p>
        </div>
    )
}

export default Post