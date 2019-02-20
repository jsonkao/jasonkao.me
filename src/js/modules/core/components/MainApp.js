import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import rp from 'request-promise';
import dateFormat from 'dateformat';

import SelectedProjects from './SelectedProjects';
import ProjectGrid from './ProjectGrid';
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
  'data journalist',
  'software engineer',
  "Columbia '22",
  'visual journalist',
  'journalist',
  'full stack developer',
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
      // If you have hacky things avert your eyes
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
    if (process.env.NODE_ENV === 'development') {
      return;
    }

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
        ) / 110,
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
            Jason Kao&mdash;{roles[this.state.roleIndex]}.
          </h1>
          <h1>
            I am passionate about good code, good journalism, and a good web. I
            am the Graphics Deputy Editor of The Columbia Daily Spectator.
          </h1>
        </div>
        <ProjectGrid title="Selected projects" projects={projects.featured} />
        <SelectedProjects
          title="Projects I contribute to"
          projects={projects.contributions}
        />
        <div className={classes.contentSection}>
          <p>Buzzwords&mdash;</p>
          <p className={classes.subText}>
            JavaScript (ES9), Python, Java, C, Go, PostgreSQL, Ruby, CSS (SASS),
            HTML
          </p>
          <p className={classes.subText}>
            React / Redux / Apollo, GraphQL, Rails, Node, AWS, GCP
          </p>
          <p className={classes.subText}>D3, Illustrator, QGIS, R</p>
        </div>
        {/*<div className={classes.contentSection}>
          <p>Those who inspire me&mdash;</p>
          <p className={classes.subText}>
            <a href="http://juliaangwin.com/" target="_blank">
              Julia Angwin
            </a>,{' '}
            <a href="https://monachalabi.com/" target="_blank">
              Mona Chalabi,{' '}
            </a>
            <a
              href="https://www.nytimes.com/column/kara-swisher"
              target="_blank"
            >
              Kara Swisher
            </a>,{' '}
            <a href="https://craphound.com/" target="_blank">
              Cory Doctorow
            </a>,{' '}
            <a href="https://www.c-span.org/person/?emmallanso" target="_blank">
              Emma Llanso
            </a>
          </p>
        </div>*/}
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
              <a href="https://stackoverflow.com/story/jsonkao" target="_blank">
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
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              className={classes.reactLogo}
              viewBox="0 0 600 600"
              enableBackground="new 0 0 600 600"
              xmlSpace="preserve"
            >
              <g id="Layer_2">
                <path
                  fill="none"
                  stroke="#E91E63"
                  strokeWidth="24"
                  strokeMiterlimit="10"
                  d="M371.987,227.641
                c47.628,47.628,85.039,98.708,106.914,143.552c26.358,54.033,30.096,99.722,11.103,118.714
                c-19.793,19.793-68.267,15.884-125.731-12.979c-43.445-21.821-92.031-59.119-137.242-104.331
                c-46.354-46.354-84.95-95.545-106.667-139.816c-27.48-56.023-30.057-103.743-10.643-123.157
                c18.838-18.839,63.248-16.056,116.694,9.757C271.574,141.193,323.895,179.548,371.987,227.641z"
                />
                <path
                  fill="none"
                  stroke="#E91E63"
                  strokeWidth="24"
                  strokeMiterlimit="10"
                  d="M272.931,201.125
                c65.052-17.465,127.989-24.354,177.767-20.902c59.974,4.16,101.42,23.747,108.385,49.688
                c7.259,27.033-20.345,67.073-74.054,102.434c-40.608,26.733-97.189,50.188-158.941,66.769
                c-63.312,16.998-125.207,25.858-174.408,22.553c-62.26-4.181-104.884-25.789-112.004-52.306
                c-6.907-25.731,17.688-62.811,66.75-96.214C147.879,244.923,207.243,218.761,272.931,201.125z"
                />
                <path
                  fill="none"
                  stroke="#E91E63"
                  strokeWidth="24"
                  strokeMiterlimit="10"
                  d="M200.469,273.707
                c17.357-65.081,42.82-123.05,70.671-164.45c33.556-49.882,71.225-76.008,97.178-69.086c27.045,7.212,47.949,51.123,51.76,115.315
                c2.883,48.533-5.055,109.266-21.531,171.046c-16.892,63.341-40.126,121.389-67.562,162.365
                c-34.716,51.852-74.723,77.988-101.252,70.913c-25.743-6.865-45.584-46.692-50.021-105.881
                C175.963,403.92,182.944,339.424,200.469,273.707z"
                />
              </g>
              <g id="Layer_3">
                <path
                  fill="#E91E63"
                  d="M300,349.369c-1.019,0-1.881-0.353-2.586-1.058l-36.679-35.386c-0.392-0.313-0.931-0.822-1.617-1.528
                c-0.686-0.705-1.773-1.988-3.262-3.851c-1.489-1.86-2.822-3.771-3.997-5.73s-2.224-4.33-3.145-7.112
                c-0.92-2.782-1.381-5.486-1.381-8.111c0-8.621,2.488-15.361,7.465-20.221c4.977-4.859,11.854-7.289,20.631-7.289
                c2.43,0,4.909,0.421,7.436,1.264c2.527,0.843,4.879,1.979,7.054,3.41c2.174,1.43,4.046,2.772,5.613,4.026s3.057,2.586,4.467,3.997
                c1.411-1.411,2.899-2.743,4.467-3.997c1.568-1.254,3.438-2.596,5.614-4.026c2.175-1.431,4.525-2.567,7.054-3.41
                c2.527-0.842,5.006-1.264,7.435-1.264c8.778,0,15.655,2.43,20.632,7.289c4.978,4.859,7.466,11.6,7.466,20.221
                c0,8.66-4.487,17.477-13.461,26.451l-36.619,35.268C301.881,349.017,301.019,349.369,300,349.369z"
                />
              </g>
            </svg>
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
