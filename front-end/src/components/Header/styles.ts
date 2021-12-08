import styled from 'styled-components';

export const Container = styled.head`
    width: 100%;
    height: 90px;

    background:${({ theme }) => theme.colors.background};

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeaderContainer = styled.div`

    width: 80%;
    height: 90px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const UserInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 600;
        cursor: pointer;
    }
    span {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 600;
    }
`;