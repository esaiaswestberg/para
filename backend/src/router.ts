import { BudgetRouter } from './services/data/budget'
import { t } from './services/trpc'

export const appRouter = t.mergeRouters(BudgetRouter)

export type AppRouter = typeof appRouter
