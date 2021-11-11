<script context="module">
	let totalItems = 0;
</script>

<script>
	import Project from './Project.svelte';

	export let projects;
	export let columns = 2;

	let colorOffset = totalItems;
	totalItems += projects.length;

	const colors = ['#A32251', '#0041FF', '#1A1A57', '#D91F25', '#004F50', '#EBAB3D'];

	const minFr = 600 - 100 * columns;

	let clientWidth, mediaHeight, gridColumns;
	$: {
		let fr = (clientWidth - 25 * (columns - 1)) / columns; // 1fr
		if (fr < minFr) {
			fr = clientWidth;
			gridColumns = '1fr';
		} else {
			gridColumns = '1fr '.repeat(columns);
		}
		mediaHeight = Math.round(fr * (2 / 3));
	}

	const color = (index) => colors[(colorOffset + index) % colors.length];
</script>

<div
	class="grid"
	style="grid-template-columns: {gridColumns}; column-gap: {columns > 1 ? 25 : 0}px; {columns ===
		1 && 'text-align: center'}"
	bind:clientWidth
>
	{#each projects as project, i}
		<Project {project} {mediaHeight} color={color(i)} />
	{/each}
</div>

<style lang="scss">
	.grid {
		display: grid;
		row-gap: 50px;
	}

	:global(.grid + .grid) {
		margin-top: 50px;
	}
</style>
