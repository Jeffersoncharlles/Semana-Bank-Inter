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

export const SingUp = () => {

    const navigate = useNavigate();

    const handleToSignUp = () => {
        navigate('/dashboard');
    }

    return (
        <Container>
            <BackgroundImage image={backgroundImg} />
            <Card width='403px' >
                <img src={logoSvg} alt="Logo-Banco-Inter" width={172} height={61} />
                <InputContainer>
                    <Input placeholder='NOME' />
                    <Input placeholder='SOBRENOME' />
                    <Input placeholder='EMAIL' />
                    <Input placeholder='SENHA' type="password" />
                    <Input placeholder='CONFIRMAR SENHA' type="password" />
                </InputContainer>

                <ButtonContainer>
                    <Button type='button' onClick={handleToSignUp} >Entrar</Button>
                    <p>Já tem uma conta?? <Link to="/">Entre já</Link></p>
                </ButtonContainer>
            </Card >
        </Container>
    );
}