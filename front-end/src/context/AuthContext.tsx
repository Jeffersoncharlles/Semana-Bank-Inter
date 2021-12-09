import { createContext, useCallback, useEffect, useState } from "react";
import { ISignInData, ISignUpData, signIn, signUp } from "../services/resources/user";

interface UserDto {
    id: string;
    firstName: string;
    lastName: string;
    accountNumber: number;
    accountDigit: number;
    wallet: number;
    email: string;
}

interface IContextData {
    user: UserDto;
    UserSignIn: () => void;
    UserSignUp: () => void;
}

const AuthContext = createContext<IContextData>({} as IContextData)


const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<IContextData>({} as IContextData)


    const UserSignIn = async (userData: ISignInData) => {
        const { data } = await signIn(userData);
        localStorage.setItem('@InterDev:Token', data.accessToken);
    }
    const UserSignUp = async (userData: ISignUpData) => {
        const { data } = await signUp(userData);
    }

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}



export { AuthContext, AuthProvider }