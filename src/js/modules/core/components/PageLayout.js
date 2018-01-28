import React, { PureComponent } from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import Waypoint from "react-waypoint";

import { FixedNavbar, Navbar, CelestialCircle } from "./";

const styles = {
  waypointContainer: {
    position: "relative",
    top: "90px",
  },
};

class PageLayout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFixedNavVisible: false,
      isContentVisible: true,
    };
  }

  fixNavbar = () => this.setState({ isFixedNavVisible: true });

  unfixNavbar = () => this.setState({ isFixedNavVisible: false });

  showContent = () => this.setState({ isContentVisible: true });

  hideContent = () => this.setState({ isContentVisible: false });

  render() {
    const { classes, children } = this.props;
    const { isFixedNavVisible, isContentVisible } = this.state;

    return (
      <div>
        {isFixedNavVisible ? <FixedNavbar /> : <Navbar />}
        <CelestialCircle
          hideContent={this.hideContent}
          showContent={this.showContent}
        />
        <div className={classes.waypointContainer}>
        {/* Uncommenting this waypoint will drop in a FixedNavbar after scrolling down a bit.
          * <Waypoint onEnter={this.unfixNavbar} onLeave={this.fixNavbar} /> 
          */}
        </div>
        <div style={{ visibility: isContentVisible ? "visible" : "hidden" }}>
          {children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(injectSheet(styles)(PageLayout));
