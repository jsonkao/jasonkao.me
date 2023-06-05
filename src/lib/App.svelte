<script>
	import { onMount } from 'svelte';
	import Grid from './Grid.svelte';
	import SectionHeader from './SectionHeader.svelte';
	import projects from './projects';

	let email;
	let contactFocused = false;
	
	onMount(() => email = 'jason.kao@columbia.edu');
</script>

<main style="max-width: 1098px">
	<header>
		<div>
			<p>Jason Kao</p>
		</div>
		<div style="visibility: hidden;">
			<p>About.</p>
			<p class="gray">
				<button on:click={() => (contactFocused = !contactFocused)}>Contact.</button>
			</p>
		</div>
	</header>

	<p class="nutgraf">
		I am a member of the 2022–2023 New York Times fellowship class. In the Graphics department, I
		use data and visualization to cover any topic in the news.
	</p>
	<p class="nutgraf">
		I’ve reported on the Asian American vote, the U.S.-Mexico border, Texas laws that regulate how
		race is taught, climate change and inequity, and protests. At
		school, I studied computer science and ethnic studies.
	</p>
	<p class="nutgraf">I’m looking for a job :) My contact info is below, and <a href="/Resume_20230409.pdf">here is my resume</a>.</p>

	<div class="nutgraf contact" class:contactFocused>
		<p>
			<b>Contacts:</b>
			<a href="mailto:{email}">{email}</a>
			<a href="https://twitter.com/jasonYkao">@jasonYkao</a>
		</p>
	</div>

	<Grid projects={projects.topLevel} />
</main>

<style lang="scss">
	main {
		margin: 0 auto;
		padding: 0 20px;
	}

	header {
		display: flex;
		justify-content: space-between;
		margin: 18px 0 22px;

		div:last-child {
			text-align: right;
		}
	}

	.gray {
		color: #888;
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
		margin-bottom: 60px;
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

		&.contactFocused {
			p {
				background-color: #fbe1c4;
			}
			a {
				transition-duration: 0.1s;
				border-bottom-color: rgba(0, 0, 0, 0.8);
			}
		}
	}

	@media (max-width: 600px) {
		.nutgraf {
			width: 100%;
		}
	}
</style>
