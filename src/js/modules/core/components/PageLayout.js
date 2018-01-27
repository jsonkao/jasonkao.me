import React, { PureComponent } from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-bootstrap/lib";

import { FixedNavbar, Navbar } from "./";

const styles = {};

class PageLayout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFixedNavVisible: false,
    };
  }

  render() {
    const { classes, children } = this.props;
    const { isFixedNavVisible } = this.state;

    return (
      <Grid fluid>
        {isFixedNavVisible ? <FixedNavbar /> : <Navbar />}
        <div className={classes.content}>
          {children}
        </div>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps)(injectSheet(styles)(PageLayout));
