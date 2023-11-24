'use client'

import SearchBox from "./UserMenuItems/SearchBox";
import Profile from "./UserMenuItems/Profile";
import Image from "next/image";
import LoginBtns from "./UserMenuItems/LoginBtns";
import useUser from "../../hooks/useUser";

function UserMenu() {

    const { user } = useUser()

    return (
        <nav className="lg:bg-zinc-950 bg-zinc-800  w-full py-2 lg:block z-[60] relative flex flex-col h-fit  shadow-lg border-b-[1px] border-zinc-800" >
            {user.username === "anonymous" ?
                <div className="flex relative h-full w-full">
                    <LoginBtns />
                </div>
                :
                <div className="flex lg:block  relative">
                    <Profile />
                    <SearchBox />
                </div>
            }
        </nav>
    )
}

export default UserMenu;