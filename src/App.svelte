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
    width: 56%;
    margin: 0 auto 21px;
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
      border-bottom: 1px solid #cdcdcd;
      &:hover {
        border-bottom-color: #121212;
      }
    }
    a:not(:nth-child(2)) {
      margin-right: 5px;
    }

    &.contactFocused {
      p {
        background-color: #fbe1c4;
      }
      a {
        border-bottom-color: rgba(255, 255, 255, 0.8);
        border-bottom-width: 1.5px;
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

  footer {
    width: 56%;
    margin: 0 auto 40px;
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
    footer {
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
    I am a sophomore at Columbia and a graphics editor at the Columbia
    Spectator. I like to spend my time doing journalism, computer science, and
    visual art.
  </p>
  <p class="nutgraf">
    I am a Graphics intern at Bloomberg News. Last summer, I interned on the New
    York Times Graphics desk.
  </p>

  <div class="nutgraf contact" class:contactFocused>
    <p>
      <b>Get in touch:</b>
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
    and in
    <a href="https://www.github.com/jsonkao">open source</a>
  </SectionHeader>
  <Grid
    projects={projects.secondLevel.slice(0, projects.secondLevel.length - 4)}
    columns={2}
  />
  <Grid
    projects={projects.secondLevel.slice(projects.secondLevel.length - 4, projects.secondLevel.length - 1)}
    columns={3}
  />
  <Grid
    projects={projects.secondLevel.slice(projects.secondLevel.length - 1)}
    columns={1}
  />

  <footer>
    <SectionHeader>Buzzwords</SectionHeader>
    <div class="buzzwords">
      <p>D3, Svelte, Node, Redux, React, GraphQL, TypeScript, Mongo, AWS</p>
      <p>Illustrator, QGIS, mapshaper, Jupyter, Photoshop, Sketch</p>
      <p>JavaScript, Python, R, Go, SQL, C++</p>
    </div>

    <SectionHeader empty />
    <p class="updated-text">Updated May 15, 2020.</p>
  </footer>

</main>
