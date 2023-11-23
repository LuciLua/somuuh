import { Metadata } from "next"
import UserMenu from "../UserMenu/UserMenu"
import GroupsMenuList from "./GroupsList/GroupsMenuList"
import PlaylistsMenuList from "./PlaylistsList/PlaylistsMenuList"

function GroupsList() {
    return (
        <GroupsMenuList />
    )
}
function PlaylistsList() {
    return (
        <PlaylistsMenuList />
    )
}

function GroupsAndPlaylistsUserMenu() {
    return (
        <nav className="lg:flex hidden bg-zinc-950 w-menu-left-width overflow-y-scroll overflow-x-hidden pb-5 max-h-[calc(100dvh-80px)] min-h-[calc(100dvh-80px)] flex-col">
            <UserMenu />
            <div className="w-full h-[1px] bg-zinc-800 mt-10" />
            <GroupsList />
            <div className="w-full h-[1px] bg-zinc-800 mt-10" />
            <PlaylistsList />
        </nav>
    )
}

export { GroupsList, PlaylistsList, GroupsAndPlaylistsUserMenu }