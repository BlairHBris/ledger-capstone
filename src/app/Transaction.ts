export interface Transaction {
    id?: number
    credit: boolean
    account: string
    date: string
    description: string
    amount: number
}