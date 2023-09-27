<script>
	import { onMount } from 'svelte';
	import Grid from './Grid.svelte';
	import projects from './projects';

	let email = '';

	onMount(() => (email = 'jason.kao@propublica.org'));
</script>

<main style="max-width: 1098px">
	<p class="nutgraf">
		<b>Jason Kao</b>
	</p>
	<p class="nutgraf">
		I am currently on the graphics team at ProPublica, where I make charts, maps, and other data
		visualizations. At school, I majored in computer science. I've been a graphics intern at Bloomberg News, The New York Times,
		and The Texas Tribune.
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

<style lang="scss">
	main {
		margin: 42px auto 0;
		padding: 0 20px;
	}

	.nutgraf {
		width: 50%;
		margin: 0 auto 21px;

		& > a {
			color: #121212;
			border-bottom: 1px solid #121212;
			transition-duration: 0.15s;
			&:hover {
				border-bottom-color: #e4e4e4;
				background: #e4e4e4;
				text-decoration: none;
			}
		}
	}

	.contact {
		margin-bottom: 30px;
		font-family: Inconsolata;
		font-size: 17px;
		font-weight: 500;
		line-height: 24px;

		p {
			display: inline-block;
			padding: 3px 0;
			transition-duration: 0.1s;
		}

		b {
			font-weight: 800;
		}

		a {
			color: #121212;
			text-decoration: none;
			border-bottom: 1px solid #ccc;
			&:hover {
				border-bottom-color: #121212;
			}
		}
		a:not(:last-child) {
			margin-right: 6px;
		}
	}

	@media (max-width: 600px) {
		.nutgraf {
			width: 100%;
		}
	}
</style>
