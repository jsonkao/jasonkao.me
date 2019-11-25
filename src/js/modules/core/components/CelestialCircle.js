import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';

const styles = {
  CelestialCircle: {
    background: '#fff000',
    borderRadius: '6vw',
    height: '38px',
    left: '30vw',
    position: 'absolute',
    top: '15vh',
    width: '38px',
    zIndex: 50,
  },
  explainer: {
    fontSize: '14px',
    left: '4vw',
    letterSpacing: '0.13em',
    lineHeight: '1.8em',
    position: 'absolute',
    textTransform: 'uppercase',
    top: '50%',
    transform: 'translateY(-50%)',
    whiteSpace: 'nowrap',
  },
};

class CelestialCircle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isCaptionVisible: false,
    };
  }

  handleMouseEnter = () => {
    this.props.hideContent();
    this.setState({ isCaptionVisible: true });
  };

  handleMouseLeave = () => {
    this.props.showContent();
    this.setState({ isCaptionVisible: false });
  };

  render() {
    const { classes } = this.props;
    const celestialObject =
      Math.abs(new Date().getHours() - 12) < 6 ? 'sun' : 'moon';

    return (
      <div
        className={classes.CelestialCircle}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.state.isCaptionVisible && (
          <div className={classes.explainer}>
            {celestialObject}
          </div>
        )}
      </div>
    );
  }
}

export default injectSheet(styles)(CelestialCircle);
