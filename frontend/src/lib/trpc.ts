import { createTRPCSvelte, httpBatchLink } from 'trpc-svelte-query'
import type { AppRouter } from '../../../backend/src/services/trpc'

export const trpc = createTRPCSvelte<AppRouter>({
  links: [
    httpBatchLink({
      url: '/trpc'
    })
  ]
})
