import React, { PureComponent } from "react";
import injectSheet from "react-jss";
import { Row, Col } from "react-grid-system";

const styles = {
  ProjectListItem: {
    clear: "both",
    verticalAlign: "baseline",
    "& a": {
      color: "#888",
      textDecoration: "none",
      width: "55%",
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
  demo: {
    display: "inline"<
    width: "45%",
  }
};

class ProjectListItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isDemoVisible: true,
    };
  }

  showProject = () => this.setState({ isDemoVisible: true });

  hideProject = () => this.setState({ isDemoVisible: false });

  render() {
    const { classes, project } = this.props;
    const { isDemoVisible } = this.state;
    return (
      <li className={classes.ProjectListItem} onMouseEnter={this.showProject} onMouseLeave={this.hideProject}>
        <a href={project.url} target="_blank">
          <div className={classes.title}>{project.title}</div>
          <div className={classes.arrow}>↗</div>
        </a>
        <img src={project.imgPath} className={classes.demo} style={{ display: isDemoVisible ? "block" : "none" }}/>
      </li>
    );
  }
}

export default injectSheet(styles)(ProjectListItem);
