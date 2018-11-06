import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';

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
  </div>
);

export default injectSheet(styles)(ProjectGrid);
