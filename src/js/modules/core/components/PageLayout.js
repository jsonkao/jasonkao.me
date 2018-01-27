import React, { PureComponent } from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import { Container } from "react-grid-system";

import { FixedNavbar, Navbar, CelestialCircle } from "./";

const styles = {
  content: {},
};

class PageLayout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFixedNavVisible: false,
      isContentVisible: true,
    };
  }

  showContent = () => {
    this.setState({ isContentVisible: true });
  };

  hideContent = () => {
    this.setState({ isContentVisible: false });
  };

  render() {
    const { classes, children } = this.props;
    const { isFixedNavVisible, isContentVisible } = this.state;

    return (
      <Container fluid>
        {isFixedNavVisible ? <FixedNavbar /> : <Navbar />}
        <CelestialCircle
          hideContent={this.hideContent}
          showContent={this.showContent}
        />
        <div
          className={classes.content}
          style={{ visibility: isContentVisible ? "visible" : "hidden" }}
        >
          {children}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(injectSheet(styles)(PageLayout));
