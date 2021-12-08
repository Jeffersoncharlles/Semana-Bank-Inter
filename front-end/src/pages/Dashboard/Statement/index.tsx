import { StatementItem } from '../../../components/StatementItem';
import {
    Container,
    StatementItemContainer,
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

const statements: StatementItem[] = [
    {
        user: {
            firstName: "Rosetta ",
            lastName: "Salazar"
        },
        value: 500.00,
        updated_at: new Date(),
        type: "paid"
    }
    , {
        user: {
            firstName: "Jessie",
            lastName: "Griffith"
        },
        value: 790,
        updated_at: new Date(),
        type: "received"
    }
]

export const Statement = ({ user, value, type, updated_at }: StatementItem) => {

    return (
        <Container>
            <StatementItem />
        </Container>
    );
}