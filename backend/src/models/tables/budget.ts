import { z } from 'zod'
import BudgetGroup from './budgetGroup'

const Budget = z.object({
  id: z.number().int(),
  name: z.string(),

  budget_group_id: z.number().int()
})

type Budget = z.infer<typeof Budget>

export const BudgetWithBudgetGroup = Budget.extend({
  budget_group: BudgetGroup
})

export type BudgetWithBudgetGroup = z.infer<typeof BudgetWithBudgetGroup>

export default Budget
