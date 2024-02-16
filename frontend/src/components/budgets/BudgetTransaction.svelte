<script lang="ts">
  import formatAmount from '$lib/formatAmount'

  export let id: number
  export let shop: string
  export let amount: number
</script>

<a href="/transaction?id={id}" class="flex flex-row justify-between">
  <span class="text-sm font-medium">{shop}</span>
  <span class="text-sm">{formatAmount(amount)}</span>
</a>
