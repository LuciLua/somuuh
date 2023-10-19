import SearchBox from "./UserMenuItems/SearchBox";
import Profile from "./UserMenuItems/Profile";
import { GroupsList } from "../GroupsPlaylistsUserMenu/GroupsAndPlaylistsUserMenu";

function UserMenu() {
    return (
        <nav className="lg:bg-zinc-950 bg-zinc-800 h-fit w-full py-2 lg:block flex" >
            <Profile />
            <SearchBox />
        </nav>
    )
}

export default UserMenu;