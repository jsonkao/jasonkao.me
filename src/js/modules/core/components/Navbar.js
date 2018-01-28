import React from "react";
import { withRouter, Link } from "react-router-dom";
import injectSheet from "react-jss";

const styles = {
  Navbar: {
    float: "right",
    fontSize: "22px",
    marginRight: "7.5vw",
    marginTop: "17px",
    "& a": {
      color: "#777",
      display: "inline-block",
      lineHeight: 1.1,
      marginRight: "4px",
      textDecoration: "none",
      "&:hover, &:active, &:focus": {
        borderBottom: "1px solid #ddd",
      },
    },
  },
  highlightedLink: {
    color: "#000 !important",
    borderBottom: "1px solid #ddd",
  },
  "@media (max-width: 767px)": {
    Navbar: {
      float: "none",
      fontSize: "4vw",
      marginRight: 0,
      textAlign: "center",
    },
  },
};

const Navbar = ({ classes, location }) => {
  const links = [
    { label: "About", to: "/" },
    { label: "GitHub", to: "https://github.com/jkao1" },
    { label: "Resume", to: "https://jasonkao.me/Resume.pdf" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <div className={classes.Navbar}>
      {links.map(link => {
        const highlighterProps =
          link.to == location.pathname
            ? { className: classes.highlightedLink }
            : {};
        if (link.to.includes("http")) {
          return (
            <a key={link.to} href={link.to} {...highlighterProps}>
              {link.label}.
            </a>
          );
        }
        return (
          <Link key={link.to} to={link.to} {...highlighterProps}>
            {link.label}.
          </Link>
        );
      })}
    </div>
  );
};

export default withRouter(injectSheet(styles)(Navbar));
