<style lang="scss">
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 25px;
  }
</style>

<div class="grid">
  <slot />
</div>
