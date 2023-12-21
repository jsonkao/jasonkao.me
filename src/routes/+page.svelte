<script>
	import { onMount } from 'svelte';
	import Grid from '$lib/Grid.svelte';
	import projects from '$lib/projects.js';
	import '../app.css';

	let email = '';

	onMount(() => (email = 'jason.kao@propublica.org'));
</script>

<main>
	<p>
		<b>Jason Kao; </b>
		I currently work at ProPublica, where I analyze and visualize data for investigative stories. I've
		previously worked at The New York Times, Bloomberg News, and The Texas Tribune.
	</p>

	<Grid projects={projects.topLevel} />

	<p class="contacts">
		<b>Contacts:</b>
		<a href="mailto:{email}">{email}</a>
		<a href="https://twitter.com/cow_portal">Twitter</a>
		<a href="https://github.com/jsonkao">GitHub</a>
	</p>
</main>

<style>
	main {
		margin: 42px auto 0;
		padding: 0 20px 60px;
		max-width: 1100px;
	}

	p {
		width: 52%;
		margin: 0 auto 30px;
	}

	p:first-child {
		padding: 36px 0;
	}

	p a {
		color: #121212;
		border-bottom: 1px solid #121212;
		transition-duration: 0.15s;
	}

	p a:hover {
		border-bottom-color: #e4e4e4;
		background: #e4e4e4;
		text-decoration: none;
	}

	.contacts {
		margin-top: 45px;
		font-family: Inconsolata;
		font-size: 16px;
		font-weight: 500;
		line-height: 24px;
	}

	.contacts b {
		font-weight: 800;
	}

	.contacts a {
		color: #121212;
		text-decoration: none;
		border-bottom: 1px solid #ccc;
		margin-right: 6px;
	}

	.contacts a:hover {
		border-bottom-color: #121212;
	}

	@media (max-width: 460px) {
		p {
			width: 100%;
			margin-bottom: 30px;
		}

		p:first-child {
			padding: 0;
		}

		.contacts {
			margin-top: 30px;
		}

		.contacts {
			font-size: 15px;
		}

		main {
		}
	}
</style>
