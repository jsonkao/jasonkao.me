<script>
  import ProjectBox from './ProjectBox.svelte';

  export let projects;
  export let columns = 2;
</script>

<style lang="scss">
  .grid {
    display: grid;
    column-gap: 25px;
  }
</style>

<div class="grid" style="grid-template-columns: {'1fr '.repeat(columns)}">
  {#each projects as project, index}
    <ProjectBox {project} {index} />
  {/each}
</div>
