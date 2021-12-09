import { AxiosResponse } from "axios";
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
    UserSignIn: (userData: ISignInData) => Promise<UserDto>;
    UserSignUp: (userData: ISignUpData) => Promise<UserDto>;
    getCurrentUser: () => Promise<UserDto>;
}

const AuthContext = createContext<IContextData>({} as IContextData)

const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<UserDto>(() => {
        const user = localStorage.getItem("@InterDev:User");

        if (user) {
            return JSON.parse(user);
        }

        return {} as UserDto
    })

    //logar user
    const UserSignIn = async (userData: ISignInData) => {
        const { data } = await signIn(userData);
        if (data?.status === 'error') {
            return data;
        }
        if (data.accessToken) {
            localStorage.setItem('@InterDev:Token', data.accessToken);
        }
        return getCurrentUser();

    }

    //cadastrar user
    const UserSignUp = async (userData: ISignUpData) => {
        const { data } = await signUp(userData);
        localStorage.setItem('@InterDev:Token', data.accessToken);
        return getCurrentUser();

    }

    //salvar usuario na variavel
    const getCurrentUser = async () => {
        const { data } = await me();
        setUser(data)
        localStorage.setItem("@InterDev:User", JSON.stringify(data))
        return data as UserDto;
    }

    return (
        <AuthContext.Provider value={{ user, UserSignIn, UserSignUp, getCurrentUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }