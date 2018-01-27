import React from "react";
import injectSheet from "react-jss";

import Navbar from "./Navbar";

const styles = {};

const FixedNavbar = ({ classes }) => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default injectSheet(styles)(FixedNavbar);
