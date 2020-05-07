import React from 'react';
import injectSheet from 'react-jss';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';

const styles = {
  ProjectBox: {
    marginBottom: '1em',
    width: '48.5%',
  },
  anchor: {
    display: 'block',
    textDecoration: 'none',
  },
  titleContainer: {
    '& span a': {
      textDecoration: 'none',
      color: 'inherit',
      '&:hover svg': {
        borderColor: 'inherit',
      },
    },
    '& svg': {
      position: 'relative',
      top: 5,
      borderBottom: '2px solid transparent',
    },
  },
  imgContainer: {
    // maxHeight: '40vw', // TODO: MAKE IT TWO COLUMNS NOT ROWS
    maxHeight: '40vw',
    marginBottom: '0.5em',
    '& img, video': {
      width: '100%',
      boxShadow: '-1px 3px 10px -1px rgba(0,0,0,0.5)',
    },
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
  project: { imgPath, url, description, title, noticeMe, githubLink },
}) => {
  const { blue, red, cherry, indigo, gold, green } = classes;
  const colors = [blue, red, cherry, indigo, gold, green];
  const asset = require('../media/' + imgPath);
  return (
    <div className={classes.ProjectBox}>
      <a href={url} className={classes.anchor}>
        {imgPath ? (
          <div className={classes.imgContainer}>
            {!imgPath.includes('.mp4') ? (
              <img src={asset} alt={description} />
            ) : (
              <video autoPlay playsInline muted loop>
                <source src={asset} />
              </video>
            )}
          </div>
        ) : (
          <p className={classes.description}>{description}</p>
        )}
      </a>
      <p className={classes.titleContainer}>
        <span className={colors[index % colors.length]}>
          <a href={url}>
            {title} <AiOutlineLink />
          </a>
          {githubLink && (
            <a href={githubLink}>
              {' '}
              <AiOutlineGithub />
            </a>
          )}
        </span>
      </p>
      <p className={classes.description}>
        {description}
        {noticeMe && <span className={classes.noticeMe}> ({noticeMe})</span>}
      </p>
    </div>
  );
};

export default injectSheet(styles)(ProjectBox);
