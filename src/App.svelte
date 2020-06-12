<script>
  import { onMount } from 'svelte';
  import Grid from './Grid.svelte';
  import SectionHeader from './SectionHeader.svelte';
  import { MAX_WIDTH } from './constants';
  import projects from './projects';

  let email;
  onMount(() => (email = 'jason.kao@columbia.edu'));

  let contactFocused = false;
</script>

<style lang="scss">
  main {
    margin: 0 auto;
    padding: 0 40px;
  }

  header {
    display: flex;
    justify-content: space-between;
    margin: 18px 0 22px;

    div:last-child {
      text-align: right;
    }
  }

  .gray,
  .gray a {
    color: #888;
  }

  .nutgraf {
    width: 50%;
    margin: 0 auto 21px;

    & > a {
      color: #121212;
      border-bottom: 1px solid #121212;
      transition-duration: 0.15s;
      &:hover {
        text-decoration: none;
        border-bottom-color: #e4e4e4;
        background: #e4e4e4;
      }
    }
  }

  .less-important {
  }

  .contact {
    margin-bottom: 60px;
    font-family: Inconsolata;
    font-size: 17px;
    font-weight: 500;
    line-height: 24px;

    p {
      display: inline-block;
      padding: 3px 0;
      transition-duration: 0.1s;
    }

    b {
      font-weight: 800;
    }

    a {
      color: #121212;
      text-decoration: none;
      border-bottom: 1px solid #ccc;
      &:hover {
        border-bottom-color: #121212;
      }
    }
    a:not(:last-child) {
      margin-right: 6px;
    }

    &.contactFocused {
      p {
        background-color: #fbe1c4;
      }
      a {
        transition-duration: 0.1s;
        border-bottom-color: rgba(0, 0, 0, 0.8);
      }
    }
  }

  .buzzwords {
    p {
      max-width: 600px;
    }
    p:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  .skinny {
    width: 56%;
    margin: 0 auto;
  }

  footer.skinny {
    margin-bottom: 40px;
  }

  .updated-text {
    text-transform: uppercase;
    font-family: Inconsolata;
    font-size: 16px;
    font-weight: 500;
    color: #aaa;
  }

  @media (max-width: 600px) {
    header {
      margin-bottom: 48px;
    }

    .nutgraf,
    .skinny {
      width: 100%;
    }
  }
</style>

<main style="max-width: {MAX_WIDTH}px">

  <header>
    <div>
      <p>Jason Kao</p>
    </div>
    <div>
      <p>Portfolio.</p>
      <p class="gray">
        <button on:click={() => (contactFocused = !contactFocused)}>
          Contact.
        </button>
      </p>
    </div>
  </header>

  <p class="nutgraf">
    I like creating journalism with computer science and different mediums. I am
    currently a graphics intern with Bloomberg News. I also really enjoyed my
    internship last summer on the New York Times Graphics desk.
  </p>

  <p class="nutgraf less-important">
    Additionally...
    <br />
    - deputy
    <a
      href="https://graphicsdesk.github.io"
      target="_blank"
      rel="noopener noreferrer"
    >
      graphics
    </a>
    editor at the Columbia Spectator
    <br />
    - sophomore at Columbia, CS + interactive media
  </p>

  <div class="nutgraf contact" class:contactFocused>
    <p>
      <b>Contact:</b>
      <a href="mailto:{email}">{email}</a>
      <a href="https://github.com/jsonkao">github.com/jsonkao</a>
      <a href="https://twitter.com/jsonkao">@jsonkao</a>
    </p>
  </div>

  <Grid projects={projects.topLevel} />

  <SectionHeader id="extended-portfolio" centered>
    More work at
    <a href="https://www.nytimes.com/by/jason-kao">The New York Times</a>
    and
    <a href="https://www.columbiaspectator.com/contributors/Jason-Kao">
      the Columbia Spectator
    </a>
  </SectionHeader>
  <Grid
    projects={projects.secondLevel.slice(0, projects.secondLevel.length - 1)}
    columns={2}
  />
  <Grid
    projects={projects.secondLevel.slice(projects.secondLevel.length - 1)}
    columns={1}
  />

  <div class="skinny">
    <SectionHeader centered>
      <a href="https://www.github.com/jsonkao">Open source</a>
      software
    </SectionHeader>
  </div>
  <Grid projects={projects.openSource} columns={3} />

  <footer class="skinny">
    <SectionHeader>Buzzwords</SectionHeader>
    <div class="buzzwords">
      <p>Visualization with D3 and WebGL.</p>
      <p>Data pipeline with Python, R, SQL, and AWS.</p>
      <p>
        Spatial analysis with mapshaper,
        <code>...bostock_things</code>
        , QGIS, and GDAL.
      </p>
      <p>
        Web development with JavaScript, Svelte, Node,
        <code>...frameworks</code>
        , GraphQL, and TypeScript.
      </p>
      <p>Graphics and design with Illustrator and Photoshop.</p>
    </div>

    <SectionHeader empty />
    <p class="updated-text">Updated June 2020.</p>
  </footer>

</main>
