import {
    Container,
    HeaderContainer,
    UserInfo
} from './styles';

import logoImg from '../../assets/Logo-banco-inter.svg';
import { UserCircle } from '../UserCircle';
import { useNavigate } from 'react-router-dom';


export const Header = () => {
    const navigation = useNavigate();

    const handleLogout = () => {
        navigation('/')
    }

    return (
        <Container>
            <HeaderContainer>
                <img src={logoImg} alt="logo-banco-inter" width={172} height={61} />
                <UserInfo>
                    <UserCircle initials='JC' />
                    <div className="">
                        <p>Olá, <span className='primary-color font-bold'>Jefferson</span></p>
                        <strong>2212323-1</strong><br />
                        <a onClick={handleLogout}>Sair</a>
                    </div>
                </UserInfo>
            </HeaderContainer>
        </Container >
    );
}