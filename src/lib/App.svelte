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
	<p class="nutgraf">
		<b>Jason Kao</b>
	</p>
	<p class="nutgraf">
		I am a data journalist and visual journalist based in New York City. I was a member of the 2022–2023 New York Times fellowship class, and I’ve interned at The Texas Tribune and Bloomberg News.
	</p>
	<p class="nutgraf">I’m looking for a job :) My contact info is below, and <a href="/Resume_20230409.pdf">here is my resume</a>.</p>

	<div class="nutgraf contact" class:contactFocused>
		<p>
			<b>Contacts:</b>
			<a href="mailto:{email}">{email}</a>
			<a href="https://twitter.com/cow_portal">Twitter</a>
		</p>
	</div>

	<Grid projects={projects.topLevel} />
</main>

<style lang="scss">
	main {
		margin: 22px auto 0;
		padding: 0 20px;
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
