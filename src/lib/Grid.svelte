<script>
	import Project from './Project.svelte';

	export let projects;

	const colors = ['#A32251', '#0041FF', 'rgb(7, 7, 126)', '#D91F25', '#004F50', '#EBAB3D'].sort(
		() => Math.random() - 0.5
	);
</script>

<div class="grid">
	{#each projects as project, i}
		<Project {project} color={colors[i % colors.length]} />
	{/each}
</div>

<style lang="scss">
	.grid {
		display: grid;
		row-gap: 50px;
		column-gap: 25px;
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 460px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
