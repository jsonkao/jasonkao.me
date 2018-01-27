import React, { PureComponent } from "react";
import injectSheet from "react-jss";
import { Row, Col } from "react-grid-system";

import SelectedProjects from "./SelectedProjects";

const styles = {
  MainApp: {
    fontSize: "36px",
    paddingTop: "270px",
    lineHeight: "42px",
  },
  textContent: {
    marginBottom: "30px",
    "& p": {
      marginBottom: "24px",
    },
  },
  subText: {
    color: "#888",
    marginBottom: "24px",
  },
};

const roles = [
  "software engineer",
  "React nerd",
  "enterpreneur",
  "illustrator",
  "data scientist",
  "designer",
  "hackathon hacker",
];

class MainApp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      roleIndex: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.updateRoleIndex, 300);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateRoleIndex = () => {
    this.setState({ roleIndex: (this.state.roleIndex + 1) % roles.length });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.MainApp}>
        <Row>
          <Col
            xs={12}
            sm={8}
            md={6}
            lg={6}
            offset={{ sm: 1, md: 1, lg: 1 }}
            className={classes.textContent}
          >
            <p>Jason Kao&mdash;I am a {roles[this.state.roleIndex]}.</p>
            <p>
              I am fascinated by the ability of technology to scale human
              impact, and I am constantly looking for new projects to absorb
              myself in.
            </p>
          </Col>
        </Row>
        <SelectedProjects />
        <Row>
          <Col
            xs={12}
            sm={8}
            md={6}
            lg={6}
            offset={{ sm: 1, md: 1, lg: 1 }}
            className={classes.textContent}
          >
            <p>Buzzwords&mdash;</p>
            <p className={classes.subText}>JavaScript (ES7), Python, Java, Ruby, C++, C, C#, SQL, Lisp</p>
            <p className={classes.subText}>React / Redux / Apollo, Rails, GraphQL, Docker, Git, Node, Heroku, AWS, GCP, Digital Ocean, Nginx</p>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            sm={8}
            md={6}
            lg={6}
            offset={{ sm: 1, md: 1, lg: 1 }}
            className={classes.textContent}
          >
            <p>Contact&mdash;</p>
            <p className={classes.subText}>jasonkao85@gmail.com<br/>+1 347 933 1820</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default injectSheet(styles)(MainApp);
