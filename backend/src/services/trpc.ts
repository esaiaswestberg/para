import { initTRPC } from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'
import { z } from 'zod'

export const createContext = ({ req, res }: trpcExpress.CreateExpressContextOptions) => ({})
type Context = Awaited<ReturnType<typeof createContext>>

export const t = initTRPC.context<Context>().create()

export const appRouter = t.router({
  hello: t.procedure.input(z.string()).query(({ input }) => `Hello, ${input}!`)
})

export type AppRouter = typeof appRouter
