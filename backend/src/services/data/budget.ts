import { z } from 'zod'
import Budget from '../../models/tables/budget'
import DatabaseService from '../database'
import { t } from '../trpc'

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

export const BudgetRouter = t.router({
  budgetCreate: t.procedure
    .input(
      z.object({
        name: z.string(),
        budget_group_id: z.number().int()
      })
    )
    .mutation(({ input: { name, budget_group_id } }) =>
      BudgetService.create(name, budget_group_id)
    ),

  budgetGetAll: t.procedure.output(z.array(Budget)).query(() => BudgetService.getAll()),

  budgetGetById: t.procedure
    .input(z.object({ id: z.number().int() }))
    .output(Budget)
    .query(({ input: { id } }) => BudgetService.getById(id)),

  budgetGetByGroup: t.procedure
    .input(z.object({ budget_group_id: z.number().int() }))
    .output(z.array(Budget))
    .query(({ input: { budget_group_id } }) => BudgetService.getByGroup(budget_group_id)),

  budgetSetName: t.procedure
    .input(
      z.object({
        id: z.number().int(),
        name: z.string()
      })
    )
    .mutation(({ input: { id, name } }) => BudgetService.setName(id, name)),

  budgetSetGroup: t.procedure
    .input(
      z.object({
        id: z.number().int(),
        budget_group_id: z.number().int()
      })
    )
    .mutation(({ input: { id, budget_group_id } }) => BudgetService.setGroup(id, budget_group_id)),

  budgetDelete: t.procedure
    .input(z.object({ id: z.number().int() }))
    .mutation(({ input: { id } }) => BudgetService.delete(id))
})
