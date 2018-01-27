import React from "react";
import { withRouter, Link } from "react-router-dom";
import injectSheet from "react-jss";

const styles = {};

const Navbar = ({ classes, location }) => {
  const links = [
    { label: "About", to: "/", },
    { label: "GitHub", to: "https://github.com/jkao1", },
    { label: "Resume", to: "/", },
    { label: "Contact", to: "/", },
  ];

  return (
    <div className={classes.Navbar}>
    {links.map(link => {
      const highlighterProps = {
        ...( link.to === location.pathname && { className: classes.highlightedLink } )
      }
      if (link.to.includes("http")) {
        return <a href={link.to} { ...highlighterProps }>{link.label}.</a>;
      }
      return <Link to={link.to} {...highlighterProps }>{link.label}.</Link>;
    })}
    </div>
  );
};

export default withRouter(injectSheet(styles)(Navbar));
