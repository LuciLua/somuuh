import WrapSafeProviderAuth from "../../../components/WrapSafeProviderAuth/WrapSafeProviderAuth";

export default async function profile({ children }) {
    return (
        <WrapSafeProviderAuth>
            <div className="bg-slate-600 w-full h-full">
                {children}
            </div>
        </WrapSafeProviderAuth>
    )
}