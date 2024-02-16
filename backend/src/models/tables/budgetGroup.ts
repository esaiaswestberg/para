import { z } from 'zod'

const BudgetGroup = z.object({
  id: z.number().int(),
  name: z.string()
})

type BudgetGroup = z.infer<typeof BudgetGroup>

export default BudgetGroup
