import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import {
    Container,
    BodyContainer,
    InlineTitle,
    InlineContainer
} from './styles';

export const Dashboard = () => {

    const wallet = 5000;

    return (
        <Container>
            <Header />
            <BodyContainer>
                <div>
                    <Card noShadow width='90%'>
                        <InlineTitle>
                            <h2 className='h2'>Saldo Atual</h2>
                        </InlineTitle>
                        <InlineContainer>
                            <h3 className='wallet'>
                                {wallet.toLocaleString('pt-BR', { style: 'currency', currency: "BRL" })}
                            </h3>
                        </InlineContainer>
                    </Card>
                </div>
                <div>
                    <Card noShadow width='90%'>
                        <InlineTitle>
                            <h2 className='h2'>Extrato da Conta</h2>
                        </InlineTitle>
                    </Card>
                </div>
            </BodyContainer>
        </Container>
    );
}