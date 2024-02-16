<script lang="ts">
  import formatAmount from '$lib/formatAmount'
  import formatDate from '$lib/formatDate'
  import groupTransactions from '$lib/groupTransactions'
  import sumTransactionsTotal from '$lib/sumTransactionsTotal'
  import { trpc } from '$lib/trpc'
  import BudgetTransaction from './BudgetTransaction.svelte'

  export let budgetId: number

  const transactionsQuery = trpc.transactionGetByBudget.query({ budget_id: budgetId })
</script>

{#if $transactionsQuery.isSuccess}
  <div class="flex flex-col gap-3">
    {#each groupTransactions($transactionsQuery.data) as transactionGroup}
      <div class="flex flex-col gap-2 bg-slate-200 p-2 rounded-md">
        <div class="flex flex-row justify-between">
          <h1 class="font-semibold text-md">{formatDate(transactionGroup.date)}</h1>
          <h2 class="font-medium text-md">{formatAmount(sumTransactionsTotal(transactionGroup.transactions))}</h2>
        </div>

        <div class="flex flex-col">
          {#each transactionGroup.transactions as { id, shop, amount }}
            <BudgetTransaction {id} {shop} {amount} />
          {/each}
        </div>
      </div>
    {/each}
  </div>
{/if}
