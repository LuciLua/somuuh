export default function groups({ params }) {
    return (
        <div className="bg-zinc-800  relative h-full z-20 flex flex-col ">
            <div className="p-[20px] flex flex-col ">
                <h1 className="text-zinc-100 font-normal text-[30px] mb-[20px]">Meus grupos</h1>
                <div className="flex flex-col  h-full">

                    <a href="/groups/kpop" className=" py-[10px] px-[20px] gap-[10px] items-center flex w-full min-h-[30px]  p-[10px] hover:bg-zinc-700">
                        <div className="rounded-full w-[60px] h-[60px] overflow-hidden relative">
                            <img src="/kpop_profile.jpg" alt="" className="w-full h-full object-cover" />
                        </div>
                        <p>Grupo: Kpop</p>
                    </a>
                    <div className="w-full h-[1px] bg-zinc-700" />
                    <a href="/groups/arianagrandefas" className=" py-[10px] px-[20px] gap-[10px] items-center flex w-full min-h-[30px]  p-[10px] hover:bg-zinc-700">
                        <div className="rounded-full w-[60px] h-[60px] overflow-hidden relative">
                            <img src="/ariana_profile.jpeg" alt="" className="w-full h-full object-cover" />
                        </div>
                        <p>Grupo: Ariana Grande Fãs</p>
                    </a>
                    <div className="w-full h-[1px] bg-zinc-700 " />
                    <a href="/groups/amoagaga" className=" py-[10px] px-[20px] gap-[10px] items-center flex w-full min-h-[30px]  p-[10px] hover:bg-zinc-700">
                        <div className="rounded-full w-[60px] h-[60px] overflow-hidden relative">
                            <img src="/gaga_profile.jpeg" alt="" className="w-full h-full object-cover" />
                        </div>
                        <p>Grupo: Amo a Gaga</p>
                    </a>
                </div>
            </div>
        </div>
    )
}