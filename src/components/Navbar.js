import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Navbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: '20px',

    '& button': {
      border: 'none',
      background: 'none',
      padding: 0,
    },

    '& a, button': {
      display: 'inline-block',
      marginRight: '4px',
      textDecoration: 'none',
      '&:hover, &:active': {
        borderBottom: '1px solid #ddd',
        cursor: 'pointer',
      },
      '& > span': {
        lineHeight: 1.1,
        fontSize: '22px',
        color: '#777',
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
          <a key={href} href={href}>
            <span>{text}.</span>
          </a>
        ))}
        <button
          key="scroll-link"
          onClick={() =>
            document
              .getElementById('contactme-scroll-target')
              .scrollIntoView({ behavior: 'smooth' })
          }
        >
          <span>Contact.</span>
        </button>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Navbar);
