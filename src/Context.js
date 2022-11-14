import { createContext, useContext, useState } from "react";


const UserAuth = createContext();

export const ContextProvider = ({ children }) =>{
    const [showWallet, setShowWallet] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    return(
        <UserAuth.Provider value={{
            showWallet,
            setShowWallet,
            showMenu, 
            setShowMenu

        }}>
            { children }
        </UserAuth.Provider>
    )
};

export const useAuth = () =>{
    return useContext(UserAuth);
}