import { api } from "../api";

const request = async (value: number) => {
    return api.post('/pix/request', { value })
}

const pay = async (key: string) => {
    return api.post(`/pix/pay/${key}`)
}

const transactions = async () => {
    return api.get('/pix/transactions')
}

export { request, pay, transactions }