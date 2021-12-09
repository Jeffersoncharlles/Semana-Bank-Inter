import {
    Container,
    ButtonContainer,
    InputContainer,
    BackgroundImage,
} from './styles';

import backgroundImg from '../../assets/banner.jpg'
import logoSvg from '../../assets/Logo-banco-inter.svg'
import { Card } from '../../components/Card';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useEffect, useState } from 'react';

export const SignIn = () => {
    const navigate = useNavigate();
    const { UserSignIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleToSignIn = async () => {
        const data = {
            email,
            password
        }
        const response = await UserSignIn(data);

        if (response.id) {
            navigate('/dashboard');
            return;
        }

        alert('Usuario ou senha invalida')

    }



    return (
        <Container>
            <BackgroundImage image={backgroundImg} />
            <Card width='403px' >
                <img src={logoSvg} alt="Logo-Banco-Inter" width={172} height={61} />
                <InputContainer>
                    <Input
                        placeholder='EMAIL'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input
                        placeholder='SENHA'
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </InputContainer>

                <ButtonContainer>
                    <Button type='button' onClick={handleToSignIn} >Entrar</Button>
                    <p>Ainda não é cadastrado? <Link to="/signup">Cadastra-se já</Link></p>
                </ButtonContainer>
            </Card >
        </Container>
    );
}