import Link from "next/link"

function ModalUserMenu() {
    return (
        <div className="w-[150px] bg-zinc-900 shadow-xl text-white flex flex-col absolute top-[30px] rounded-[4px] z-[60]">
            <Link href="/profile/lucilua" className="hover:bg-zinc-950 px-[15px] py-[9px]">Perfil</Link>
            <Link href="/groups" className="hover:bg-zinc-950 px-[15px] py-[9px]">Grupos</Link>
            <Link href="/playlists" className="hover:bg-zinc-950 px-[15px] py-[9px]">Playlists</Link>
            <Link href="/" className="hover:bg-zinc-950 px-[15px] py-[9px]">Configurações</Link>
            <Link href="/" className="hover:bg-zinc-950 px-[15px] py-[9px]">Sair</Link>
        </div>
    )
}


export { ModalUserMenu }