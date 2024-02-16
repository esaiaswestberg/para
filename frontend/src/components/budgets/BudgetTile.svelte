<script lang="ts">
  import formatAmount from '$lib/formatAmount'
  import sumTransactionsTotal from '$lib/sumTransactionsTotal'
  import { trpc } from '$lib/trpc'

  export let id: number
  export let name: string

  const transactionsQuery = trpc.transactionGetByBudget.query({ budget_id: id })
</script>

{#if $transactionsQuery.isSuccess}
  <a href="/budget?id={id}" class="flex flex-row justify-between items-center bg-zinc-500 text-white px-3 py-2 rounded-lg shadow">
    <span class="text-xl font-medium">{name}</span>
    <span class="text-xl font-medium">{formatAmount(sumTransactionsTotal($transactionsQuery.data))}</span>
  </a>
{/if}
