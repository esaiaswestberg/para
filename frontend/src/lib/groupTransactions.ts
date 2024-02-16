import type { RouterOutput } from './trpc'

export type Transaction = RouterOutput['transactionGetById']

export type TransactionGroup = {
  date: string
  transactions: Transaction[]
}

const groupTransactions = (transactions: Transaction[]): TransactionGroup[] => {
  const groupedTransactions: TransactionGroup[] = []

  // Group transactions by date
  transactions.forEach((transaction) => {
    const { date } = transaction
    const existingGroup = groupedTransactions.find((group) => group.date === date)

    if (existingGroup) {
      existingGroup.transactions.push(transaction)
    } else {
      groupedTransactions.push({
        date,
        transactions: [transaction]
      })
    }
  })

  return sortGroupsByDate(groupedTransactions.map(sortTransactionInGroupById))
}

const sortTransactionInGroupById = (group: TransactionGroup): TransactionGroup => {
  const sortedTransactions = group.transactions.sort((a, b) => b.id - a.id)

  return {
    date: group.date,
    transactions: sortedTransactions
  }
}

const sortGroupsByDate = (groups: TransactionGroup[]): TransactionGroup[] => {
  return groups.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export default groupTransactions
