import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';

import ProjectText from './ProjectText';

const styles = {
  SelectedProjects: {
    marginBottom: '3.5vw',
  },
  listHeader: {
    marginBottom: '0.725em',
  },
  projectSelection: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  projectsList: {
    flexBasis: '50%',
    listStyle: 'none',
    padding: 0,
    '& li:last-child': {
      clear: 'both',
      color: '#000',
      display: 'block',
      verticalAlign: 'baseline',
      '& a': {
        textDecoration: 'none',
        '& span': {
          color: '#000',
          display: 'none',
        },
        '&:hover span': {
          display: 'inline',
        },
      },
    },
  },
  projectDemo: {
    flexBasis: '45%',
    marginTop: '-1.975em',
    '& img': {
      border: '1px solid #000',
      position: 'absolute',
      width: '45%',
    },
    '& p': {
      color: '#088d63',
      paddingRight: '7.5vw',
      position: 'absolute',
    },
  },
  rawLink: {
    color: '#000',
  },
  '@media (max-width: 767px)': {
    projectSelection: {
      display: 'block',
    },
    projectDemo: {
      display: 'none',
    },
  },
};

class SelectedProjects extends PureComponent {
  state = {
    displayedProject: null,
  };

  hideProject = () => this.setState({ displayedProject: null });

  showProject = project => this.setState({ displayedProject: project });

  render() {
    const { classes, projects, title } = this.props;
    const { displayedProject } = this.state;
    return (
      <div className={classes.SelectedProjects}>
        <p className={classes.listHeader}>{title}&mdash;</p>
        <div className={classes.projectSelection}>
          <ul className={classes.projectsList} onMouseLeave={this.hideProject}>
            {projects.map(project => (
              <ProjectText
                key={project.url}
                showProject={this.showProject}
                project={project}
              />
            ))}
            <li>
              <a
                className={classes.rawLink}
                href="https://github.com/jsonkao"
                target="_blank"
              >
                ... <span>(github)</span>
              </a>
            </li>
          </ul>
          <div className={classes.projectDemo}>
            {projects.map(project => {
              if (project.imgPath) {
                return (
                  <img
                    key={project.url}
                    src={project.imgPath}
                    style={{
                      visibility:
                        displayedProject === project ? 'visible' : 'hidden',
                    }}
                  />
                );
              } else if (project.description) {
                return (
                  <p
                    key={project.url}
                    style={{
                      visibility:
                        displayedProject === project ? 'visible' : 'hidden',
                    }}
                  >
                    {project.description}
                  </p>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(SelectedProjects);
