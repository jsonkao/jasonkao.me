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
    flexWrap: 'wrap',
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
    <div className={classes.container}>
      {projects.map((proj, i) => (
        <ProjectBox project={proj} key={proj.url} index={i}/>
      ))}
    </div>
  </div>
);

export default injectSheet(styles)(ProjectGrid);
