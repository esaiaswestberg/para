<script lang="ts">
  import Button from '../../components/form/Button.svelte'
  import DateInput from '../../components/form/DateInput.svelte'
  import Heading from '../../components/form/Heading.svelte'
  import Select from '../../components/form/Select.svelte'
  import SuffixedNumberInput from '../../components/form/SuffixedNumberInput.svelte'
  import TextInput from '../../components/form/TextInput.svelte'
</script>

<form class="w-full flex flex-col gap-2">
  <Heading>Registrata Köp</Heading>

  <TextInput label="Affär" placeholder="ICA Maxi Falköping" value="" />
  <DateInput label="När" value={new Date()} />

  <div class="grid grid-cols-2 gap-2">
    <SuffixedNumberInput label="Kostnad" placeholder="" value={0} suffix="kr" />
    <Select label="Budget" value="none">
      <option selected disabled value="none">Välj budget</option>
    </Select>
  </div>

  <Button>Spara</Button>
</form>
