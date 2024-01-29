<script>
	import { onMount } from 'svelte';
	import Grid from '$lib/Grid.svelte';
	import projects from '$lib/projects.js';
	import '../app.css';

	let email = '';

	onMount(() => (email = 'jason.kao@propublica.org'));
</script>

<main>
	<section>
		<p>
			<b>Jason Kao; </b>
			I currently work at ProPublica, where I analyze and visualize data for investigative stories. I've
			previously worked at The New York Times, Bloomberg News, and The Texas Tribune.
		</p>
	</section>

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
		--color: wheat;
	}

	p {
		width: 52%;
		margin: 0 auto 24px;
		color: var(--color);
	}

	section {
		padding: 36px;
	}

	p a {
		color: var(--color);
		border-bottom: 1px solid var(--color);
		transition-duration: 0.15s;
	}

	p a:hover {
		border-bottom-color: #e4e4e4;
		background: black;
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
		color: var(--color);
		text-decoration: none;
		border-bottom: 1px solid #ccc;
		margin-right: 6px;
	}

	.contacts a:hover {
		border-bottom-color: var(--color);
	}

	@media (max-width: 460px) {
		p {
			width: 100%;
		}

		section {
			padding: 0;
			padding-bottom: 12px;
		}

		.contacts {
			margin-top: 30px;
		}

		.contacts {
			font-size: 15px;
		}
	}
</style>
