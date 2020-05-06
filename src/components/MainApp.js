import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import rp from 'request-promise';

import List from './List';
import Grid from './Grid';
import ReactIcon from './ReactIcon';
import { projects } from '../projects';

const styles = {
  MainApp: {
    padding: '7.5vw',
    paddingTop: '270px',
  },
  contentSection: {
    marginBottom: '3.5vw',
    width: '60%',
    '& p + p, & h1 + h1': {
      marginTop: '0.725em',
    },
    '& h1': {
      lineHeight: 1.3,
    },
    '& h1 a': {
      color: '#000',
    },
  },
  subText: {
    color: '#777',
    '& a': {
      color: '#777',
      textDecoration: 'none',
      '&:hover': {
        color: '#000',
      },
    },
  },
  contactMe: {
    display: 'flex',
  },
  footer: {
    borderTop: '1px solid #000',
    fontSize: '16px',
    marginTop: '1vw',
    paddingTop: '5px',
    textAlign: 'center',
  },
  lastUpdated: {
    textTransform: 'uppercase',
    fontSize: '12px',
    color: 'rgba(0, 0, 0, 0.82)',
    display: 'block',
    lineHeight: 1.9,
  },
  '@media (max-width: 767px)': {
    MainApp: {
      padding: '7.5vw 5vw',
      paddingTop: '180px',
    },
    contentSection: {
      width: 'auto',

      '& h1:first-child': {
        height: '2.8em',
      },
    },
    contactMe: {
      display: 'block',
    },
  },
};

const roles = [
  'visual journalist',
  'multimedia journalist',
  'data journalist',
  'Columbia \u201922',
  'student journalist',
  'software developer',
];

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent,
);

class MainApp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      roleIndex: 0,
      lastUpdated: null,
    };

    this.headRef = React.createRef();
    if (isMobile) {
      roles[1] = 'multimedia<br>journalist';

      // If you don't like hacky things, avert your eyes :(
      let initOffset;
      window.addEventListener('scroll', e => {
        const { current } = this.headRef;
        if (current) {
          const { top, height } = current.getBoundingClientRect();
          const offset = top + height;
          if (offset > 0) {
            initOffset = initOffset || offset;
            this.changeRole(
              Math.floor(offset / roles.length / 3) % roles.length,
            );
          }
        }
      });
    }
  }

  componentDidMount() {
    if (process.env.NODE_ENV === 'development') return;

    const options = {
      uri:
        'https://api.github.com/repos/jsonkao/jasonkao.me/git/refs/heads/master',
      json: true,
    };

    rp(options)
      .then(lastCommit => {
        options.uri = lastCommit.object.url;
        return rp(options);
      })
      .then(commitNode => {
        const { date } = commitNode.committer;
        this.setState({
          lastUpdated: new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }).format(new Date(date)),
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  changeRole = roleIndex => roleIndex !== this.setState({ roleIndex });

  handleMouseMove = e => {
    const roleIndex =
      Math.floor(
        Math.abs(
          Math.pow(Math.pow(e.screenX, 2) + Math.pow(e.screenY, 2), 0.5),
        ) / 150,
      ) % roles.length;
    if (this.state.roleIndex !== roleIndex) {
      this.setState({ roleIndex });
    }
  };

  render() {
    const { lastUpdated } = this.state;
    const { classes } = this.props;
    return (
      <div
        className={classes.MainApp}
        onMouseMove={isMobile ? undefined : this.handleMouseMove}
      >
        <div className={classes.contentSection}>
          <h1 className={classes.mobileFixedHeight} ref={this.headRef}>
            Jason Kao &mdash;{' '}
            <span
              dangerouslySetInnerHTML={{ __html: roles[this.state.roleIndex] }}
            ></span>
            .
          </h1>
          <h1>
            I am a sophomore at Columbia and a reporter at the Columbia Daily
            Spectator. I like to spend my time doing journalism, computer
            science, and visual art.
          </h1>
        </div>

        <Grid
          title="Selected work from the Spectator and The New York Times"
          projects={projects.specAndNyt}
        />

        <Grid title="Some other stuff" projects={projects.featured} />

        <List
          title="Projects I contribute to"
          projects={projects.contributions}
        />
        <div className={classes.contentSection}>
          <p>Buzzwords&mdash;</p>
          <p className={classes.subText}>
            JavaScript, Python, R, SQL, C, Go, CSS, HTML
          </p>
          <p className={classes.subText}>
            D3, Node, React, Redux, Svelte, GraphQL, MongoDB, AWS
          </p>
          <p className={classes.subText}>
            Illustrator, QGIS, mapshaper, Jupyter, Photoshop, Sketch
          </p>
        </div>

        <div className={classes.contactMe} id="contactme-scroll-target">
          <div className={classes.contentSection}>
            <p>Social&mdash;</p>
            <p className={classes.subText}>
              <a
                href="https://twitter.com/jsonkao/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <br />
              <a
                href="https://github.com/jsonkao"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          </div>
          <div className={classes.contentSection}>
            <p>Email&mdash;</p>
            <p className={classes.subText}>
              jason.kao at columbia.edu
              <br />
              jason.kao at columbiaspectator.com
            </p>
          </div>
        </div>
        <div className={classes.footer}>
          Made with{' '}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ReactIcon />
          </a>{' '}
          by Jason Kao
          {lastUpdated && (
            <span className={classes.lastUpdated}>Updated {lastUpdated}</span>
          )}
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(MainApp);
