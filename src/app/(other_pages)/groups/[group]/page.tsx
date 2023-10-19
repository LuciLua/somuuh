export default function group({ params }) {
    return (
        <div className="bg-zinc-800  relative h-full z-20 flex flex-col ">
            <header className="w-full bg-zinc-700 h-[200px] relative flex mb-[80px] mt-[0px]">
                <div className="relative overflow-hidden w-full h-full">
                <img src="/kpop_capa.jpeg" className="object-cover h-full w-full brightness-50"/>
                </div>
                <div className="rounded-full w-[120px] h-[120px] bg-zinc-900 absolute bottom-[-60px] left-[20px] overflow-hidden">
                    <img src="/kpop_profile.jpg" className="w-full h-full object-cover"/>
                </div>
            </header>
            <div className="p-[20px] flex flex-col ">
                <h1 className="text-zinc-100 font-normal text-[30px]">Bem-vindo(a) à página do grupo {params.group}</h1>
                <div className="flex flex-col gap-4 mt-5 h-full">
                    <div className="w-full min-h-[30px] bg-zinc-700 p-[10px] rounded-lg">
                        post
                    </div>
                    <div className="w-full min-h-[30px] bg-zinc-700 p-[10px] rounded-lg">
                        post
                    </div>
                    <div className="w-full min-h-[30px] bg-zinc-700 p-[10px] rounded-lg">
                        post
                    </div>
                    <div className="w-full min-h-[30px] bg-zinc-700 p-[10px] rounded-lg">
                        post
                    </div>
                    <div className="w-full min-h-[30px] bg-zinc-700 p-[10px] rounded-lg">
                        post
                    </div>
                    <div className="w-full min-h-[30px] bg-zinc-700 p-[10px] rounded-lg">
                        post
                    </div>
                    <div className="w-full min-h-[30px] bg-zinc-700 p-[10px] rounded-lg">
                        post
                    </div>
                    <div className="w-full min-h-[30px] bg-zinc-700 p-[10px] rounded-lg">
                        post
                    </div>
                    <div className="w-full min-h-[30px] bg-zinc-700 p-[10px] rounded-lg">
                        post
                    </div>
                    <div className="w-full min-h-[30px] bg-zinc-700 p-[10px] rounded-lg">
                        post
                    </div>
                    <div className="w-full min-h-[30px] bg-zinc-700 p-[10px] rounded-lg">
                        post
                    </div>
                    <div className="w-full min-h-[30px] bg-zinc-700 p-[10px] rounded-lg">
                        post
                    </div>
                    <div className="w-full min-h-[30px] bg-zinc-700 p-[10px] rounded-lg">
                        post
                    </div>
                    <div className="w-full min-h-[30px] bg-zinc-700 p-[10px] rounded-lg">
                        post
                    </div>
                    <div className="w-full min-h-[30px] bg-zinc-700 p-[10px] rounded-lg">
                        post
                    </div>
                    <div className="w-full min-h-[30px] bg-zinc-700 p-[10px] rounded-lg">
                        post
                    </div>
                </div>
            </div>
        </div>
    )
}