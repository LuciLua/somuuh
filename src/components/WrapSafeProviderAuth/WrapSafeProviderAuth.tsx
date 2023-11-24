'use client'

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import LoginBtns from "../UserMenu/UserMenuItems/LoginBtns"

function WrapSafeProviderAuth({ children }) {

    const { data: session, status } = useSession()

    if (status === "loading") {
        return <p>loading...</p>
    }
    if (status === "unauthenticated") {
        return (
            <div className="w-full h-full justify-center items-center flex flex-col">
                <p className="text-[20px]">Não autenticado. Faça login</p>
                <LoginBtns />
            </div>
        )
    }
    else {
        return children
    }
}


export default WrapSafeProviderAuth