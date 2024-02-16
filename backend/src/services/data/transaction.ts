import Transaction from '../../models/tables/transaction'
import DatabaseService from '../database'

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
