import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import ProjectBox from './ProjectBox';

const styles = {
  ProjectGrid: {
    marginBottom: '3.5vw',
  },
  listHeader: {
    marginBottom: '0.725em',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '26px',
    textAlign: 'center',
  },

  '@media (max-width: 767px)': {
    container: {
      flexWrap: 'wrap',
      fontSize: 'inherit',
    },
  },
};

const ProjectGrid = ({ classes, title, projects = [] }) => (
  <div className={classes.ProjectGrid}>
    <p className={classes.listHeader}>{title}&mdash;</p>
    {projects.slice(Math.floor(projects.length / 2)).map((proj, i) => {
      // index given to ProjectBox for color configurationp
      const index = 2 * i;
      return (
        <div className={classes.container} key={proj.url}>
          <ProjectBox project={projects[index]} index={index} />
          <ProjectBox project={projects[index + 1]} index={index + 1} />
        </div>
      );
    })}
  </div>
);

export default injectSheet(styles)(ProjectGrid);
