'use client'

import { createContext, useState } from "react";

export const LoginModalContext = createContext<any>({})

function LoginModalContextProvider({ children }) {

    const [loginModalOpened, setLoginModalOpened] = useState<any>(false)

    function toggleLoginModal() {
        setLoginModalOpened(!loginModalOpened)
    }

    return (
        <LoginModalContext.Provider value={{ loginModalOpened, toggleLoginModal }}>
            {children}
        </LoginModalContext.Provider>)
}

export default LoginModalContextProvider