'use client'

import { SessionProvider } from "next-auth/react";
import LoginModalContextProvider from "../../contexts/LoginModalContext";
import UserContextProvider from "../../contexts/UserContext";

function Providers({ children }) {
    return (
        <SessionProvider>
            <LoginModalContextProvider>
                <UserContextProvider>
                    {children}
                </UserContextProvider>
            </LoginModalContextProvider >
        </SessionProvider>
    )
}

export default Providers