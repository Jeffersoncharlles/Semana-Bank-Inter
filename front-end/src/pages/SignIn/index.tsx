import {
    Container,
    ButtonContainer,
    InputContainer,
    BackgroundImage,
} from './styles';

import backgroundImg from '../../assets/banner.jpg'
import logoSvg from '../../assets/Logo-banco-inter.svg'
import { Card } from '../../components/Card';

export const SignIn = () => {

    return (
        <Container>
            <BackgroundImage image={backgroundImg} />
            <Card width='403px' >
                <img src={logoSvg} alt="Logo-Banco-Inter" width={172} height={61} />
            </Card >
        </Container>
    );
}