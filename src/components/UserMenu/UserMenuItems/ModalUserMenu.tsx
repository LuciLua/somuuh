import Link from "next/link"
import useUser from "../../../hooks/useUser"

function ModalUserMenu() {

    const { user, newUser, exitUser } = useUser()

    return (
        <div className="w-[150px] bg-zinc-900 shadow-xl text-white flex flex-col absolute top-[30px] rounded-[4px] z-[60]">

            {user.username === "anonymous" ?
                <div className="hover:bg-zinc-950 px-[15px] py-[9px]"
                    onClick={() => newUser({ username: "Luci Lua" })} >Login</div>
                :
                <Link href={`/profile/${user.username}`} className="hover:bg-zinc-950 px-[15px] py-[9px]">Perfil</Link>
            }
            {user.username !== "anonymous" &&
                <>
                    <Link href="/groups" className="hover:bg-zinc-950 px-[15px] py-[9px]">Grupos</Link>
                    <Link href="/playlists" className="hover:bg-zinc-950 px-[15px] py-[9px]">Playlists</Link>
                    <Link href="/" className="hover:bg-zinc-950 px-[15px] py-[9px]">Configurações</Link>
                    <Link href="/" className="hover:bg-zinc-950 px-[15px] py-[9px]" onClick={() => newUser({ username: "anonymous" })}>Sair</Link>
                </>
            }
        </div>
    )
}


export { ModalUserMenu }