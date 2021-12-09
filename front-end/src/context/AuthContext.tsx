import { createContext, useCallback, useEffect, useState } from "react";

interface IContextData {
    id: string;
    firstName: string;
    lastName: string;
    accountNumber: number;
    accountDigit: number;
    wallet: number;
    email: string;
}

const AuthContext = createContext<IContextData>({} as IContextData)


const AuthProvider: React.FC = ({ children }) => {




    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}



export { AuthContext, AuthProvider }