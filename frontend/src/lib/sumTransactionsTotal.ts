import type { Transaction } from './groupTransactions'

const sumTransactionsTotal = (transactions: Transaction[]): number => {
  return transactions.reduce((total, transaction) => total + transaction.amount, 0)
}

export default sumTransactionsTotal
