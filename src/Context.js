import { createContext, useContext, useState } from "react";


const UserAuth = createContext();

export const ContextProvider = ({ children }) =>{
    const [showWallet, setShowWallet] = useState(false);
    return(
        <UserAuth.Provider value={{
            showWallet,
            setShowWallet

        }}>
            { children }
        </UserAuth.Provider>
    )
};

export const useAuth = () =>{
    return useContext(UserAuth);
}