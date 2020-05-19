<script>
  export let project, index;

  const colors = [
    '#A32251',
    '#0041FF',
    '#1A1A57',
    '#D91F25',
    '#EBAB3D',
    '#004F50',
  ];

  let { name, image } = project;
</script>

<style lang="scss">
  .media {
    width: 100%;
    height: 340px;
    margin-bottom: 14px;
    img, video {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .description {
    color: #888;
  }
</style>

<div>
  <div class="media">
    {#if image.includes('.mp4')}
      <video autoPlay playsInline muted loop>
        <source src={image}>
      </video>
    {:else}
      <img src={image} alt={name} />
    {/if}
  </div>
  <p style="color: {colors[index]}">{name}</p>
  <p class="description">Description</p>
</div>
