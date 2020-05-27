import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import {
  AuthenticatedContext,
  AuthenticatedProvider,
} from '../context/AuthProvider';

export default function ProtectedRoute({ children, ...rest }) {
  const authContext = useContext(AuthenticatedContext);
  return (
    <AuthenticatedProvider>
      <Route
        {...rest}
        render={({ location }) =>
          authContext.isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          )
        }
      />
    </AuthenticatedProvider>
  );
}
