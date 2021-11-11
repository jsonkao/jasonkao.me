<script>
	export let project, mediaHeight, color;

	let { name, image, description, url, people } = project;
</script>

<div style="--height: {mediaHeight}px">
	<a href={url} style="color: {color}" target="_blank" rel="noopener noreferrer">
		<div class="media" class:slides-container={Array.isArray(image) && image.length > 1}>
			{#if image.includes('.mp4') || image.includes('.mov')}
				{#if image === 'images/normals.mov'}
					<img src="images/nyt_logo.png" class="logo-overlay" alt="New York Times logo" />
				{/if}
				<video autoPlay playsInline muted loop>
					<source src={image} />
				</video>
			{:else}
				{#if url.includes('texastribune.org')}
					<img src="images/tt_logo.png" class="logo-overlay trib-logo" alt="Texas Tribune logo" />
				{/if}
				{#each Array.isArray(image) ? image : [image] as img}
					<picture class:slides={Array.isArray(image) && image.length > 1}>
						{#if img.includes('.webp')}
							<source srcset="{image} 1x" type="image/webp" />
						{/if}
						<img src={img.replace('.webp', '.png')} alt={name} />
					</picture>
				{/each}
			{/if}
		</div>
		<p>{@html name}</p>
	</a>
	{#if description}
		<p class="description">{@html description}</p>
	{/if}
	<p class="people">
		Made possible by {@html people}
	</p>
</div>

<style lang="scss">
	.media {
		width: 100%;
		margin-bottom: 14px;
		position: relative;
		height: var(--height);

		picture img,
		video {
			object-fit: cover;
			object-position: 50% top;
			width: 100%;
			height: 100%;
			border: 1px solid #000;
		}

		video {
			padding-right: 0.1px; /* Unhides border-right */
		}
	}

	@keyframes fade {
		0% {
			opacity: 1;
		}
		45% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		95% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.slides-container {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;

		* {
			grid-column: 1 / 2;
			grid-row: 1 / 2;
			height: var(--height);
		}
	}

	.slides:nth-child(2) {
		animation: fade 10s infinite;
	}

	:global(code) {
		font-family: Inconsolata;
	}

	.description {
		color: #888;
	}

	.description :global(a) {
		color: #888;
		text-decoration: underline;
	}

	.people {
		font-family: Inconsolata;
		color: #aaa;
		font-size: 19px;
		font-weight: 400;
		line-height: 24px;
		margin-top: 2px;

		:global(a) {
			text-decoration: underline;
		}
	}

	.logo-overlay {
		position: absolute;
		width: 20px;
		bottom: 12px;
		left: 13px;
		opacity: 0.3;
		pointer-events: none;
	}

	.trib-logo {
		width: 56px;
		opacity: 1;
		background: rgba(255, 255, 255, 0.7);
		padding: 6.5px;
	}

	@media (max-width: 460px) {
		.trib-logo {
			width: 40px;
			padding: 3px;
		}
	}
</style>
