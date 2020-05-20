<script>
  import Grid from './Grid.svelte';
  import SectionHeader from './SectionHeader.svelte';
  import { MAX_WIDTH } from './constants';

  const projects = {
    topLevel: [
      {
        name: 'New York Times Graphics',
        image: 'images/output.webp',
      },
      {
        name: 'Student Job Losses',
        image: 'images/job-loss.png',
      },
      {
        name: 'Higher Ed Coronavirus Response',
        image: 'images/ivy-response.mp4',
      },
      {
        name: 'Interactive gerrymandering playground',
        image: 'https://jasonkao.me/static/media/gerry.0f32dbdd.gif',
      },
    ],
    moreNYT: [
      {
        name: 'Clint Border Patrol Station',
        image: 'http://placekitten.com/200/300',
      },
      {
        name: 'Clint Border Patrol Station',
        image: 'http://placekitten.com/200/300',
      },
      {
        name: 'Clint Border Patrol Station',
        image: 'http://placekitten.com/200/300',
      },
      {
        name: 'Remain in Mexico',
        image: 'http://placekitten.com/200/300',
      },
      {
        name: 'Hong Kong Protest',
        image: 'http://placekitten.com/200/300',
      },
      {
        name: 'Hong Kong Protest',
        image: 'http://placekitten.com/200/300',
      },
    ],
  };
</script>

<style lang="scss">
  main {
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
  }

  .gray {
    color: #888;
  }

  .nutgraf {
    width: 56%;
    margin: 0 auto 64px;
  }
</style>

<main style="max-width: {MAX_WIDTH}px">

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

  <Grid projects={projects.topLevel} />

  <SectionHeader>
    More work from The New York Times and the Columbia Spectator:
  </SectionHeader>
  <Grid
    projects={projects.moreNYT}
    columns="2"
    colorOffset={projects.topLevel.length}
  />
  <Grid
    projects={projects.moreNYT.slice(projects.moreNYT.length - 3)}
    columns="3"
    colorOffset={projects.topLevel.length}
  />

  <SectionHeader>Buzzwords</SectionHeader>
  <p class="gray">
    D3, Svelte, Node, Redux, React, GraphQL, TypeScript, Mongo, AWS
  </p>
  <p class="gray">Illustrator, QGIS, mapshaper, Jupyter, Photoshop, Sketch</p>
  <p class="gray">JavaScript, Python, R, Go, SQL, C++</p>

</main>
