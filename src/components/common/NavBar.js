import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { AuthenticatedContext } from '../../context/AuthProvider';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
  welcome: {
    flexGrow: 0,
  },
  routerLinks: {
    display: 'flex',
    width: '45%',
    cursor: 'pointer',
  },
  homePadding: {
    paddingRight: '15px',
  },
}));

function NavBar() {
  const classes = useStyles();
  const authContext = useContext(AuthenticatedContext);
  let history = useHistory();
  return (
    <AppBar position='absolute'>
      <Toolbar>
        <div className={classes.routerLinks}>
          <Typography
            component='h1'
            variant='h6'
            color='inherit'
            noWrap
            onClick={() => history.push('/home')}
            className={clsx(classes.routeLinks, classes.homePadding)}
          >
            Home
          </Typography>
          <Typography
            component='h1'
            variant='h6'
            color='inherit'
            noWrap
            className={classes.routeLinks}
            onClick={authContext.signout}
          >
            Logout
          </Typography>
        </div>
        <Typography
          component='h1'
          variant='h6'
          color='inherit'
          noWrap
          className={classes.title}
        >
          ABC Bank
        </Typography>
        <Typography
          component='h1'
          id={'welcomeMsg'}
          variant='h6'
          color='inherit'
          noWrap
          className={classes.welcome}
        >
          {`Welcome ${authContext.userName} `}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
