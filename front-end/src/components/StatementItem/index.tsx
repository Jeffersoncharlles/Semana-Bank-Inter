import {
    Container,
    StatementItemImage,
    StatementItemInfo
} from './styles';
import { format } from 'date-fns';
import { FiDollarSign } from 'react-icons/fi'

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
                <FiDollarSign size={24} />
            </StatementItemImage>
            <StatementItemInfo>
                <p className='primary-color'>{value.toLocaleString('pt-BR', { style: 'currency', currency: "BRL" })}</p>
                <p> {type === 'paid' ? 'Pago a ' : "Recebido de "}
                    <strong>{user.firstName} {user.lastName}</strong>
                </p>
                <p>{format(new Date(updated_at), "dd/MM/yyyy 'ás' HH:mm:'h'")}</p>
            </StatementItemInfo>
        </Container>
    );
}