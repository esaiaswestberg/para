<script lang="ts">
  import AccountTile from '../components/accounts/AccountTile.svelte'
  import FloatingActionButton from '../components/controls/FloatingActionButton.svelte'
  import Heading from '../components/form/Heading.svelte'
</script>

<div class="flex flex-col gap-2 w-full bg-slate-200 rounded-lg p-4 pt-3">
  <Heading>Konton</Heading>

  {#each Array(8) as _}
    <AccountTile />
  {/each}
</div>

<FloatingActionButton />
