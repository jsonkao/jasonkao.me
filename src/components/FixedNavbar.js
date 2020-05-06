import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';

import Navbar from './Navbar';

const styles = {
  FixedNavbar: {
    position: 'fixed',
    transition: 'transform 300ms',
    width: '100%',
    zIndex: 100,
  },
};

class FixedNavbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        transform: 'translateY(-100%)',
      },
    };
  }

  componentDidMount() {
    this.setState({
      style: {
        transform: 'translateY(0%)',
      },
    });
  }

  componentWillUnmount() {
    this.setState({
      style: {
        transform: 'translateY(-100%)',
      },
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.FixedNavbar} {...this.state}>
        <Navbar />
      </div>
    );
  }
}

export default injectSheet(styles)(FixedNavbar);
