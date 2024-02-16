import { z } from 'zod'
import Budget, { BudgetWithBudgetGroup } from './budget'

const Transaction = z.object({
  id: z.number().int(),
  type: z.number().int().min(0).max(2),
  amount: z.number().positive(),
  shop: z.string(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),

  budget_id: z.number().int()
})

type Transaction = z.infer<typeof Transaction>

export const TransactionWithBudget = Transaction.extend({
  budget: Budget
})

export type TransactionWithBudget = z.infer<typeof TransactionWithBudget>

export const TransactionWithBudgetWithBudgetGroup = Transaction.extend({
  budget: BudgetWithBudgetGroup
})

export type TransactionWithBudgetWithBudgetGroup = z.infer<
  typeof TransactionWithBudgetWithBudgetGroup
>

export default Transaction
