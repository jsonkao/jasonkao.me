import React, { PureComponent } from "react";
import injectSheet from "react-jss";
import { Row, Col } from "react-grid-system";

const styles = {
  ProjectListItem: {
    clear: "both",
    verticalAlign: "baseline",
    "& a": {
      color: "#888",
      display: "block",
      height: "45px",
      textDecoration: "none",
      "&:hover": {
        color: "#000",
      },
    },
  },
  title: {
    float: "left",
  },
  arrow: {
    float: "right",
    fontFamily: "-apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif",
  },
};

const ProjectListItem = ({ classes, project, showProject }) => {
  return (
    <li className={classes.ProjectListItem} onMouseEnter={() => showProject(project)}>
      <a href={project.url} target="_blank">
        <div className={classes.title}>{project.title}</div>
        <div className={classes.arrow}>↗</div>
      </a>
    </li>
  );
};

export default injectSheet(styles)(ProjectListItem);
