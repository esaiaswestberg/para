import { z } from 'zod'
import BudgetGroup from '../../models/tables/budgetGroup'
import DatabaseService from '../database'

export default class BudgetGroupService {
  public static create(name: string) {
    const insertQuery = DatabaseService.db.prepare('INSERT INTO budget_group (name) VALUES (?);')
    insertQuery.run(name)
  }

  public static getAll() {
    const query = DatabaseService.db.query('SELECT * FROM budget_group;')
    const result = query.all()

    const BudgetGroupArraySchema = z.array(BudgetGroup)
    return BudgetGroupArraySchema.parse(result)
  }

  public static getById(id: number) {
    const query = DatabaseService.db.prepare('SELECT * FROM budget_group WHERE id = ?;')
    const result = query.get(id)

    return BudgetGroup.parse(result)
  }

  public static setName(id: number, name: string) {
    const query = DatabaseService.db.prepare('UPDATE budget_group SET name = ? WHERE id = ?;')
    query.run(name, id)
  }

  public static delete(id: number) {
    const deleteTransactions = DatabaseService.db.prepare(
      'DELETE FROM `transaction` WHERE budget_id IN (SELECT id FROM budget WHERE budget_group_id = ?);'
    )
    const deleteBudgets = DatabaseService.db.prepare(
      'DELETE FROM budget WHERE budget_group_id = ?;'
    )
    const deleteGroup = DatabaseService.db.prepare('DELETE FROM budget_group WHERE id = ?;')

    const deleteBudgetGroup = DatabaseService.db.transaction((id: number) => {
      deleteTransactions.run(id)
      deleteBudgets.run(id)
      deleteGroup.run(id)
    })

    deleteBudgetGroup(id)
  }
}
