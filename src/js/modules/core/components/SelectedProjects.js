import React, { PureComponent } from "react";
import injectSheet from "react-jss";
import { Link } from "react-router-dom";

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
    marginBottom: "5vw",
  },
  listHeader: {
    marginBottom: "0.725em",
  },
  projectsList: {
    listStyle: "none",
    padding: 0,
    "& li:last-child": {      
      clear: "both",
      color: "#000",
      display: "block",
      verticalAlign: "baseline",
      "& a": {
        display: "block",
        textDecoration: "none",
      },
    }
  },
  projectDemo: {
    float: "left",
    width: "45%",
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
      <div className={classes.SelectedProjects}>
        <p className={classes.listHeader}>Selected projects&mdash;</p>
        <div>
          <ul className={classes.projectsList} onMouseLeave={this.hideProject}>
            {projects.map(project => (
              <ProjectListItem
                key={project.url}
                showProject={this.showProject}
                project={project}
              />
            ))}
            <li>
              <a href="https://github.com/jkao1" target="_blank">...</a>
            </li>
          </ul>
          <div className={classes.projectDemo}>
            {projects.map(project => (
              <img
                key={project.url}
                src={project.imgPath}
                style={{ visibility: displayedProject === project ? "visible" : "hidden" }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}


export default injectSheet(styles)(SelectedProjects);
