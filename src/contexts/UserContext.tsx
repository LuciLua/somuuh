'use client'

import { createContext, useEffect, useState } from "react"
import { useSession } from "next-auth/react"


export const UserContext = createContext<any>({})

export default function UserContextProvider({ children }) {

    const { data: session, status } = useSession()
    const [user, setUser] = useState<any>({ username: "anonymous" })

    useEffect(() => {
        newUser()
    }, [status, session])

    function setUserAsSoonAsPossible() {
        if (status === "unauthenticated") {
            setUser({ username: "anonymous" })
        }
        if (status === "loading") {
            setUser({ username: "loading..." })
        }
        if (status === "authenticated") {
            setUser({ username: session?.user?.name, image: session?.user?.image })
        }
        return user
    }

    async function newUser() {
        await setUserAsSoonAsPossible()
        return user
    }
    function exitUser() {
        setUser((prev: any) => user.username = "anonymous")
    }

    return (
        <UserContext.Provider value={{ user, newUser, exitUser }}>
            {children}
        </UserContext.Provider>
    )
}