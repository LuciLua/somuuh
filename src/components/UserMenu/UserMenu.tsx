'use client'

import SearchBox from "./UserMenuItems/SearchBox";
import Profile from "./UserMenuItems/Profile";
import Image from "next/image";
import LoginBtns from "./UserMenuItems/LoginBtns";
import useUser from "../../hooks/useUser";

function UserMenu() {

    const { user } = useUser()

    return (
        <nav className="lg:bg-zinc-950 bg-zinc-800 h-fit w-full py-2 lg:block z-[60]" >
            {user.username === "anonymous" ?
                <LoginBtns />
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