import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';

import SelectedProjects from './SelectedProjects';
import { projects } from '../../projects';

const styles = {
  MainApp: {
    padding: '7.5vw',
    paddingTop: '270px',
  },
  contentSection: {
    marginBottom: '3.5vw',
    width: '55%',
    '& p + p, & h1 + h1': {
      marginTop: '0.725em',
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
  reactLogo: {
    position: 'relative',
    top: '7px',
    width: '28px',
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
  'data journalist',
  'illustrator',
  'data scientist',
  'software engineer',
  "Columbia University '22",
  'visual journalist',
  'React nerd',
  'designer',
  'floutist',
  'theater geek',
];

class MainApp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      roleIndex: 0,
    };
  }

  handleMouseMove = e => {
    const roleIndex =
      Math.floor(
        Math.abs(
          Math.pow(Math.pow(e.screenX, 2) + Math.pow(e.screenY, 2), 0.5),
        ) / 110,
      ) % roles.length;
    if (this.state.roleIndex !== roleIndex) {
      this.setState({ roleIndex });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.MainApp} onMouseMove={this.handleMouseMove}>
        <div className={classes.contentSection}>
          <h1 className={classes.mobileFixedHeight}>
            Jason Kao&mdash;{roles[this.state.roleIndex]}.
          </h1>
          <h1>
            I just want to create a few beautiful things. Visual journalism,
            computer science, musical theatre, statistics, and political science
            make up my jam.
          </h1>
        </div>
        <SelectedProjects
          title="Selected projects"
          projects={projects.selected}
        />
        <SelectedProjects
          title="Projects I contribute to"
          projects={projects.contributions}
        />
        <div className={classes.contentSection}>
          <p>Buzzwords&mdash;</p>
          <p className={classes.subText}>
            JavaScript (ES7), Python, Java, Go, C, PostgreSQL, Ruby, CSS, HTML
          </p>
          <p className={classes.subText}>
            React / Redux / Apollo, GraphQL, Rails, Node, AWS, GCP
          </p>
          <p className={classes.subText}>R, MATLAB, D3, Illustrator, QGIS</p>
        </div>
        <div className={classes.contentSection}>
          <p>Living heroes&mdash;</p>
          <p className={classes.subText}>
            <a href="http://juliaangwin.com/">Julia Angwin</a>,{' '}
            <a href="https://twitter.com/blumysden?lang=en">
              Scott Blumenthal
            </a>,{' '}
            <a href="http://www.ariciano.com/home" target="_blank">
              Ari Melenciano
            </a>,{' '}
            <a href="https://craphound.com/" target="_blank">
              Cory Doctorow
            </a>,{' '}
            <a href="https://www.c-span.org/person/?emmallanso">Emma LLanso</a>,{' '}
            <a href="https://www.nytimes.com/by/anjali-singhvi">
              Anjali Singhvi
            </a>
          </p>
        </div>
        <SelectedProjects title="Catch me at" projects={projects.events} />
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
              <a
                href="https://stackoverflow.com/users/6174302/jason-kao"
                target="_blank"
              >
                Stack Overflow
              </a>
              <br />
              <a href="https://linkedin.com/in/jsonkao/" target="_blank">
                LinkedIn
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
              <a href="mailto:jason.kao@columbia.edu">jason.kao@columbia.edu</a>
              <br />
              <a href="tel:+01-347-933-1820">+1 347 933 1820</a>
            </p>
          </div>
        </div>
        <div className={classes.footer}>
          Made with{' '}
          <a href="https://reactjs.org/" target="_blank">
            <img src="/img/react.svg" className={classes.reactLogo} />
          </a>{' '}
          by Jason Kao.
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(MainApp);
