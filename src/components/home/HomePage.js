import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SerachBox from './SerachBox';
import ProfileKYCDataTable from './ProfileKYCDataTable';
import NavBar from '../common/NavBar';

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
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  homePadding: {
    paddingRight: '15px',
  },
  girdItems: {
    display: 'inline-flex',
    justifyContent: 'flex-end',
    width: '100%',
    marginLeft: theme.spacing(33),
  },
}));

export default function HomePage() {
  const classes = useStyles();

  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <SerachBox />
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <ProfileKYCDataTable />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
