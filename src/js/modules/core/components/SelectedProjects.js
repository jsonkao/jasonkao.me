import React, { PureComponent } from "react";
import injectSheet from "react-jss";
import { Link } from "react-router-dom";
import { Row, Col, Hidden } from "react-grid-system";

import ProjectListItem from "./ProjectListItem";

const projects = [
  {
    title: "Gerry",
    imgPath: "/img/gerry.png",
    url: "https://gerryapp.com",
  },
  {
    title: "The Spectator",
    imgPath: "/img/spectator.jpg",
    url: "https://stuyspec.com/",
  },
  {
    title: "Alfred Prufrock Editor",
    imgPath: "/img/alfred.gif",
    url: "https://github.com/jkao1/alfred-prufrock-editor",
  },
  {
    title: "Fashion Tree",
    imgPath: "/img/fashion-tree.png",
    url: "https://github.com/NicholasLYang/fashion-tree",
  },
  {
    title: "Citi Dots",
    imgPath: "/img/citidots.gif",
    url: "https://github.com/ashneeldas2/citidots",
  },
];

const styles = {
  SelectedProjects: {
    fontSize: "36px",
    lineHeight: "45px",
    marginBottom: "54px",
  },
  listHeader: {
    marginBottom: "18px",
  },
  projectsList: {
    listStyle: "none",
    padding: 0,
  },
  projectDemo: {
    overflow: "visible !important",
    "& img": {
      width: "100%",
      position: "absolute",
    },
  },
};

class SelectedProjects extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { displayedProject: null };
  }

  hideProject = () => this.setState({ displayedProject: null });

  showProject = project => this.setState({ displayedProject: project });

  render() {
    const { classes } = this.props;
    const { displayedProject } = this.state;
    return (
      <Row className={classes.SelectedProjects}>
        <Col
          xs={12}
          sm={6}
          md={6}
          lg={6}
          offset={{ sm: 1, md: 1, lg: 1 }}
          className={classes.intro}
        >
          <p className={classes.listHeader}>Selected projects&mdash;</p>
          <ul className={classes.projectsList} onMouseLeave={this.hideProject}>
            {projects.map(project => (
              <ProjectListItem
                key={project.url}
                showProject={this.showProject}
                project={project}
              />
            ))}
          </ul>
        </Col>
        <Col sm={5} md={5} lg={5} className={classes.projectDemo}>
          <Hidden xs>
            {projects.map(project => (
              <img
                key={project.url}
                src={project.imgPath}
                style={{ visibility: displayedProject === project ? "visible" : "hidden" }}
              />
            ))}
          </Hidden>
        </Col>
      </Row>
    );
  }
}


export default injectSheet(styles)(SelectedProjects);
