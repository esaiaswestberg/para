import { z } from 'zod'
import Transaction from '../../models/tables/transaction'
import DatabaseService from '../database'
import { t } from '../trpc'

export default class TransactionService {
  public static create(
    type: number,
    amount: number,
    shop: string,
    date: string,
    budget_id: number
  ) {
    const dummyObject: Transaction = { id: 0, type, amount, shop, date, budget_id }
    Transaction.parse(dummyObject)

    const insertQuery = DatabaseService.db.prepare(
      'INSERT INTO `transaction` (type, amount, shop, date, budget_id) VALUES (?, ?, ?, ?, ?);'
    )
    insertQuery.run(type, amount, shop, date, budget_id)
  }

  public static getById(id: number) {
    const query = DatabaseService.db.prepare('SELECT * FROM `transaction` WHERE id = ?;')
    const result = query.get(id)

    return Transaction.parse(result)
  }

  public static getByBudget(budget_id: number) {
    const query = DatabaseService.db.prepare('SELECT * FROM `transaction` WHERE budget_id = ?;')
    const result = query.all(budget_id)

    const TransactionArraySchema = Transaction.array()
    return TransactionArraySchema.parse(result)
  }

  public static delete(id: number) {
    const deleteQuery = DatabaseService.db.prepare('DELETE FROM `transaction` WHERE id = ?;')
    deleteQuery.run(id)
  }
}

export const TransactionRouter = t.router({
  transactionCreate: t.procedure
    .input(
      z.object({
        type: z.number(),
        amount: z.number(),
        shop: z.string(),
        date: z.string(),
        budget_id: z.number()
      })
    )
    .mutation(({ input: { type, amount, shop, date, budget_id } }) =>
      TransactionService.create(type, amount, shop, date, budget_id)
    ),

  transactionGetById: t.procedure
    .input(z.object({ id: z.number() }))
    .query(({ input: { id } }) => TransactionService.getById(id)),

  transactionGetByBudget: t.procedure
    .input(z.object({ budget_id: z.number() }))
    .query(({ input: { budget_id } }) => TransactionService.getByBudget(budget_id)),

  transactionDelete: t.procedure
    .input(z.object({ id: z.number() }))
    .mutation(({ input: { id } }) => TransactionService.delete(id))
})
