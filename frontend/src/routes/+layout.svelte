<script lang="ts">
  import { trpc } from '$lib/trpc'
  import { QueryClientProvider } from '@tanstack/svelte-query'
  import '../app.css'
</script>

<QueryClientProvider client={trpc.queryClient}>
  <div class="p-4">
    <slot />
  </div>
</QueryClientProvider>
