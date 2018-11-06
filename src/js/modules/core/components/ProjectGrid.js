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
};

const ProjectGrid = ({ classes, title, projects = [] }) => (
  <div className={classes.ProjectGrid}>
    <p className={classes.listHeader}>{title}&mdash;</p>
    {projects.slice(Math.floor(projects.length / 2)).map((_, index) => {
      return (
        <div className={classes.container}>
          <ProjectBox project={projects[2 * index]} />
          <ProjectBox project={projects[2 * index + 1]} />
        </div>
      );
    })}
  </div>
);

export default injectSheet(styles)(ProjectGrid);
