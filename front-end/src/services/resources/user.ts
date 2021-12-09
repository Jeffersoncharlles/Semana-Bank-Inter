import { api } from '../api';

export interface ISignInData {
    email: string;
    password: string;
}
export interface ISignUpData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface IUserDto {
    id: string;
    firstName: string;
    lastName: string;
    accountNumber: number;
    accountDigit: number;
    wallet: number;
    email: string;
}

const signIn = async (data: ISignInData) => {
    const user = await api.post('/user/signin', data);
    return user;
}
const me = async () => {
    return api.get<IUserDto>('/user/me');

}

const signUp = async (data: ISignUpData) => {
    return api.post('/user/signup', data);
}

export { signIn, me, signUp }