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

const signIn = async (data: ISignInData) => {
    const user = await api.post('/user/signin', data);
    return user;
}
const me = async () => {
    const user = await api.get('/user/me');
    return user;
}

const signUp = async (data: ISignUpData) => {
    return api.post('/user/signup', data);
}

export { signIn, me, signUp }