'use client'

import SearchBox from "./UserMenuItems/SearchBox";
import Profile from "./UserMenuItems/Profile";
import Image from "next/image";
import LoginBtns from "./UserMenuItems/LoginBtns";
import useUser from "../../hooks/useUser";
import { useSession, signIn, signOut } from "next-auth/react"

function UserMenu() {

    const { user } = useUser()
    const { data: session } = useSession()

    return (
        <nav className="lg:bg-zinc-950 bg-zinc-800  w-full py-2 lg:block z-[60] relative flex flex-col h-fit  shadow-lg border-b-[1px] border-zinc-800" >

            {session && user.username !== "anonymous" ?

                <div className="flex lg:block  relative">
                    <Profile />
                    <SearchBox />
                </div>

                :

                <div className="flex relative h-full w-full">
                    <LoginBtns />
                </div>
            }

        </nav>
    )
}

export default UserMenu;