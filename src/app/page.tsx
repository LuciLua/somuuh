import { Metadata } from "next"

export const metadata: Metadata = { title: "Social Music | Home", creator: "LuciLua" }

export default function homepage() {
    return (
        <div className="flex flex-col relative h-[calc(100dvh-80px)] w-full">
            {/* name page */}
            <div className="bg-zinc-800 py-4 px-6 w-full">
                <h1 className="text-zinc-500">Social Music <span className="text-zinc-600 text-[14px]"> / eventos dos amigos</span></h1>
            </div>
            {/* baloons */}
            <div className="relative h-fit w-full max-w-full flex justify-center items-center border-b-[1px] border-zinc-700 bg-zinc-800">
                <div className="flex gap-5 w-full relative max-w-full overflow-y-hidden overflow-x-scroll py-5 pl-5">

                    <div className="w-[80px] h-[80px] justify-center items-center flex flex-col">
                        <div className="rounded-full h-[56px] w-[56px] min-h-[56px] min-w-[56px] flex items-center justify-center relative bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 overflow-hidden hover:animate-spin transition-all ease-in-out">
                            <div className="bg-zinc-900 rounded-full h-[52px] w-[52px] absolute"></div>
                        </div>
                        <p className="text-zinc-500 text-[12px] pt-2 text-ellipsis max-w-[70px] overflow-hidden" title="@mariazinha">@mariazinha</p>
                    </div>
                    <div className="w-[80px] h-[80px] justify-center items-center flex flex-col">
                        <div className="rounded-full h-[56px] w-[56px] min-h-[56px] min-w-[56px] flex items-center justify-center relative bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 overflow-hidden hover:animate-spin transition-all ease-in-out">
                            <div className="bg-zinc-900 rounded-full h-[52px] w-[52px] absolute"></div>
                        </div>
                        <p className="text-zinc-500 text-[12px] pt-2 text-ellipsis max-w-[70px] overflow-hidden" title="@fiuk2000">@fiuk2000</p>
                    </div>
                    <div className="w-[80px] h-[80px] justify-center items-center flex flex-col">
                        <div className="rounded-full h-[56px] w-[56px] min-h-[56px] min-w-[56px] flex items-center justify-center relative bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 overflow-hidden hover:animate-spin transition-all ease-in-out">
                            <div className="bg-zinc-900 rounded-full h-[52px] w-[52px] absolute"></div>
                        </div>
                        <p className="text-zinc-500 text-[12px] pt-2 text-ellipsis max-w-[70px] overflow-hidden" title="@carine">@carine</p>
                    </div>
                    <div className="w-[80px] h-[80px] justify-center items-center flex flex-col">
                        <div className="rounded-full h-[56px] w-[56px] min-h-[56px] min-w-[56px] flex items-center justify-center relative bg-gradient-to-r from-[#202020] via-[#404040] to-[#505050] overflow-hidden">
                            <div className="bg-zinc-900 rounded-full h-[52px] w-[52px] absolute"></div>
                        </div>
                        <p className="text-zinc-500 text-[12px] pt-2 text-ellipsis max-w-[70px] overflow-hidden" title="@giovanne87.pop">@giovanne87.pop</p>
                    </div>
                    <div className="w-[80px] h-[80px] justify-center items-center flex flex-col">
                        <div className="rounded-full h-[56px] w-[56px] min-h-[56px] min-w-[56px] flex items-center justify-center relative bg-gradient-to-r from-[#202020] via-[#404040] to-[#505050] overflow-hidden">
                            <div className="bg-zinc-900 rounded-full h-[52px] w-[52px] absolute"></div>
                        </div>
                        <p className="text-zinc-500 text-[12px] pt-2 text-ellipsis max-w-[70px] overflow-hidden" title="@lola">@lola</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-zinc-900 w-full gap-3  pt-3 h-full relative overflow-hidden">
                {/* cards */}
                <div className="m-auto gap-10 pt-10 flex flex-col max-w-[1300px]">
                    <h1 className="font-medium text-[56px]">Conheça as novas tendências</h1>
                    <div className="h-fit grid grid-cols-3 grid-rows-2 m-auto gap-10 ">
                        <div className="w-[250px] row-span-1 col-span-1 h-[150px] shadow-2xl border-zinc-800 border-[1px] rounded-md flex justify-center items-center">
                            <div className="w-[250px] row-span-2 col-span-1 h-full bg-zinc-900 rounded-md overflow-hidden relative flex justify-center items-start flex-col p-3">
                                <h1>Central Cee x Dave - Sprinter [Music Video]</h1>
                                <a className="mt-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1px] rounded-md overflow-hidden relative" href="https://www.youtube.com/watch?v=pSY3i5XHHXo">
                                    <span className="bg-zinc-900 rounded-md overflow-hidden relative flex justify-center items-start flex-col px-[15px] py-[2px]">Link</span>
                                </a>
                            </div>
                        </div>
                        <div className="w-[250px] row-span-1 col-span-1 h-[150px] shadow-2xl border-zinc-800 border-[1px] rounded-md flex justify-center items-center">
                            <div className="w-[250px] row-span-2 col-span-1 h-full bg-zinc-900 rounded-md overflow-hidden relative flex justify-center items-start flex-col p-3">
                                <h1>Central Cee x Dave - Sprinter [Music Video]</h1>
                                <a className="mt-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1px] rounded-md overflow-hidden relative" href="https://www.youtube.com/watch?v=pSY3i5XHHXo">
                                    <span className="bg-zinc-900 rounded-md overflow-hidden relative flex justify-center items-start flex-col px-[15px] py-[2px]">Link</span>
                                </a>
                            </div>
                        </div>
                        <div className="transition-[1s] group w-[250px] row-span-2 col-span-1 h-full shadow-2xl border-zinc-800 border-[1px] hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:p-[1px] rounded-md hover:overflow-hidden relative flex justify-center items-center">
                            <div className="w-[250px] row-span-2 col-span-1 h-full bg-zinc-900 rounded-md overflow-hidden relative flex justify-center items-start flex-col p-3 hover:bg-gradient-to-r hover:group-[]:to-zinc-900 hover:group-[]:from-zinc-800/25">
                                <h1>Central Cee x Dave - Sprinter [Music Video]</h1>
                                <a className="mt-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1px] rounded-md overflow-hidden relative" href="https://www.youtube.com/watch?v=pSY3i5XHHXo">
                                    <span className="bg-zinc-900 rounded-md overflow-hidden relative flex justify-center items-start flex-col px-[15px] py-[2px]">Link</span>
                                </a>
                            </div>
                        </div>
                        <div className="w-[250px] row-span-2 col-span-1 h-[150px]  shadow-2xl border-zinc-800 border-[1px] rounded-md flex justify-center items-center">
                            <div className="w-[250px] row-span-2 col-span-1 h-full bg-zinc-900 rounded-md overflow-hidden relative flex justify-center items-start flex-col p-3">
                                <h1>Central Cee x Dave - Sprinter [Music Video]</h1>
                                <a className="mt-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1px] rounded-md overflow-hidden relative" href="https://www.youtube.com/watch?v=pSY3i5XHHXo">
                                    <span className="bg-zinc-900 rounded-md overflow-hidden relative flex justify-center items-start flex-col px-[15px] py-[2px]">Link</span>
                                </a>
                            </div>
                        </div>
                        <div className="w-[250px] row-span-2 col-span-1 h-[150px]  shadow-2xl border-zinc-800 border-[1px] rounded-md flex justify-center items-center">
                            <div className="w-[250px] row-span-2 col-span-1 h-full bg-zinc-900 rounded-md overflow-hidden relative flex justify-center items-start flex-col p-3">
                                <h1>Central Cee x Dave - Sprinter [Music Video]</h1>
                                <a className="mt-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1px] rounded-md overflow-hidden relative" href="https://www.youtube.com/watch?v=pSY3i5XHHXo">
                                    <span className="bg-zinc-900 rounded-md overflow-hidden relative flex justify-center items-start flex-col px-[15px] py-[2px]">Link</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* contents */}
                <div className="bg-zinc-950 overflow-y-scroll overflow-x-hidden h-full p-3">
                </div>
            </div>
        </div>
    )
}