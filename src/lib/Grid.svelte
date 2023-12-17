<script>
	import Project from './Project.svelte';

	export let projects;

	const colors = ['#A32251', 'rgb(7, 7, 126)', '#004F50', '#D91F25', '#0041FF', '#EBAB3D'];
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
			row-gap: 30px;
		}
	}
</style>
