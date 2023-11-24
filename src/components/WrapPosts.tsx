'use client'

import useUser from "../hooks/useUser"
import { useSession } from "next-auth/react"

function WrapPosts({ children }) {

    const { user } = useUser()
    const { data: session } = useSession()


    return (
        <>
            {!session ?
                <div className="mt-[50px] justify-center items-center flex flex-col bg-zinc-900 w-full relative lg:overflow-scroll lg:pt-0 lg:min-h-fit h-fit lg:mt-0">
                    {children}
                </div>
                :
                <div className="mt-[0px] justify-center items-center flex flex-col bg-zinc-900 w-full relative lg:overflow-scroll lg:pt-0 lg:min-h-fit h-fit">
                    {children}
                </div>

            }
        </>

    )
}

export default WrapPosts