import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  ProjectText: {
    clear: 'both',
    display: 'block',
    margin: '4px auto',
    '& a': {},
    '&:before': {
      content: '" "',
      display: 'table',
    },
    '&:after': {
      clear: 'both',
      content: '" "',
      display: 'table',
    },
    '&:hover': {
      cursor: 'pointer',
      '& a': {
        color: '#000',
      },
    },
  },
  link: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#777',
    height: '100%',
    textDecoration: 'none',
    width: '100%',
    '&:hover': {
      color: '#000',
    },
  },
  noticeMe: {
    color: '#f00',
  },
  arrow: {
    alignSelf: 'flex-end',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif',
  },
};

const ProjectText = ({ classes, project, showProject }) => {
  return (
    <li className={classes.ItemText} onMouseEnter={() => showProject(project)}>
      <a href={project.url} target="_blank" className={classes.link}>
        <div>
          {project.title}
          {project.noticeMe && (
            <span className={classes.noticeMe}> ({project.noticeMe})</span>
          )}
        </div>
        <div className={classes.arrow}>↗</div>
      </a>
    </li>
  );
};

export default injectSheet(styles)(ProjectText);
