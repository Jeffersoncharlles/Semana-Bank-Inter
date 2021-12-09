import { createContext, useCallback, useEffect, useState } from "react";
import { ISignInData, ISignUpData, me, signIn, signUp } from "../services/resources/user";

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
    UserSignIn: (userData: ISignInData) => void;
    UserSignUp: (userData: ISignUpData) => void;
}

const AuthContext = createContext<IContextData>({} as IContextData)

const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<UserDto>({} as UserDto)

    //logar user
    const UserSignIn = async (userData: ISignInData) => {
        const { data } = await signIn(userData);

        if (data?.status === 'error') {
            return data;
        }

        if (data.accessToken) {
            localStorage.setItem('@InterDev:Token', data.accessToken);
        }

        await GetCurrentUser();

    }

    //cadastrar user
    const UserSignUp = async (userData: ISignUpData) => {
        const { data } = await signUp(userData);
        localStorage.setItem('@InterDev:Token', data.accessToken);

        await GetCurrentUser();
    }

    //salvar usuario na variavel
    const GetCurrentUser = async () => {
        const { data } = await me();
        setUser(data)
        return data;
    }

    return (
        <AuthContext.Provider value={{ user, UserSignIn, UserSignUp }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }