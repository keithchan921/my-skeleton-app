<script lang=ts>
	import { writable } from 'svelte/store';
	import { Paginator, Table, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { PaginationSettings, TableSource } from '@skeletonlabs/skeleton';
	
	const sourceData = writable([
		{name: "Tom", gender: "Male", age: 19},
		{name: "Mary", gender: "Female", age: 17},
		{name: "John", gender: "Male", age: 20},
		{name: "Candy", gender: "Female", age: 18},
		{name: "Alex", gender: "Male", age: 20}
	]);

	let tableSimple = {};
	let tableChecked: boolean = false;
	let selectedRow: any;
	
	let page: PaginationSettings = {
		offset: 0,
		limit: 10,
		size: $sourceData.length,
		amounts: [1,2,5,10],
	};

	$: paginatedSource = $sourceData.slice(
		page.offset * page.limit,
		page.offset * page.limit + page.limit
		);
		
	$: tableSimple = {
		head: ['Name', 'Gender', 'Age'],
		body: tableMapperValues(paginatedSource, ['name', 'gender', 'age']),
		meta: tableMapperValues(paginatedSource, ['name', 'gender', 'age']),
		foot: [`Total <code class="code">${paginatedSource.length}</code> items in this page`, '', '']
	}

</script>

<div>
	<Table source={tableSimple} interactive={true} />

	<Paginator
		class="flex justify-center items-center"
		bind:settings={page}
		showFirstLastButtons={true}
		showPreviousNextButtons={true}
	/>
	
	<!-- <div class="card flex">
		{#each selectedRow as row}
		<div>Name: {row}</div>
		{/each}
	</div> -->
</div>

