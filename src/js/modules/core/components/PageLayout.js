import React, { PureComponent } from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-bootstrap/lib";

import { FixedNavbar, Navbar, CelestialCircle } from "./";

const styles = {
  content: {
  },
};

class PageLayout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFixedNavVisible: false,
      isContentVisible: false,
    };
  }

  showContent = () => {
    this.setState({ isContentVisible: true });
  }

  hideContent = () => {
    this.setState({ isContentVisible: false });
  }

  render() {
    const { classes, children } = this.props;
    const { isFixedNavVisible, isContentVisible } = this.state;

    return (
      <Grid fluid>
        {isFixedNavVisible ? <FixedNavbar /> : <Navbar />}
        <CelestialCircle hideContent={this.hideContent} showContent={this.showContent} />
        <div className={classes.content} style={{ visibility: isContentVisible }}>
          {children}
        </div>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps)(injectSheet(styles)(PageLayout));
