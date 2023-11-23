import UserContextProvider from "../../contexts/UserContext";

function Providers({ children }) {
    return (
        <UserContextProvider>
            {children}
        </UserContextProvider>
    )
}

export default Providers