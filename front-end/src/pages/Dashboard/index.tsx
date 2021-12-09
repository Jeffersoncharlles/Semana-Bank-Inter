import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/useAuth';
import { pay, request } from '../../services/resources/pix';
import { Statement } from './Statement';
import {
    Container,
    BodyContainer,
    InlineTitle,
    InlineContainer
} from './styles';

export const Dashboard = () => {
    const { user, getCurrentUser } = useAuth();
    const wallet = user?.wallet || 0;
    const [key, setKey] = useState('');
    const [generatedKey, setGeneratedKey] = useState('');
    const [newVale, setNewVale] = useState('');

    const handleNewPayment = async () => {
        const { data } = await request(Number(newVale))

        if (data.copyPasteKey) {
            setGeneratedKey(data.copyPasteKey)
        }
    }

    const handleReceivedPix = async () => {
        try {
            const { data } = await pay(key)

            if (data.msg) {
                alert(data.msg);
                return;
            }
        } catch (error) {
            alert("Nao foi possivel receber o pix do mesmo usuario")
        }
    }

    useEffect(() => {
        getCurrentUser();
    }, [])

    if (!user) {
        return null;
    }

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

                    <Card noShadow width='90%'>
                        <InlineTitle>
                            <h2 className='h2'>Receber PIX</h2>
                        </InlineTitle>
                        <InlineContainer>
                            <Input
                                style={{ flex: 1 }}
                                value={newVale}
                                onChange={e => setNewVale(e.target.value)}
                                placeholder='Valor'
                            />
                            <Button onClick={handleNewPayment}>Gerar Codigo</Button>
                        </InlineContainer>

                        {generatedKey && (<>
                            <p className='primary-color'>Pix copia e cola</p>
                            <p className='primary-color'>{generatedKey}</p>
                        </>
                        )}
                    </Card>

                    <Card noShadow width='90%'>
                        <InlineTitle>
                            <h2 className='h2'>Pagar PIX</h2>
                        </InlineTitle>
                        <InlineContainer>
                            <Input
                                style={{ flex: 1 }}
                                value={key}
                                onChange={e => setKey(e.target.value)}
                                placeholder='Insira a chave'
                            />
                            <Button onClick={handleReceivedPix}>Pagar PIX</Button>
                        </InlineContainer>
                    </Card>

                </div>
                <div>
                    <Card noShadow width='90%'>
                        <InlineTitle>
                            <h2 className='h2'>Extrato da Conta</h2>
                        </InlineTitle>
                        <Statement />
                    </Card>
                </div>
            </BodyContainer>
        </Container>
    );
}