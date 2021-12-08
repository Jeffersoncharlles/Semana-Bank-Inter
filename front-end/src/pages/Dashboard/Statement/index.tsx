
import {
    ContainerStatement,
} from './styles';
import { StatementItem } from '../../../components/StatementItem';
interface StatementItem {
    user: {
        firstName: string;
        lastName: string;
    },
    value: number;
    type: 'paid' | 'received';
    updated_at: Date;
}


export const Statement = () => {
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

    return (
        <ContainerStatement>
            {statements.map(statement => <StatementItem {...statement} />)}
        </ContainerStatement>
    )
}