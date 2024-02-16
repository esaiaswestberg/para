import type { inferRouterOutputs } from '@trpc/server'
import { createTRPCSvelte, httpBatchLink } from 'trpc-svelte-query'
import type { AppRouter } from '../../../backend/src/router'

export const trpc = createTRPCSvelte<AppRouter>({
  links: [
    httpBatchLink({
      url: '/trpc'
    })
  ]
})

export type RouterOutput = inferRouterOutputs<AppRouter>
