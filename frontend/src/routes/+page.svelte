<script lang="ts">
  import { trpc } from '$lib/trpc'
  import BudgetGroup from '../components/groups/BudgetGroup.svelte'

  const budgetGroupsQuery = trpc.budgetGroupGetAll.query()
</script>

<div class="flex flex-col gap-4 w-full">
  {#if $budgetGroupsQuery.isSuccess}
    {#each $budgetGroupsQuery.data as { id, name }}
      <BudgetGroup {id} {name} />
    {/each}
  {/if}
</div>
