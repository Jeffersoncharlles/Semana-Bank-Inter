
import {
    Container,
} from './styles';

interface CardProps {
    width?: string;
    children?: React.ReactNode;
    height?: string;
    noShadow?: boolean;
    background?: string;
}

export const Card = (
    { width = '100%',
        children,
        height = 'auto',
        noShadow = false,
    }: CardProps) => {
    return (
        <Container width={width} height={height} noShadow={noShadow} >
            {children}
        </Container>
    );
}