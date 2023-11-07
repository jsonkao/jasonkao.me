<script>
	import { onMount } from 'svelte';
	import Grid from './Grid.svelte';
	import projects from './projects.js';

	let email = '';

	onMount(() => (email = 'jason.kao@propublica.org'));
</script>

<main style="max-width: 1098px">
	<p class="nutgraf">
		<b>Jason Kao</b>
	</p>
	<p class="nutgraf">
		I am currently on the graphics team at ProPublica, where I analyze data and visualize it in
		charts and maps. I graduated from Columbia in 2022 with a degree in computer science. I've
		worked on data visualizations at Bloomberg News, The New York Times, and The Texas Tribune.
	</p>

	<div class="nutgraf contact">
		<p>
			<b>Contacts:</b>
			<a href="mailto:{email}">{email}</a>
			<!-- <a href="https://twitter.com/cow_portal">Twitter</a> -->
			<a href="https://github.com/jsonkao">GitHub</a>
		</p>
	</div>

	<Grid projects={projects.topLevel} />
</main>

<style>
	main {
		margin: 42px auto 0;
		padding: 0 20px;
	}

	.nutgraf {
		width: 50%;
		margin: 0 auto 21px;
	}

	.nutgraf a {
		color: #121212;
		border-bottom: 1px solid #121212;
		transition-duration: 0.15s;
	}

	.nutgraf a:hover {
		border-bottom-color: #e4e4e4;
		background: #e4e4e4;
		text-decoration: none;
	}

	.contact {
		margin-bottom: 30px;
		font-family: Inconsolata;
		font-size: 17px;
		font-weight: 500;
		line-height: 24px;
	}

	.contact p {
		display: inline-block;
		padding: 3px 0;
		transition-duration: 0.1s;
	}

	.contact b {
		font-weight: 800;
	}

	.contact a {
		color: #121212;
		text-decoration: none;
		border-bottom: 1px solid #ccc;
	}

	.contact a:hover {
		border-bottom-color: #121212;
	}

	.contact a:not(:last-child) {
		margin-right: 6px;
	}

	@media (max-width: 600px) {
		.nutgraf {
			width: 100%;
		}
	}
</style>
