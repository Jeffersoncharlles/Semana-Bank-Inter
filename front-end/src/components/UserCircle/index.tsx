import {
    Container,
} from './styles';

interface UserInfo {
    initials: string;
}

export const UserCircle = ({ initials }: UserInfo) => {

    return (
        <Container>
            {initials}
        </Container>
    );
}