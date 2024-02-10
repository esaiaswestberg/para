<script lang="ts">
  export let label: string
  export let value: Date

  let inputElement: HTMLInputElement
  const onChange = () => {
    const newValue = inputElement.valueAsDate
    if (!newValue) throw new Error('Invalid date value!')

    value = newValue
  }
</script>

<div class="flex flex-col justify-start gap-1">
  <label for={label} class="font-medium text-md">{label}</label>

  <input
    bind:this={inputElement}
    id={label}
    class="py-2 px-3 rounded-lg border-slate-200 border-solid border-2 w-full focus:border-slate-300 focus:shadow transition-all outline-none"
    type="date"
    value={value.toISOString().split('T')[0]}
    on:change={onChange}
  />
</div>
