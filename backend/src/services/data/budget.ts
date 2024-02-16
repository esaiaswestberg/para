import { z } from 'zod'
import Budget from '../../models/tables/budget'
import DatabaseService from '../database'

export default class BudgetService {
  public static create(name: string, budget_group_id: number) {
    const insertQuery = DatabaseService.db.prepare(
      'INSERT INTO budget (name, budget_group_id) VALUES (?, ?);'
    )
    insertQuery.run(name, budget_group_id)
  }

  public static getAll(): Budget[] {
    const query = DatabaseService.db.query('SELECT * FROM budget;')
    const result = query.all()

    const BudgetArraySchema = z.array(Budget)
    return BudgetArraySchema.parse(result)
  }

  public static getById(id: number): Budget {
    const query = DatabaseService.db.prepare('SELECT * FROM budget WHERE id = ?;')
    const result = query.get(id)

    return Budget.parse(result)
  }

  public static getByGroup(budget_group_id: number): Budget[] {
    const query = DatabaseService.db.prepare('SELECT * FROM budget WHERE budget_group_id = ?;')
    const result = query.all(budget_group_id)

    const BudgetArraySchema = z.array(Budget)
    return BudgetArraySchema.parse(result)
  }

  public static setName(id: number, name: string) {
    const query = DatabaseService.db.prepare('UPDATE budget SET name = ? WHERE id = ?;')
    query.run(name, id)
  }

  public static setGroup(id: number, budget_group_id: number) {
    const query = DatabaseService.db.prepare('UPDATE budget SET budget_group_id = ? WHERE id = ?;')
    query.run(budget_group_id, id)
  }

  public static delete(id: number) {
    const deleteTransactions = DatabaseService.db.prepare(
      'DELETE FROM `transaction` WHERE budget_id = ?;'
    )
    const deleteBudget = DatabaseService.db.prepare('DELETE FROM budget WHERE id = ?;')

    const deleteBudgetAndTransactions = DatabaseService.db.transaction((id: number) => {
      deleteTransactions.run(id)
      deleteBudget.run(id)
    })

    deleteBudgetAndTransactions(id)
  }
}
