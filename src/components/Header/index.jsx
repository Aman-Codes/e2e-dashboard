import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ProfileDropdown from './ProfileDropDown';
import ProjectDropdown from './ProjectDropDown';
import useStyles from './styles';

const Header = () => {
  const classes = useStyles();
  return (
    <div data-cy="headerComponent">
      <AppBar className={classes.appBar}>
        <Toolbar disableGutters className={classes.toolBar}>
          <Link
            to={{
              pathname: '/home',
            }}
            className={classes.homeLink}
          >
            <Typography className={classes.chaosText} variant="body1">
              E2E Dashboard
            </Typography>
          </Link>
          <div className={classes.details}>
            <ProjectDropdown />
            <ProfileDropdown />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
