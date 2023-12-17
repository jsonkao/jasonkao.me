<script context="module">
	const modules = import.meta.glob('./images/*.{png,jpg,webp}', { query: { enhanced: true } });
</script>

<script>
	export let project, color;

	let { name, image = '', description, url, alt = '' } = project;
	let isVideo = ['mp4', 'mov', 'webm'].some((e) => image.endsWith(e));

	let imagePromise =
		!isVideo && './images/' + image in modules ? modules['./images/' + image]() : null;
</script>

<div>
	<a href={url} style="color: {color}" target="_blank" rel="noopener noreferrer">
		<div class="media">
			{#if isVideo}
				<video autoPlay playsInline muted loop>
					<source src={'./videos/' + image} />
				</video>
			{:else}
				{#await imagePromise then imageModule}
					{#if imageModule}
						<enhanced:img class="image" src={imageModule.default} {alt} />
					{:else}
						<img class="image" src={image} {alt} />
					{/if}
				{:catch error}
					{error}
				{/await}
			{/if}
		</div>
		<div class="text">
			<p>{@html name}</p>
			{#if description}
				<p class="description">{@html description}</p>
			{/if}
		</div>
	</a>
</div>

<style>
	.media {
		width: 100%;
		margin-bottom: 10px;
		position: relative;
		aspect-ratio: 3 / 2;
		border: 1px solid #000;
	}

	.image,
	video {
		object-fit: cover;
		object-position: 50% top;
		width: 100%;
		height: 100%;
		display: block;
	}

	video {
		padding-right: 0.1px; /* Unhides border-right */
	}

	.description {
		opacity: 0.5;
		margin-top: 1px;
	}

	.description :global(a) {
		color: inherit;
		text-decoration: underline;
	}

	@media (max-width: 460px) {
		.media {
			margin-bottom: 8px;
		}

		.description {
			margin-top: 2px;
		}

		.text p {
			display: inline;
		}
	}
</style>
