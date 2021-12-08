import styled, { css } from 'styled-components';

interface IContainer {
    width: string;
    height: string;
    noShadow: boolean;
}

export const Container = styled.div<IContainer>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};

    //caso false 
    ${({ noShadow }) => !noShadow && css`
        box-shadow: 5px 4px 6px rgba(0,0,0,0.25);
    `}

    border-radius: 20px;
    padding: 20px;

    display:  flex;
    flex-direction: column;
    align-items: center;
    z-index: 5000;
    
`;