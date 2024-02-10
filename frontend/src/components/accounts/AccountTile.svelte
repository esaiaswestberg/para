<script lang="ts">
  import AccountTransaction from './AccountTransaction.svelte'
</script>

<div class="flex flex-col gap-2 rounded-lg bg-slate-200 py-2 px-3">
  <div class="flex flex-row justify-between items-center">
    <span class="text-2xl font-medium">Mat</span>
    <span class="text-2xl font-medium">5 487 kr</span>
  </div>

  <span class="block w-full h-[1px] bg-black bg-opacity-5"></span>

  <div class="flex flex-col gap-0">
    {#each Array(3) as _}
      <AccountTransaction />
    {/each}
  </div>
</div>
