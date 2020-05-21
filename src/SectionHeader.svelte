<script>
  export let id = undefined;

  export let empty = false;
</script>

<style lang="scss">
  hr {
    background-color: #ddd;
    height: 1px;
    border: 0;
    margin: 60px 0 23px;
  }

  p {
    margin-bottom: 23px;
    text-transform: uppercase;
    font-family: Inconsolata;
    font-size: 18px;
    font-weight: 600;

    :global(a) {
      color: #fff;
      background: #121212;
      text-decoration: underline;

      &:hover {
        color: #121212;
        background: #e4e4e4;
      }
    }

    :global(b) {
      font-weight: 600;
    }
  }
</style>

<hr {id} />
{#if !empty}
  <p>
    <slot />:
  </p>
{/if}
