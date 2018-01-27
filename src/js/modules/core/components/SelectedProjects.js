import React, { PureComponent } from "react";
import injectSheet from "react-jss";
import { Link } from "react-router-dom";
import { Row, Col } from "react-grid-system";

import ProjectListItem from "./ProjectListItem";

const projects = [
  {
    title: "Gerry",
    imgPath: "/img/gerry.jpg",
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
};

const SelectedProjects = ({ classes }) => {
  return (
    <Row className={classes.SelectedProjects}>
      <Col
        offset={{ sm: 1, md: 1, lg: 1 }}
        className={classes.intro}
      >
        <p className={classes.listHeader}>Selected projects&mdash;</p>
        <ul className={classes.projectsList}>
          {projects.map(project => (
            <ProjectListItem
              key={project.url}
              project={project}
            />
          ))}
        </ul>
      </Col>
    </Row>
  );
};

export default injectSheet(styles)(SelectedProjects);
