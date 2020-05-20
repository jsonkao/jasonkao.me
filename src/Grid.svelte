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

  $: trackWidth = `minmax(${600 - 100 * columns}px, 1fr)`;

  function handleResize() {
    pageWidth = Math.min(document.body.clientWidth, MAX_WIDTH);
  }

  const color = index => colors[(colorOffset + index) % colors.length];
</script>

<style lang="scss">
  .grid {
    display: grid;
    column-gap: 25px;
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
      width: 100%;
      height: 100%;
    }
  }

  .description {
    color: #888;
  }
</style>

<svelte:window on:resize={handleResize} />

<div
  class="grid"
  style="grid-template-columns: repeat(auto-fill, {trackWidth})"
>
  {#each projects as { name, image }, index}
    <div>
      <div class="media" style="height: {Math.round(mediaHeight)}px">
        {#if image.includes('.mp4')}
          <video autoPlay playsInline muted loop>
            <source src={image} />
          </video>
        {:else}
          <img src={image} alt={name} />
        {/if}
      </div>
      <p style="color: {color(index)}">{name}</p>
      <p class="description">Description</p>
    </div>
  {/each}
</div>
