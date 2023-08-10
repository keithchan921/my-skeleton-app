<script lang=ts>
  import { Toast, toastStore } from "@skeletonlabs/skeleton";
	import type { ToastSettings } from "@skeletonlabs/skeleton";

	let t: ToastSettings;
	let count: number = 0;

	const popUp = () => {
		count++;
		t = {
			message: `Message ${count}`,
			hideDismiss: true,
			hoverable: true,
			background: 'variant-ghost-success',
		}
		toastStore.trigger(t);
	}
	
	const clearPopup = () => {
		toastStore.clear();
		count = 0;
	}

</script>

<Toast
	position="tr"
	duration={250}
	/>
<div class="container h-full mx-auto flex flex-col justify-center items-center space-y-5">
	<div class="card variant-ghost-primary p-4 flex justify-center items-center">Hello World!!!</div>
	<button	type="button"	class="btn variant-filled" on:click={popUp}>Pop UP!</button>
	<button	type="button"	class="btn variant-filled" on:click={clearPopup}>Clear</button>
</div>