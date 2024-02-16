<script lang="ts">
  import { trpc } from '$lib/trpc'
  import BudgetTile from '../budgets/BudgetTile.svelte'
  import Heading from '../form/Heading.svelte'

  export let id: number
  export let name: string

  const budgetsQuery = trpc.budgetGetByGroup.query({ budget_group_id: id })
</script>

<div class="flex flex-col gap-2 w-full bg-slate-200 rounded-lg p-4 pt-3">
  <Heading>{name}</Heading>

  {#if $budgetsQuery.isSuccess}
    {#each $budgetsQuery.data as { id, name }}
      <BudgetTile {id} {name} />
    {/each}
  {/if}
</div>
