<script>
	export let project, mediaHeight, color;

	let { name, image, description, url } = project;
	let isVideo = ['mp4', 'mov', 'webm'].some((e) => image.endsWith(e));

	const modules = import.meta.glob('./images/*.{png,jpg,webp}', { query: { enhanced: true } });

	let imagePromise =
		!isVideo && './images/' + image in modules ? modules['./images/' + image]() : null;
</script>

<div style="--height: {mediaHeight}px">
	<a href={url} style="color: {color}" target="_blank" rel="noopener noreferrer">
		<div class="media">
			{#if isVideo}
				{#if image === 'normals.mov' || image === 'ASIAN-VOTE-3X2.mp4'}
					<img src="./assets/nyt_logo.png" class="logo-overlay" alt="New York Times logo" />
				{/if}
				<video autoPlay playsInline muted loop>
					<source src={'./videos/' + image} />
				</video>
			{:else}
				{#if url.includes('texastribune.org')}
					<img src="./assets/tt_logo.png" class="logo-overlay trib-logo" alt="Texas Tribune logo" />
				{/if}
				{#await imagePromise}
					loading
				{:then imageModule}
					{#if imageModule}
						<enhanced:img class="image" src={imageModule.default} alt={name} />
					{:else}
						<img class="image" src={image} alt={name} />
					{/if}
				{:catch error}
					{error}
				{/await}
			{/if}
		</div>
		<p>{@html name}</p>
	</a>

	{#if description}
		<p class="description">{@html description}</p>
	{/if}
</div>

<style>
	.media {
		width: 100%;
		margin-bottom: 14px;
		position: relative;
		height: var(--height);
	}

	.image,
	video {
		object-fit: cover;
		object-position: 50% top;
		width: 100%;
		height: 100%;
		display: block;
		border: 1px solid #000;
	}

	video {
		padding-right: 0.1px; /* Unhides border-right */
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

	:global(code) {
		font-family: Inconsolata;
	}

	.description {
		color: #434343;
	}

	.description :global(a) {
		color: #434343;
		text-decoration: underline;
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
