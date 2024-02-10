<script lang="ts">
  export let label: string
  export let placeholder: string = ''
  export let value: number
  export let suffix: string
</script>

<div class="flex flex-col justify-start gap-1">
  <label for={label} class="font-medium text-md">{label}</label>

  <div class="flex flex-row gap-1 py-2 px-3 rounded-lg border-slate-200 border-solid border-2 w-full focus-within:border-slate-300 focus-within:shadow transition-all">
    <input id={label} class="w-full outline-none" type="number" {placeholder} bind:value />
    <span>{suffix}</span>
  </div>
</div>
