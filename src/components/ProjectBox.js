import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  ProjectBox: {
    marginBottom: '1em',
    width: '48.5%',
  },
  anchor: {
    display: 'block',
    textDecoration: 'none',
  },
  imgContainer: {
    // maxHeight: '40vw', // TODO: MAKE IT TWO COLUMNS NOT ROWS
    maxHeight: '40vw',
    marginBottom: '0.5em',
  },
  img: {
    width: '100%',
    boxShadow: '-1px 3px 10px -1px rgba(0,0,0,0.5)',
  },
  blue: { color: '#0041FF' },
  red: { color: '#D91F25' },
  cherry: { color: '#A32251' },
  indigo: { color: '#1A1A57' },
  gold: { color: '#EBAB3D' },
  green: { color: '#004F50' },
  description: {
    color: '#999',
    textAlign: 'left',
  },
  noticeMe: {
    color: '#000',
  },

  '@media (max-width: 767px)': {
    ProjectBox: {
      width: '100%',
    },
    imgContainer: {
      maxHeight: '85vw',
    },
  },
};

const ProjectBox = ({
  classes,
  index,
  project: { imgPath, url, description, title, noticeMe },
}) => {
  const { blue, red, cherry, indigo, gold, green } = classes;
  const colors = [blue, red, cherry, indigo, gold, green];
  return (
    <div className={classes.ProjectBox}>
      <a href={url} className={classes.anchor} target="_blank">
        {imgPath ? (
          <div className={classes.imgContainer}>
            <img className={classes.img} src={imgPath} alt={description} />
          </div>
        ) : (
          <p className={classes.description}>{description}</p>
        )}
        <p className={colors[index % colors.length]}>{title}</p>
      </a>
      <p className={classes.description}>
        {description}
        {noticeMe && <span className={classes.noticeMe}> ({noticeMe})</span>}
      </p>
    </div>
  );
};

export default injectSheet(styles)(ProjectBox);
