import { Metadata } from "next"
import { AiOutlineGroup } from "react-icons/ai"
import WrapSafeProviderAuth from "../../../components/WrapSafeProviderAuth/WrapSafeProviderAuth"

export const metadata: Metadata = { title: "Playlists" }

export default function playlists_layout({ children }) {
    return (
        <WrapSafeProviderAuth>
            {children}
        </WrapSafeProviderAuth>
    )
}