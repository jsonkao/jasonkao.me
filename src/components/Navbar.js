import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Navbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    fontSize: '22px',
    marginTop: '20px',
    '& a': {
      color: '#777',
      display: 'inline-block',
      lineHeight: 1.1,
      marginRight: '4px',
      textDecoration: 'none',
      '&:hover, &:active': {
        borderBottom: '1px solid #ddd',
        cursor: 'pointer',
      },
      '& > span': {
        '&:hover': {
          color: '#000 !important',
        },
      },
    },
  },
  innerContainer: {
    paddingRight: '7.5vw',
  },
  highlightedLink: {
    color: '#000 !important',
    borderBottom: '1px solid #ddd',
  },
  '@media (max-width: 767px)': {
    Navbar: {
      float: 'none',
      fontSize: '4vw',
      marginRight: 0,
      textAlign: 'center',
    },
  },
};

const Navbar = ({ classes }) => {
  const links = [{ text: 'GitHub', href: 'https://github.com/jsonkao' }];

  return (
    <div className={classes.Navbar}>
      <div className={classes.innerContainer}>
        {links.map(({ text, href }) => (
          <a key={href} href={href} target="_blank">
            <span>{text}.</span>
          </a>
        ))}
        <a
          key="scroll-link"
          onClick={() =>
            document
              .getElementById('contactme-scroll-target')
              .scrollIntoView({ behavior: 'smooth' })
          }
        >
          <span>Contact.</span>
        </a>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Navbar);
