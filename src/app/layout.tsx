import "./../styles/globals.css"
import { Inter } from "next/font/google"
import MaisTocadasMenu from "../components/MaisTocadasMenu/MaisTocadasMenu"
import Player from "../components/Player"
import { GroupsAndPlaylistsUserMenu } from "../components/GroupsPlaylistsUserMenu/GroupsAndPlaylistsUserMenu"
import { Metadata } from "next"
import Providers from "../components/Providers/Providers"
import LoginModal from "../components/LoginModal/LoginModal"

export const metadata: Metadata = {
    title: {
        absolute: "",
        default: "Somuuh",
        template: "%s | Somuuh"

    },
    creator: "LuciLua"
}
const inter = Inter({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export default function root_layout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body className={`bg-zinc-950 text-zinc-50 flex flex-col h-[100dvh]  w-full ${inter.className} relative w-screen overflow-hidden`}>
                <Providers>
                    <LoginModal />
                    {/* top of player */}
                    <div className="w-full h-full flex justify-between max-w-[1920px] mx-auto">
                        {/* left */}
                        <GroupsAndPlaylistsUserMenu />
                        {/* middle */}
                        <div className="lg:max-w-[calc(100%-512px)] w-full bg-zinc-800">
                            {children}
                        </div>
                        {/* right */}
                        <MaisTocadasMenu />
                    </div>
                    {/* bottom */}
                    <Player />
                </Providers>
            </body>
        </html>
    )
}