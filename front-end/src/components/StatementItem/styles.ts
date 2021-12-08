import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
`;
export const StatementItemInfo = styled.div`
    p {
        margin-bottom: 2px;
    }
`;

export const StatementItemImage = styled.div<{
    type: 'paid' | 'received'
}>`

    width: 60px;
    height: 60px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.background};
    border-radius: 10px;
    margin-bottom: 20px;
background:${({ theme, type }) => type === 'paid' ? theme.colors.red : theme.colors.green};
`;


