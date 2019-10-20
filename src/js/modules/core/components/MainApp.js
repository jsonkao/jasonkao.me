import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import rp from 'request-promise';
import dateFormat from 'dateformat';

import List from './List';
import Grid from './Grid';
import ReactIcon from './ReactIcon';
import { projects } from '../../projects';

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
    },
    contactMe: {
      display: 'block',
    },
    mobileFixedHeight: {
      height: '2.8em',
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
    if (process.env.NODE_ENV === 'development')
      return;

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
        this.setState({ lastUpdated: commitNode.committer.date });
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
        ) / 100,
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
            Jason Kao&mdash;<span dangerouslySetInnerHTML={{ __html: roles[this.state.roleIndex] }}></span>.
          </h1>
          <h1>
            I am passionate about journalism, computer science, and visual
            art. Last summer, I interned on The New York Times Graphics desk.
          </h1>
        </div>
        <Grid title="Selected work" projects={projects.featured} />
        <List
          title="Projects I contribute to"
          projects={projects.contributions}
        />
        <div className={classes.contentSection}>
          <p>Buzzwords&mdash;</p>
          <p className={classes.subText}>
            JavaScript (ES9), Python, R, C, C++, Java, Go, SQL, CSS, HTML
          </p>
          <p className={classes.subText}>
            Node, React / Redux / Apollo, Node, GraphQL, Rails, AWS (full stack), GCP
            (data)
          </p>
          <p className={classes.subText}>
            Illustrator, QGIS, PhotoShop, Sketch, WebStorm, Jupyter
          </p>
        </div>
        <List title={'Let\u2019s meet up'} projects={projects.events} />
        <div className={classes.contactMe} id="contactme-scroll-target">
          <div className={classes.contentSection}>
            <p>Social&mdash;</p>
            <p className={classes.subText}>
              <a href="https://github.com/jsonkao" target="_blank">
                GitHub
              </a>
              <br />
              <a href="https://twitter.com/jsonkao/" target="_blank">
                Twitter
              </a>
              <br />
              <a href="https://jasonkao.me/Resume.pdf" target="_blank">
                Resume
              </a>
            </p>
          </div>
          <div className={classes.contentSection}>
            <p>If you&rsquo;d like to get in touch&mdash;</p>
            <p className={classes.subText}>
              <a>jason.kao at columbia.edu</a>
              <br/>
              <a>jason.kao at columbiaspectator.com</a>
            </p>
          </div>
        </div>
        <div className={classes.footer}>
          Made with{' '}
          <a href="https://reactjs.org/" target="_blank">
            <ReactIcon />
          </a>{' '}
          by Jason Kao.
          {lastUpdated && (
            <span className={classes.lastUpdated}>
              Updated {dateFormat(lastUpdated, 'longDate')}.
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(MainApp);
