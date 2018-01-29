import React, { PureComponent } from "react";
import injectSheet from "react-jss";

const styles = {
  ProjectListItem: {
    clear: "both",
    display: "block",
    "& a": {
      color: "#777",
      display: "block",
      height: "100%",
      textDecoration: "none",
      width: "100%",
      "&:hover": {
        color: "#000",
      },
      "&:before": {
        content: '" "',
        display: "table",
      },
      "&:after": {
        clear: "both",
        content: '" "',
        display: "table",
      },
    },
    "&:before": {
      content: '" "',
      display: "table",
    },
    "&:after": {
      clear: "both",
      content: '" "',
      display: "table",
    },
    "&:hover": {
      cursor: "pointer",
      "& a": {
        color: "#000",
      },
    },
  },
  title: {
    float: "left",
  },
  arrow: {
    float: "right",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif",
  },
};

const ProjectListItem = ({ classes, project, showProject }) => {
  return (
    <li
      className={classes.ProjectListItem}
      onMouseEnter={() => showProject(project)}
    >
      <a href={project.url} target="_blank">
        <div className={classes.title}>{project.title}</div>
        <div className={classes.arrow}>↗</div>
      </a>
    </li>
  );
};

export default injectSheet(styles)(ProjectListItem);
