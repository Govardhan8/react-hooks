import { createContext } from "react";

export const UserContext = createContext("");

const UserContextProvider = ({children}) => {
    return <UserContext.Provider value={{user: "goku"}}>
        {children}
    </UserContext.Provider>
}

export default UserContextProvider;

