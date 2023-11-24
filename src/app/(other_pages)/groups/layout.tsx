import { Metadata } from "next"
import WrapSafeProviderAuth from "../../../components/WrapSafeProviderAuth/WrapSafeProviderAuth"

export const metadata: Metadata = { title: "Grupos" }

export default async function groups_layout({ children }) {
    return (
        <WrapSafeProviderAuth>
            {children}
        </WrapSafeProviderAuth>
    )
}