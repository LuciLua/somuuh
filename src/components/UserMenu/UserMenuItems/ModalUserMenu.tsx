function ModalUserMenu() {
    return (
        <div className="w-[150px] bg-zinc-900 shadow-xl text-white flex flex-col absolute top-[30px] rounded-[4px] z-[60]">
            <a href="/" className="hover:bg-zinc-950 px-[15px] py-[9px]">Perfil</a>
            <a href="/groups" className="hover:bg-zinc-950 px-[15px] py-[9px]">Grupos</a>
            <a href="/playlists" className="hover:bg-zinc-950 px-[15px] py-[9px]">Playlists</a>
            <a href="/" className="hover:bg-zinc-950 px-[15px] py-[9px]">Configurações</a>
            <a href="/" className="hover:bg-zinc-950 px-[15px] py-[9px]">Sair</a>
        </div>
    )
}


export { ModalUserMenu }