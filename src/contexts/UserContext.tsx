'use client'

import { createContext, useState } from "react"

export const UserContext = createContext<any>({})

export default function UserContextProvider({ children }) {

    const [user, setUser] = useState<any>({ username: "anonymous" })

    function newUser(username: string) {
        setUser((prev: any) => user.username = username)
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