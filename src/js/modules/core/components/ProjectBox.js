import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';

const styles = {
  ProjectBox: {
    marginBottom: '1em',
  },
  imgContainer: {
    // maxHeight: '40vw', // TODO: MAKE IT TWO COLUMNS NOT ROWS
    height: '40vw',
    marginBottom: '0.5em',
  },
  img: {
    width: '100%',
    objectFit: 'contain',
    height: '100%',
    width: '100%',
    border: '1px solid black',
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

  '@media (max-width: 767px)': {
    imgContainer: {
      height: '85vw',
    },
  },
};

const ProjectBox = ({
  classes,
  index,
  project: { imgPath, url, description, title },
}) => {
  const { blue, red, cherry, indigo, gold, green } = classes;
  const colors = [blue, red, cherry, indigo, gold, green];
  return (
    <div className={classes.ProjectBox}>
      {imgPath ? (
        <div className={classes.imgContainer}>
          <img className={classes.img} src={imgPath} />
        </div>
      ) : (
        <p className={classes.description}>{description}</p>
      )}
      <p className={colors[index % colors.length]}>{title}</p>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default injectSheet(styles)(ProjectBox);
