import UserMenu from "../UserMenu/UserMenu"
import GroupsMenuList from "./GroupsList/GroupsMenuList"
import PlaylistsMenuList from "./PlaylistsList/PlaylistsMenuList"

function GroupsList() {
    return (
        <>
            <div className="w-full h-[1px] bg-zinc-800 mt-10" />
            <GroupsMenuList />
        </>

    )
}
function PlaylistsList() {
    return (
        <>
            <div className="w-full h-[1px] bg-zinc-800 mt-10" />
            <PlaylistsMenuList />
        </>

    )
}

function GroupsAndPlaylistsUserMenu() {
    return (
        <nav className="lg:flex hidden bg-zinc-950 w-[256px] min-w-[200px] overflow-y-scroll overflow-x-hidden pb-5 max-h-[calc(100dvh-80px)] min-h-[calc(100dvh-80px)] flex-col">
            <UserMenu />
            <GroupsList />
            <PlaylistsList />
        </nav>
    )
}

export { GroupsList, PlaylistsList, GroupsAndPlaylistsUserMenu }