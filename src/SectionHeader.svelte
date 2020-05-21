<script>
  export let id = undefined;
  export let empty = false;
  export let hideHr = false;
</script>

<style lang="scss">
  hr {
    background-color: #ccc;
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
    text-align: center;

    :global(a) {
      color: #fff;
      background: #121212;
      text-decoration: underline;

      &:hover {
        color: #121212;
        background: #e4e4e4;
      }
    }
  }
</style>

{#if !hideHr}
  <hr {id} />
{/if}
{#if !empty}
  <p>
    <slot />:
  </p>
{/if}
