import React, { useState, useContext, useEffect } from 'react';
import pink from '@material-ui/core/colors/indigo';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { AuthenticatedContext } from './context/AuthProvider';
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '70%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  title: {
    width: '70%',
    backgroundColor: pink['A700'],
    color: 'white',
  },
  errorMsg: {
    display: 'flex',
    justifyContent: 'center',
    color: 'red',
    fontWeight: 900,
  },
}));

export default function LoginPage() {
  const classes = useStyles();
  let history = useHistory();
  let location = useLocation();
  const authContext = useContext(AuthenticatedContext);

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [isInvalid, setIsInvalid] = useState(false);

  let { from } = location.state || { from: { pathname: '/home' } };
  const login = (event, user, pass) => {
    event.preventDefault();

    authContext.authenticate(user, pass)
      ? history.push(from)
      : setIsInvalid(true);
  };
  useEffect(() => {
    document.title = 'Login';
  }, []);

  return (
    <>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component='h1' variant='h5' className={classes.title}>
            ABC Bank
          </Typography>
          <form className={classes.form}>
            <TextField
              // variant="outlined"
              margin='normal'
              required
              fullWidth
              id='userName'
              label='User Name'
              name='userName'
              autoComplete='userName'
              autoFocus
              inputProps={{ maxLength: 30 }}
              onChange={event => setUserName(event.target.value)}
            />
            <TextField
              // variant="outlined"
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              inputProps={{ maxLength: 30 }}
              onChange={event => setPassword(event.target.value)}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='secondary'
              // color="primary"
              className={classes.submit}
              onClick={event => login(event, userName, password)}
            >
              Login
            </Button>
            <div id={'error'} className={classes.errorMsg}>
              {isInvalid && <> INVALID CREDENTIALS </>}
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}
