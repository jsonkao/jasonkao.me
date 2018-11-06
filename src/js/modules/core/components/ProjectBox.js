import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';

const styles = {
  ProjectBox: {
    marginBottom: '2rem',
  },
  imgContainer: {
    height: '100%',
    marginBottom: '15px',
  },
  img: {
    width: '100%',
    objectFit: 'cover',
    height: '100%',
    width: '100%',
    border: '1px solid black',
    maxHeight: '400px',
  },
  blue: { color: '#0041FF' },
  red: { color: '#D91F25' },
  cherry: { color: '#A32251' },
  indigo: { color: '#1A1A57' },
  gold: { color: '#EBAB3D' },
  green: { color: '#004F50' },
};

const ProjectBox = ({ classes, index, project: { imgPath, url, description, title } }) => {
  const { blue, red, cherry, indigo, gold, green } = classes;
  const colors = [ blue, red, cherry, indigo, gold, green ];
  return (
    <div className={classes.ProjectBox}>
      {imgPath ? (
        <div className={classes.imgContainer}>
          <img className={classes.img} src={imgPath} />
        </div>
      ) : (
        <p className={classes.description}>{description}</p>
      )}
      <p className={colors[index]}>{title}</p>
    </div>
  );
};

export default injectSheet(styles)(ProjectBox);
