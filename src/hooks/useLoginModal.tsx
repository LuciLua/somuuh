'use client'

import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { LoginModalContext } from "../contexts/LoginModalContext"

const useLoginModal = () => {
    const { loginModalOpened, toggleLoginModal } = useContext(LoginModalContext)

    return { loginModalOpened, toggleLoginModal }
}

export default useLoginModal