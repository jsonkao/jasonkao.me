<script>
  import Grid from './Grid.svelte';
  import SectionHeader from './SectionHeader.svelte';
  import { MAX_WIDTH } from './constants';

  const projects = {
    topLevel: [
      {
        name: 'New York Times Graphics',
        image: 'images/nyt-promo.webp',
        url: '#more-work',
      },
      {
        name: 'Student Job Losses',
        image: 'images/job-loss.webp',
        url:
          'https://www.columbiaspectator.com/eye-lead/2020/05/15/uncertainty-looms-as-student-jobs-are-disappearing-during-the-great-lockdown',
      },
      {
        name: 'Higher Ed Coronavirus Response',
        image: 'images/ivy-response.mp4',
        url:
          'https://www.columbiaspectator.com/news/2020/04/13/the-us-and-ivy-league-schools-were-late-to-respond-to-covid-19-data-shows-international-universities-did-better',
      },
      {
        name: 'Interactive gerrymandering playground',
        image: 'images/gerry.gif',
        url: 'https://github.com/gerry-app',
      },
      {
        name: 'Graduate Student Sex Diversity',
        image: 'images/graduate-sex-diversity.mp4',
        url:
          'https://www.columbiaspectator.com/eye-lead/2019/05/04/in-certain-science-and-engineering-fields-sex-diversity-among-graduate-students-is-stagnating-in-others-its-getting-worse',
      },
      {
        name: 'The Brass Tacks',
        image: 'images/properly_partisan.gif',
        url: 'https://github.com/brtacks',
      },
      {
        name: 'The Stuyvesant Spectator',
        image: 'images/stuyspec.gif',
        url: 'https://github.com/brtacks',
      },
    ],
    secondLevel: [
      {
        name:
          'Hungry, Scared and Sick: Inside the Migrant Detention Center in Clint, Tex.',
        image: 'images/clint.webp',
        url:
          'https://www.nytimes.com/interactive/2019/07/06/us/migrants-border-patrol-clint.html',
      },
      {
        name:
          'A Bird’s-Eye View of How Protesters Have Flooded Hong Kong Streets',
        image: 'images/hong-kong.webp',
        url:
          'https://www.nytimes.com/interactive/2019/06/20/world/asia/hong-kong-protest-size.html',
      },
      {
        name:
          'How Trump’s Policies Are Leaving Thousands of Asylum Seekers Waiting in Mexico',
        image: 'images/asylum-seekers.webp',
        url:
          'https://www.nytimes.com/interactive/2019/08/18/us/mexico-immigration-asylum.html',
      },
      {
        name: 'East Asian Genealogical Records',
        image: 'images/genealogical-records.mp4',
        url: 'https://www.columbiaspectator.com/eye/2019/03/26/genealogy/',
      },
      {
        name: 'React Scrollama',
        image: 'images/react-scrollama.mp4',
        url: 'https://jsonkao.github.io/react-scrollama',
      },
      {
        name: 'Net Price Inequity',
        image: 'images/net-price-inequity.mp4',
      },
      {
        name: 'Gender Diversity in the Tenure Track',
        image: 'images/tenure-track.gif',
        url: 'https://jsonkao.github.io/pipeline',
      },
      {
        name: 'See more Spec work at @graphicsdesk',
        image: 'images/spec-graphics.webp',
        url: 'https://graphicsdesk.github.io',
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

  <SectionHeader id="more-work">
    More work at
    <a href="https://www.nytimes.com/by/jason-kao">
      <b>The New York Times</b>
    </a>
    , at
    <a href="https://www.columbiaspectator.com/contributors/Jason-Kao">
      the Columbia Spectator
    </a>
    , and in
    <a href="https://www.github.com/jsonkao">open source</a>
  </SectionHeader>
  <Grid
    projects={projects.secondLevel.slice(0, projects.secondLevel.length - 4)}
    columns={2}
    colorOffset={projects.topLevel.length}
  />
  <Grid
    projects={projects.secondLevel.slice(projects.secondLevel.length - 4, projects.secondLevel.length - 1)}
    columns={3}
    colorOffset={projects.topLevel.length + projects.secondLevel.length - 4}
  />
  <Grid
    projects={projects.secondLevel.slice(projects.secondLevel.length - 1)}
    columns={1}
    colorOffset={projects.topLevel.length + projects.secondLevel.length - 1}
  />

  <SectionHeader>Buzzwords</SectionHeader>
  <p class="gray">
    D3, Svelte, Node, Redux, React, GraphQL, TypeScript, Mongo, AWS
  </p>
  <p class="gray">Illustrator, QGIS, mapshaper, Jupyter, Photoshop, Sketch</p>
  <p class="gray">JavaScript, Python, R, Go, SQL, C++</p>

</main>
