'use client'

import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

const useUser = () => {
    const { user, newUser, exitUser } = useContext(UserContext)

    return { user, newUser, exitUser }
}

export default useUser