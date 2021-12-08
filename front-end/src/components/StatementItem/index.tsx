import {
    Container,
    StatementItemImage,
    StatementItemInfo
} from './styles';

interface StatementItem {
    user: {
        firstName: string;
        lastName: string;
    },
    value: number;
    type: 'paid' | 'received';
    updated_at: Date;
}

export const StatementItem = ({ user, value, type, updated_at }: StatementItem) => {

    return (
        <Container>
            <StatementItemImage type={type}>
                Icon
            </StatementItemImage>
            <StatementItemInfo>
                <p className='primary-color'>{value.toLocaleString('pt-BR', { style: 'currency', currency: "BRL" })}</p>
                <p> {type === 'paid' ? 'Pago a ' : "Recebido de "}
                    <strong>{user.firstName} {user.lastName}</strong>
                </p>
                <p></p>
            </StatementItemInfo>
        </Container>
    );
}