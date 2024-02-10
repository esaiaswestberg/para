<script lang="ts">
  import AccountTile from '../components/accounts/AccountTile.svelte'
  import FloatingActionButton from '../components/controls/FloatingActionButton.svelte'
</script>

<div class="flex flex-col gap-2 w-full p-2">
  {#each Array(8) as _}
    <AccountTile />
  {/each}
</div>

<FloatingActionButton />
