<script lang="ts">
  export let label: string
  export let placeholder: string = ''
  export let value: string
</script>

<div class="flex flex-col justify-start gap-1">
  <label for={label} class="font-medium text-md">{label}</label>

  <input id={label} class="py-2 px-3 rounded-lg border-slate-200 border-solid border-2 w-full focus:border-slate-300 focus:shadow transition-all outline-none" type="text" {placeholder} bind:value />
</div>
