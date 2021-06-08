<script context="module">
	let totalItems = 0;
</script>

<script>
	export let projects;
	export let columns = 2;

	let colorOffset = totalItems;
	totalItems += projects.length;

	const colors = ['#A32251', '#0041FF', '#1A1A57', '#D91F25', '#004F50', '#EBAB3D'];

	const minFr = 600 - 100 * columns;

	let clientWidth, mediaHeight, gridColumns;
	$: {
		let fr = (clientWidth - 25 * (columns - 1)) / columns; // 1fr
		if (fr < minFr) {
			fr = clientWidth;
			gridColumns = '1fr';
		} else {
			gridColumns = '1fr '.repeat(columns);
		}
		mediaHeight = fr * (2 / 3);
	}

	const color = (index) => colors[(colorOffset + index) % colors.length];
</script>

<div
	class="grid"
	style="grid-template-columns: {gridColumns}; column-gap: {columns > 1 ? 25 : 0}px; {columns ===
		1 && 'text-align: center'}"
	bind:clientWidth
>
	{#each projects as { name, image, description, url, people }, index}
		<div>
			<a href={url} style="color: {color(index)}" target="_blank" rel="noopener noreferrer">
				<div class="media" style="height: {Math.round(mediaHeight)}px">
					{#if image.includes('.mp4') || image.includes('.mov')}
						{#if image === 'images/normals.mov'}
							<img src="images/nyt_logo.png" class="logo-overlay" />
						{/if}
						<video autoPlay playsInline muted loop>
							<source src={image} />
						</video>
					{:else}
						<picture>
							{#if image.includes('.webp')}
								<source srcset="{image} 1x" type="image/webp" />
							{/if}
							<img src={image.replace('.webp', '.png')} alt={name} />
						</picture>
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
	{/each}
</div>

<style lang="scss">
	.grid {
		display: grid;
		row-gap: 50px;
	}

	:global(.grid + .grid) {
		margin-top: 50px;
	}

	.media {
		width: 100%;
		margin-bottom: 14px;
		position: relative;

		picture img,
		video {
			object-fit: cover;
			object-position: 50% top;
			width: 100%;
			height: 100%;
			border: 1px solid #000;
		}

		video {
			padding-right: 1px;
		}
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
	}

	.logo-overlay {
		position: absolute;
		width: 20px;
		bottom: 12px;
		left: 13px;
		opacity: 0.3;
		pointer-events: none;
	}
</style>
