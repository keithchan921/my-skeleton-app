<script lang=ts>
  import { AppBar, LightSwitch } from "@skeletonlabs/skeleton";

</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead"><div /></svelte:fragment>
	<h1 class="h2 font-bold underline">Svelte Skeleton</h1>
	<svelte:fragment slot="trail">
    <LightSwitch />
  </svelte:fragment>
</AppBar>
