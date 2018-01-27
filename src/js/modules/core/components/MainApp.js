import React from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";

import { refreshWindowDimensions } from "../actions";

const styles = {};

const MainApp = ({ classes }) => {
  return null;
};

const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps)(injectSheet(styles)(MainApp));
