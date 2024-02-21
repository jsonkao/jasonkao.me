<script>
	import { onMount } from 'svelte';
	import Grid from '$lib/Grid.svelte';
	import projects from '$lib/projects.js';
	import '../app.css';

	let email = '';

	// Obfuscate email address to prevent bots
	onMount(() =>
		setTimeout(() => (email = ['com', 'kao@gmail', 'y', 'jason'].reverse().join('.')), 2000)
	);

	const metaDescription =
		'Jason Kao currently works at ProPublica, where Jason analyzes and visualizes data for investigations. Jason’s previously worked at The New York Times, Bloomberg News, and The Texas Tribune.';
</script>

<svelte:head>
	{#each ['description', 'twitter:description', 'og:description'] as name}
		<meta {name} content={metaDescription} />
	{/each}
	{#each ['author', 'twitter:title', 'og:title'] as name}
		<meta {name} content="Jason Kao" />
	{/each}
</svelte:head>

<div class="container">
	<main>
		<section>
			<p>
				Hi, my name is Jason Kao. I work in visualization, design, and journalism. Recently, I was
				at ProPublica, where I analyzed and visualized data for investigations. I’ve previously
				worked for The New York Times and The Texas Tribune.
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
</div>

<style>
	main {
		margin: 42px auto 0;
		padding: 0 20px 60px;
		max-width: 920px;
		--color: wheat;
	}

	.container {
		border: 1px solid var(--color);
		box-sizing: border-box;
	}

	p {
		width: 70%;
		margin: 0 0 24px auto;
		color: var(--color);
		text-align: left;
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
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}

	.contacts a:hover {
		border-bottom-color: var(--color);
	}

	@media (max-width: 460px) {
		p {
			width: 100%;
			text-align: left;
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
