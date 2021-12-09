
import {
    ContainerStatement,
} from './styles';
import { StatementItem } from '../../../components/StatementItem';
import { useAuth } from '../../../hooks/useAuth';
import { useEffect, useState } from 'react';
import { transactions } from '../../../services/resources/pix';
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
    const { } = useAuth();
    const [statements, setStatements] = useState<StatementItem[]>([]);

    const getAllTransactions = async () => {
        const { data } = await transactions();
        setStatements(data);
    }

    useEffect(() => {
        getAllTransactions();
    }, [])

    return (
        <ContainerStatement>
            {statements.length > 0 && statements?.map(statement => <StatementItem {...statement} />)}
        </ContainerStatement>
    )
}