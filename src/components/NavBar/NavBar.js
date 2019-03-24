// import React, { Component } from 'react';
// import './NavBar.css';
// import { withStyles } from '@material-ui/core/styles';

// const styles = theme => ({
//   root: {
//       width: '100%',
//       // maxWidth: 360,
//       backgroundColor: theme.palette.background.paper,
//   },
// });

// class NavBar extends Component {
//   render() {
//     return (
//       <div className="NavBar">
//           <ul>
//             <li><a href="#home">Home</a></li>
//             <li><a href="#news">Historia</a></li>
//             <li><a className="li-right" href="#about">Wyjście</a></li>
//           </ul>
//       </div>
//     );
//   }
// }

// export default withStyles(styles)(NavBar);
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import HistoryIcon from '@material-ui/icons/History';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from "react-router-dom";


const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Button className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <HomeIcon />
              {/* Nowy */}
            </Button>
          </Link>

          <Link to="/history">
            <Button className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <HistoryIcon />
              {/* Historia */}
            </Button>
          </Link>
          <Link to="/editor">
            <Button className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <HistoryIcon />
              {/* Historia */}
            </Button>
          </Link>
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            Strzelnica
          </Typography>
          <div className={classes.grow} />
          {/* <div className={classes.search}> */}
          <Button className={classes.menuButton} color="inherit" aria-label="Open drawer">
            <ExitToAppIcon />
            {/* Wyjście */}
          </Button>
          {/* <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            /> */}
          {/* </div> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
