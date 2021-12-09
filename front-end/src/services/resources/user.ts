import { api } from '../api';

interface SignInData {
    email: string;
    password: string;
}
interface SignUpData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const signIn = async (data: SignInData) => {
    const user = await api.post('/user/signin', data);
    return user;
}
const me = async () => {
    const user = await api.get('/user/me');
    return user;
}

const signUp = async (data: SignUpData) => {
    return api.post('/user/signup', data);
}

export { signIn, me, signUp }