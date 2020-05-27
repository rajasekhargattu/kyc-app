import React,{useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ProfileForm from './ProfileForm';
import SidePanPage from '../common/SidePanPage';
import NavBar from '../common/NavBar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: '#fafafa',
    marginTop: theme.spacing(8),
  },
  SidePanPagePaper: {
    [theme.breakpoints.down('sm')]: {
      height: '40vh',
      width: '55%',
      margin: '8px auto',
    },
    [theme.breakpoints.up('md')]: {
      height: '110vh',
      width: '70%',
      margin: theme.spacing(2, 2),
    },
    [theme.breakpoints.up('lg')]: {
      height: '100vh',
      width: '95%',
      margin: theme.spacing(2),
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    [theme.breakpoints.down('sm')]: {
      height: '110vh',
      width: '55%',
      margin: '8px auto',
    },
    [theme.breakpoints.up('md')]: {
      height: '110vh',
      width: '70%',
      margin: theme.spacing(2, -2),
    },
    [theme.breakpoints.up('lg')]: {
      height: '100vh',
      width: '95%',
      margin: theme.spacing(2),
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function ProfilePage() {
  const classes = useStyles();
  useEffect(() => {
    document.title = 'Profile';
  }, []);
  return (
    <>
      <NavBar />
      <Grid className={classes.root} container>
        <Grid item xs={12} md={3}>
          <Paper className={classes.SidePanPagePaper}>
            <SidePanPage />
          </Paper>
        </Grid>
        <Grid item xs={12} md={9}>
          <Paper className={classes.paper}>
            <ProfileForm />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
export default React.memo(ProfilePage);
