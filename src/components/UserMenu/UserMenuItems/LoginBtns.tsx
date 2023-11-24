'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useLoginModal from "../../../hooks/useLoginModal";

function LoginBtns() {

    const { loginModalOpened, toggleLoginModal } = useLoginModal()

    return (
        <div className="flex items-center px-5 min-w-fit lg:w-full lg:pt-5 pt-0 flex-col w-full h-full relative">
            <Link href={'/'} className="w-full h-[30px] overflow-hidden flex relative justify-center items-center my-6">
                <Image src={'/logos/logo2.png'} fill alt="logo" className="object-contain" />
            </Link>
            <button className="bg-[linear-gradient(23deg,#202020,#12121219_93%)] border-[1px] border-[#202020] px-5 py-2 rounded-[4px] w-full mb-3" onClick={() => toggleLoginModal()}>Login</button>
            <button className="text-[14px] w-full text-zinc-500">Criar uma conta</button>
        </div>
    )
}

export default LoginBtns