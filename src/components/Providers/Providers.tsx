import LoginModalContextProvider from "../../contexts/LoginModalContext";
import UserContextProvider from "../../contexts/UserContext";

function Providers({ children }) {
    return (
        <LoginModalContextProvider>
            <UserContextProvider>
                {children}
            </UserContextProvider>
        </LoginModalContextProvider>
    )
}

export default Providers