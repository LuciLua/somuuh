'use client'

import useLoginModal from "../../hooks/useLoginModal"
import useUser from "../../hooks/useUser"
import { AiOutlineClose } from "react-icons/ai"
import { useSession, signIn, signOut } from "next-auth/react"


function LoginModal() {

    // const { user, newUser } = useUser()
    const { toggleLoginModal, loginModalOpened } = useLoginModal()

    const { data: session } = useSession()

    async function login() {
        await signIn('google')
        await toggleLoginModal()
        // await newUser({ username: session?.user?.name })
    }

    return (
        <>
            {loginModalOpened &&
                <div className="h-[100dvh] w-full bg-[#121212ca] flex justify-center items-center fixed z-[70] flex-col">
                    <h1 className="text-zinc-200 text-[30px]">Bem-Vindo(a) ao Somuuh</h1>
                    <button onClick={login} className="bg-[linear-gradient(#12121203,#202020_40%)] py-2 px-4 mt-3 shadow-[12px] border-[1px] border-zinc-800 rounded-md">Login</button>
                    <button onClick={() => toggleLoginModal()} className="text-zinc-400 text-[14px] mt-3">Crie sua conta</button>
                    <button onClick={() => toggleLoginModal()} className="top-[20px] right-[20px] absolute bg-transparent text-[30px]"><AiOutlineClose /></button>
                </div>
            }
        </>
    )
}

export default LoginModal