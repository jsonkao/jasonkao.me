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
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .description {
    color: #888;
  }
</style>

<div>
  <div class="media" style="background-image: url('{image}')" />
  <p style="color: {colors[index]}">{name}</p>
  <p class="description">Description</p>
</div>
