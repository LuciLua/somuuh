'use client'

import Link from "next/link"
import { MdKeyboardArrowDown, MdHomeFilled } from "react-icons/md"
import { ModalUserMenu } from "./ModalUserMenu"
import { useState } from "react"
import useUser from "../../../hooks/useUser"
import Image from "next/image"

function Profile() {

    const [modalUserMenuIsOpen, setModalUserMenuIsOpen] = useState(false)
    const { user } = useUser()

    function openModalUserMenu() {
        setModalUserMenuIsOpen(!modalUserMenuIsOpen)
    }

    return (
        <div className="flex gap-4 items-center px-5 w-fit min-w-fit lg:w-full lg:pt-5 pt-0" >
            <div className="w-10 h-10 overflow-hidden flex rounded-full">
                <img src="/a.jpg" alt="" className="object-cover w-full h-full" />
            </div>
            <div className="text-zinc-100 flex gap-1 relative">
                <h1 className="text-sm font-bold ">{user.username}</h1>
                <div className="relative">
                    <MdKeyboardArrowDown onClick={openModalUserMenu} className="cursor-pointer relative mt-[3px]" />
                    {modalUserMenuIsOpen && <ModalUserMenu />}
                </div>

            </div>
            <div className="ml-auto mr-1 hover:text-zinc-400 lg:flex hidden">
                <Link href="/">
                    <MdHomeFilled />
                </Link>
            </div>
        </div>
    )
}


export default Profile