import { ButtonHTMLAttributes } from 'react'

import {
    ButtonContainer,
} from './styles';

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <ButtonContainer {...props} >
            {props.children}
        </ButtonContainer>
    );
}