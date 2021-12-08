import {
    Container,
    HeaderContainer,
    UserInfo
} from './styles';

import logoImg from '../../assets/Logo-banco-inter.svg';
// import { useNavigate } from 'react-router-dom';


export const Header = () => {
    // const navigation = useNavigate();

    // const handleLogout = () => {
    //     navigation('/logout')
    // }

    return (
        <Container>
            <HeaderContainer>
                <img src={logoImg} alt="logo-banco-inter" width={172} height={61} />
                <UserInfo>
                    circulo
                    <div className="">
                        <p>Olá<span className='primary-color font-bold'>Jefferson</span></p>
                        <strong>2212323-1</strong>
                        <a href="#">Sair</a>
                    </div>
                </UserInfo>
            </HeaderContainer>
        </Container>
    );
}