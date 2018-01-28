import React, { PureComponent } from "react";
import injectSheet from "react-jss";

import SelectedProjects from "./SelectedProjects";

const styles = {
  MainApp: {
    padding: "7.5vw",
    paddingTop: "270px",
  },
  contentSection: {
    marginBottom: "5vw",
    width: "55%",
    "& p + p": {
      marginTop: "0.725em",
    },
  },
  subText: {
    color: "#888",
  },
  "@media (max-width: 767px)": {
    MainApp: {
      padding: "7.5vw 5vw",
      paddingTop: "270px",
    },
    contentSection: {
      width: "auto",
    },
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
        <div className={classes.contentSection}>        
          <p>Jason Kao&mdash;I am a {roles[this.state.roleIndex]}.</p>
          <p>
            I am fascinated by the ability of technology to scale human
            impact, and I am constantly looking for new projects to absorb
            myself in.
          </p>
        </div>
        <SelectedProjects />
        <div className={classes.contentSection}>
          <p>Buzzwords&mdash;</p>
          <p className={classes.subText}>JavaScript (ES7), Python, Java, Ruby, C++, C, C#, SQL, Lisp</p>
          <p className={classes.subText}>React / Redux / Apollo, Rails, GraphQL, Docker, Git, Node, Heroku, AWS, GCP, Digital Ocean, Nginx</p>
        </div>
        <div className={classes.contentSection}>
          <p>Contact&mdash;</p>
          <p className={classes.subText}>jasonkao85@gmail.com<br/>+1 347 933 1820</p>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(MainApp);
