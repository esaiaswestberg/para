<script lang="ts">
  import AccountTransaction from '../../components/accounts/AccountTransaction.svelte'
</script>

<div class="flex flex-col gap-4">
  <div class="flex flex-col gap-2 items-center bg-emerald-500 p-4 rounded-lg text-white">
    <span class="text-4xl font-semibold">Mat</span>
    <span class="text-2xl font-semibold text-left">5 487 kr</span>
  </div>

  <div class="flex flex-col gap-3">
    <div class="flex flex-col items-center bg-red-500 p-2 rounded-md text-white">
      <h1 class="font-bold">Återställning</h1>
      <h2>15 000 kr</h2>
    </div>

    {#each Array(15) as _}
      <div class="flex flex-col gap-2 bg-slate-200 p-2 rounded-md">
        <div class="flex flex-row justify-between">
          <h1 class="font-semibold text-md">31 Februari</h1>
          <h2 class="font-medium text-md">5 487 kr</h2>
        </div>

        <div class="flex flex-col">
          {#each Array(Math.round(Math.random() * 5) + 1) as _}
            <AccountTransaction />
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>
