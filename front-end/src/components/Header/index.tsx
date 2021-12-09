import {
    Container,
    HeaderContainer,
    UserInfo
} from './styles';

import logoImg from '../../assets/Logo-banco-inter.svg';
import { UserCircle } from '../UserCircle';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';


export const Header = () => {
    const navigation = useNavigate();
    const { user } = useAuth();

    const initial = user.firstName.substring(0, 1) + user.lastName.substring(0, 1)
    const handleLogout = () => {
        navigation('/')
    }

    return (
        <Container>
            <HeaderContainer>
                <img src={logoImg} alt="logo-banco-inter" width={172} height={61} />
                <UserInfo>
                    <UserCircle initials={initial} />
                    <div className="">
                        <p>Olá, <span className='primary-color font-bold'>{user.firstName} {user.lastName}</span></p>
                        <strong>{user.accountNumber}-{user.accountDigit}</strong><br />
                        <a onClick={handleLogout}>Sair</a>
                    </div>
                </UserInfo>
            </HeaderContainer>
        </Container >
    );
}