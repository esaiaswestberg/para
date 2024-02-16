import { BudgetRouter } from './services/data/budget'
import { BudgetGroupRouter } from './services/data/budgetGroup'
import { TransactionRouter } from './services/data/transaction'
import { t } from './services/trpc'

export const appRouter = t.mergeRouters(BudgetRouter, BudgetGroupRouter, TransactionRouter)

export type AppRouter = typeof appRouter
