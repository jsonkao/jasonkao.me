<script>
  import Grid from './Grid.svelte';
  import SectionHeader from './SectionHeader.svelte';

  const projects = [
    {
      name: 'The Stuyvesant Spectator',
      image: 'images/ivy-response.mp4',
    },
    {
      name: 'Higher Ed Coronavirus Response',
      image: 'https://jasonkao.me/static/media/gerry.0f32dbdd.gif',
    },
  ];
</script>

<style lang="scss">
  main {
    max-width: 1050px;
    margin: 0 auto;
  }

  header {
    display: flex;
    justify-content: space-between;
    font-size: 22px;
    line-height: 29px;
    margin: 18px 0 22px;

    div:last-child {
      text-align: right;
    }

    .gray {
      color: #888;
    }
  }

  .nutgraf {
    width: 56%;
    margin: 0 auto 64px;
  }
</style>

<main>

  <header>
    <div>
      <p>Jason Kao</p>
    </div>
    <div>
      <p>Portfolio.</p>
      <p class="gray">Contact.</p>
    </div>
  </header>

  <p class="nutgraf">
    I am a sophomore at Columbia and a graphics editor at the Columbia
    Spectator. I like to spend my time doing journalism, computer science, and
    visual art.
  </p>

  <Grid {projects} />

  <SectionHeader>More work from The New York Times:</SectionHeader>
  <Grid {projects} columns="3"/>

</main>
