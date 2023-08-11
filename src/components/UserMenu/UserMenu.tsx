import GroupsMenuList from "./UserMenuItems/GroupsMenuList";
import PlaylistsMenuList from "./UserMenuItems/PlaylistsMenuList";
import SearchBox from "./UserMenuItems/SearchBox";
import Profile from "./UserMenuItems/Profile";

function UserMenu() {
    return (
        <nav className=" bg-zinc-950 w-[256px] min-w-[200px] overflow-y-scroll overflow-x-hidden h-[calc(100dvh-80px)] flex flex-col" >
            <Profile />
            <SearchBox />
            < div className="w-full h-[1px] bg-zinc-800 mt-10" />
            <GroupsMenuList />
            < div className="w-full h-[1px] bg-zinc-800 mt-10" />
            <PlaylistsMenuList />
        </nav>
    )
}

export default UserMenu;