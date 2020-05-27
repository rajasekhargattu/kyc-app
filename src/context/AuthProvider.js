import React from 'react';
import { useHistory } from 'react-router-dom';

const AuthenticatedContext = React.createContext();
let isAuthenticated = false;
let userName = '';

function authenticate(user, pass) {
  userName = user;
  isAuthenticated =
    user === process.env.REACT_APP_USER &&
    pass === process.env.REACT_APP_PASSWORD
      ? true
      : false;
  return isAuthenticated;
}

const AuthenticatedProvider = props => {
  let history = useHistory();
  function signout() {
    isAuthenticated = false;
    history.push('/login');
  }
  return (
    <AuthenticatedContext.Provider
      value={{ authenticate, isAuthenticated, signout, userName }}
    >
      {props.children}
    </AuthenticatedContext.Provider>
  );
};

export { AuthenticatedContext, AuthenticatedProvider };
