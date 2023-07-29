import "./../styles/globals.css"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import { MdKeyboardArrowDown } from "react-icons/md"
import { AiOutlineSearch } from "react-icons/ai"
import { GoPeople } from "react-icons/go"
import { BiSolidPlaylist } from "react-icons/bi"
import { BiLink, BiPlayCircle } from "react-icons/bi"

export const metadata: Metadata = { title: "Social Music", creator: "LuciLua" }
const inter = Inter({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export default function root_layout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body className={`bg-zinc-300 text-zinc-50 flex flex-col h-screen w-full ${inter.className} relative w-screen overflow-hidden`}>
                <div className="w-full h-full flex justify-between">
                    {/* perfil */}
                    <nav className=" bg-zinc-950 w-[256px] min-w-[256px] overflow-y-scroll overflow-x-hidden h-[calc(100dvh-80px)]">
                        {/* profile */}
                        <div className="flex gap-4 items-center px-5 pt-5">
                            <div className="w-10 h-10 overflow-hidden flex rounded-full">
                                <img src="/a.jpg" alt="" className="object-cover w-full h-full" />
                            </div>
                            <div className="text-zinc-100 flex gap-1">
                                <h1 className="text-sm font-bold ">Luci Lua</h1>
                                <MdKeyboardArrowDown className="relative mt-[3px]" />
                            </div>
                        </div>
                        {/* search */}
                        <div className="relative mt-5 flex items-center px-5">
                            <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1px] rounded-md overflow-hidden group">
                                <input spellCheck={false} placeholder="Search something..." className="font-[300] text-[14px] px-2 w-full h-8 bg-zinc-900 rounded-md placeholder:text-zinc-400 text-zinc-400 outline-none pl-9" />
                            </div>
                            <AiOutlineSearch className="absolute ml-3" />
                        </div>
                        {/* div */}
                        <div className="w-full h-[1px] bg-zinc-800 mt-10" />
                        {/* groups */}
                        <div className="w-full">
                            <h1 className="px-5 mt-4 mb-3 text-lg flex items-center gap-2"><GoPeople /> Grupos</h1>
                            <ul className="flex gap-3 flex-col px-5 text-zinc-500">
                                <li><a className="flex gap-2 items-center hover:text-zinc-400" href="#"><GoPeople /> Kpop</a></li>
                                <li><a className="flex gap-2 items-center hover:text-zinc-400" href="#"><GoPeople /> Ariana grande fans</a></li>
                                <li><a className="flex gap-2 items-center hover:text-zinc-400" href="#"><GoPeople /> Amo a gaga</a></li>
                            </ul>
                        </div>
                        {/* div */}
                        <div className="w-full h-[1px] bg-zinc-800 mt-10" />
                        {/* playlists */}
                        <div className="w-full">
                            <h1 className="px-5 mt-4 mb-3 text-lg flex items-center gap-2"><BiSolidPlaylist /> Playlists</h1>
                            <ul className="flex gap-3 flex-col px-5 text-zinc-500">
                                <li><a className="flex gap-2 items-center hover:text-zinc-400" href="#"><BiSolidPlaylist /> Mais ouvidas</a></li>
                                <li><a className="flex gap-2 items-center hover:text-zinc-400" href="#"><BiSolidPlaylist /> Favoritas de kpop</a></li>
                                <li><a className="flex gap-2 items-center hover:text-zinc-400" href="#"><BiSolidPlaylist /> Sertanejo hits</a></li>
                                <li><a className="flex gap-2 items-center hover:text-zinc-400" href="#"><BiSolidPlaylist /> Mais tocadas do POP</a></li>
                            </ul>
                        </div>
                        {/* main */}
                    </nav>
                    {/* main */}
                    <div className="max-w-[calc(100%-512px)] w-full">
                        {children}
                    </div>
                    {/* mais tocadas */}
                    <nav className=" bg-zinc-950 w-[256px] min-w-[256px] overflow-y-scroll overflow-x-hidden h-[calc(100dvh-80px)] relative">
                        <div className="text-sm w-full h-fit flex justify-center items-center flex-col">
                            <div className="w-full  h-full bg-zinc-950 overflow-hidden relative flex justify-center items-start flex-col p-3 border-b-zinc-800 border-b-[1px]">
                                <h1>Central Cee x Dave - Sprinter [Music Video]</h1>
                                <a className="mt-4 relative" href="https://www.youtube.com/watch?v=pSY3i5XHHXo">
                                    <span className="relative flex justify-center items-center gap-2 px-[15px] py-[2px] text-zinc-600"><BiLink /> Link</span>
                                </a>
                            </div>
                            <div className="w-full  h-full bg-zinc-950 overflow-hidden relative flex justify-center items-start flex-col p-3 border-b-zinc-800 border-b-[1px]">
                                <h1>Central Cee x Dave - Sprinter [Music Video]</h1>
                                <a className="mt-4 relative" href="https://www.youtube.com/watch?v=pSY3i5XHHXo">
                                    <span className="relative flex justify-center items-center gap-2 px-[15px] py-[2px] text-zinc-600"><BiLink /> Link</span>
                                </a>
                            </div>
                            <div className="w-full  h-full bg-zinc-950 overflow-hidden relative flex justify-center items-start flex-col p-3 border-b-zinc-800 border-b-[1px]">
                                <h1>Central Cee x Dave - Sprinter [Music Video]</h1>
                                <a className="mt-4 relative" href="https://www.youtube.com/watch?v=pSY3i5XHHXo">
                                    <span className="relative flex justify-center items-center gap-2 px-[15px] py-[2px] text-zinc-600"><BiLink /> Link</span>
                                </a>
                            </div>
                            <div className="w-full  h-full bg-zinc-950 overflow-hidden relative flex justify-center items-start flex-col p-3 border-b-zinc-800 border-b-[1px]">
                                <h1>Central Cee x Dave - Sprinter [Music Video]</h1>
                                <a className="mt-4 relative" href="https://www.youtube.com/watch?v=pSY3i5XHHXo">
                                    <span className="relative flex justify-center items-center gap-2 px-[15px] py-[2px] text-zinc-600"><BiLink /> Link</span>
                                </a>
                            </div>
                            <div className="w-full  h-full bg-zinc-950 overflow-hidden relative flex justify-center items-start flex-col p-3 border-b-zinc-800 border-b-[1px]">
                                <h1>Central Cee x Dave - Sprinter [Music Video]</h1>
                                <a className="mt-4 relative" href="https://www.youtube.com/watch?v=pSY3i5XHHXo">
                                    <span className="relative flex justify-center items-center gap-2 px-[15px] py-[2px] text-zinc-600"><BiLink /> Link</span>
                                </a>
                            </div>
                            <div className="w-full  h-full bg-zinc-950 overflow-hidden relative flex justify-center items-start flex-col p-3 border-b-zinc-800 border-b-[1px]">
                                <h1>Central Cee x Dave - Sprinter [Music Video]</h1>
                                <a className="mt-4 relative" href="https://www.youtube.com/watch?v=pSY3i5XHHXo">
                                    <span className="relative flex justify-center items-center gap-2 px-[15px] py-[2px] text-zinc-600"><BiLink /> Link</span>
                                </a>
                            </div>
                            <div className="w-full  h-full bg-zinc-950 overflow-hidden relative flex justify-center items-start flex-col p-3 border-b-zinc-800 border-b-[1px]">
                                <h1>Central Cee x Dave - Sprinter [Music Video]</h1>
                                <a className="mt-4 relative" href="https://www.youtube.com/watch?v=pSY3i5XHHXo">
                                    <span className="relative flex justify-center items-center gap-2 px-[15px] py-[2px] text-zinc-600"><BiLink /> Link</span>
                                </a>
                            </div>
                            <div className="w-full  h-full bg-zinc-950 overflow-hidden relative flex justify-center items-start flex-col p-3 border-b-zinc-800 border-b-[1px]">
                                <h1>Central Cee x Dave - Sprinter [Music Video]</h1>
                                <a className="mt-4 relative" href="https://www.youtube.com/watch?v=pSY3i5XHHXo">
                                    <span className="relative flex justify-center items-center gap-2 px-[15px] py-[2px] text-zinc-600"><BiLink /> Link</span>
                                </a>
                            </div>
                            <div className="w-full  h-full bg-zinc-950 overflow-hidden relative flex justify-center items-start flex-col p-3 border-b-zinc-800 border-b-[1px]">
                                <h1>Central Cee x Dave - Sprinter [Music Video]</h1>
                                <a className="mt-4 relative" href="https://www.youtube.com/watch?v=pSY3i5XHHXo">
                                    <span className="relative flex justify-center items-center gap-2 px-[15px] py-[2px] text-zinc-600"><BiLink /> Link</span>
                                </a>
                            </div>
                            <div className="w-full  h-full bg-zinc-950 overflow-hidden relative flex justify-center items-start flex-col p-3 border-b-zinc-800 border-b-[1px]">
                                <h1>Central Cee x Dave - Sprinter [Music Video]</h1>
                                <a className="mt-4 relative" href="https://www.youtube.com/watch?v=pSY3i5XHHXo">
                                    <span className="relative flex justify-center items-center gap-2 px-[15px] py-[2px] text-zinc-600"><BiLink /> Link</span>
                                </a>
                            </div>
                            <div className="w-full  h-full bg-zinc-950 overflow-hidden relative flex justify-center items-start flex-col p-3 border-b-zinc-800 border-b-[1px]">
                                <h1>Central Cee x Dave - Sprinter [Music Video]</h1>
                                <a className="mt-4 relative" href="https://www.youtube.com/watch?v=pSY3i5XHHXo">
                                    <span className="relative flex justify-center items-center gap-2 px-[15px] py-[2px] text-zinc-600"><BiLink /> Link</span>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
                <footer className="h-[80px] bg-zinc-800 flex justify-center items-center p-10 gap-3">
                    <div className="w-fit h-fit flex justify-center items-center">
                        <BiPlayCircle className="text-zinc-500 text-[40px]" />
                    </div>
                    <div className="h-2 w-full bg-zinc-600 rounded-lg flex items-center">
                        <div className="bg-zinc-900 rounded-full w-3 h-3 absolute"></div>
                    </div>
                    <div>
                        <p className="text-zinc-500 text-[15px]">00:00</p>
                    </div>
                </footer>
            </body>
        </html>
    )
}