<script>
  import { MAX_WIDTH } from './constants';

  export let projects;
  export let columns = 2;
  export let colorOffset = 0;

  const colors = [
    '#A32251',
    '#0041FF',
    '#1A1A57',
    '#D91F25',
    '#004F50',
    '#EBAB3D',
  ];

  let pageWidth = Math.min(document.body.clientWidth, MAX_WIDTH);

  $: mediaHeight = (((pageWidth - 25) / columns) * 2) / 3;

  $: trackWidth = columns > 1 ? `minmax(${600 - 100 * columns}px, 1fr)` : '1fr';

  function handleResize() {
    pageWidth = Math.min(document.body.clientWidth, MAX_WIDTH);
  }

  const color = index => colors[(colorOffset + index) % colors.length];
</script>

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
    img,
    video {
      object-fit: cover;
      object-position: 50% top;
      width: 100%;
      height: 100%;
      border: 1px solid #000;
    }
  }

  .description {
    color: #888;
  }
</style>

<svelte:window on:resize={handleResize} />

<div
  class="grid"
  style="grid-template-columns: repeat(auto-fill, {trackWidth}); column-gap: {columns > 1 ? 25 : 0}px; {columns === 1 && 'text-align: center'}"
>
  {#each projects as { name, image, url }, index}
    <div>
      <a href={url} style="color: {color(index)}">
        <div class="media" style="height: {Math.round(mediaHeight)}px">
          {#if image.includes('.mp4')}
            <video autoPlay playsInline muted loop>
              <source src={image} />
            </video>
          {:else}
          <picture>
            {#if image.includes('.webp')}
              <source srcset="{image} 1x" type="image/webp">
            {/if}
            <img src={image.replace('.webp', '.png')} alt={name} />
          </picture>
          {/if}
        </div>
        <p>{name}</p>
      </a>
      <p class="description">Description</p>
    </div>
  {/each}
</div>
