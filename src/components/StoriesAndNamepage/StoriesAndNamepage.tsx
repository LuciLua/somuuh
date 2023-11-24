'use client'

import { useEffect, useState } from "react"
import useUser from "../../hooks/useUser"

function Namepage() {

    const [pathLabel, setPathLabel] = useState<any>(null)

    useEffect(() => {
        if (typeof window !== undefined) {
            setPathLabel(window?.location?.pathname)            
        } 
    }, [pathLabel])

    return (
        <div className="bg-zinc-800 py-4 px-6 w-full">
            <h1 className="text-zinc-500">Somuuh<span className="text-zinc-600 text-[14px]">{pathLabel === '/' ? "" : pathLabel}</span></h1>
        </div>
    )
}

function Stories() {

    const { user } = useUser()

    return (
        <>
            {user.username !== "anonymous" &&
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
            }
        </>

    )
}

export { Stories, Namepage }