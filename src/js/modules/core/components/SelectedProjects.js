import React, { PureComponent } from "react";
import injectSheet from "react-jss";
import { Link } from "react-router-dom";

import ProjectListItem from "./ProjectListItem";

const projects = [
  {
    title: "Free Code Camp [beta]",
    imgPath: "/img/freecodecamp.gif",
    url: "https://github.com/freeCodeCamp/freeCodeCamp",
    // TODO: Once I have at least 5 PR's, link
    // https://github.com/freeCodeCamp/freeCodeCamp/pulls/jkao1
  },
  {
    title: "Gerry",
    imgPath: "/img/gerry.gif",
    url: "https://gerryapp.com",
  },
  {
    title: "The Spectator",
    imgPath: "/img/spectator.png",
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
  {
    title: "Story Pop",
    imgPath: "/img/story-pop.gif",
    url: "https://github.com/jkao1/story-pop-client",
  },
];

const styles = {
  SelectedProjects: {
    marginBottom: "5vw",
  },
  listHeader: {
    marginBottom: "0.725em",
  },
  projectSelection: {
    display: "flex",
    justifyContent: "space-between",
  },
  projectsList: {
    flexBasis: "50%",
    listStyle: "none",
    padding: 0,
    "& li:last-child": {
      clear: "both",
      color: "#000",
      display: "block",
      verticalAlign: "baseline",
      "& a": {
        textDecoration: "none",
        "& span": {
          color: "#000",
          display: "none",
        },
        "&:hover span": {
          display: "inline",
        },
      },
    },
  },
  projectDemo: {
    flexBasis: "45%",
    marginTop: "-1.975em",
    "& img": {
      border: "1px solid #000",
      position: "absolute",
      width: "45%",
    },
  },
  "@media (max-width: 767px)": {
    projectSelection: {
      display: "block",
    },
    projectDemo: {
      display: "none",
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
        <div className={classes.projectSelection}>
          <ul className={classes.projectsList} onMouseLeave={this.hideProject}>
            {projects.map(project => (
              <ProjectListItem
                key={project.url}
                showProject={this.showProject}
                project={project}
              />
            ))}
            <li>
              <a
                className={classes.rawLink}
                href="https://github.com/jkao1"
                target="_blank"
              >
                ... <span>(github)</span>
              </a>
            </li>
          </ul>
          <div className={classes.projectDemo}>
            {projects.map(project => (
              <img
                key={project.url}
                src={project.imgPath}
                style={{
                  visibility:
                    displayedProject === project ? "visible" : "hidden",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(SelectedProjects);
