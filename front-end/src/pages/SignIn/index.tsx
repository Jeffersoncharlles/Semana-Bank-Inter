import {
    Container,
    ButtonContainer,
    InputContainer,
    BackgroundImage,
} from './styles';

import backgroundImg from '../../assets/banner.jpg'

export const SignIn = () => {

    return (
        <Container>
            <BackgroundImage image={backgroundImg} />

        </Container>
    );
}