import { InputHTMLAttributes } from 'react'
import {
    Container,
} from './styles';

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
    //to passando todas as propriedades que o input tem
    return (
        <Container>
            <input {...props} />
        </Container>
    );
}