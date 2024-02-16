<script lang="ts">
  import { trpc } from '$lib/trpc'
  import AccountTile from '../components/accounts/AccountTile.svelte'
  import FloatingActionButton from '../components/controls/FloatingActionButton.svelte'
  import Heading from '../components/form/Heading.svelte'

  const allBudgetsQuery = trpc.budgetGetAll.query()
</script>

{#if $allBudgetsQuery.isSuccess}
  <div class="flex flex-col gap-2 w-full bg-slate-200 rounded-lg p-4 pt-3">
    <Heading>Konton</Heading>

    {#each $allBudgetsQuery.data as budget}
      {#each Array(8) as _}
        <AccountTile />
      {/each}
    {/each}
  </div>
{/if}

<FloatingActionButton />
