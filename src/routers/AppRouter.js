import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import React from 'react';
import { AuthenticatedProvider } from '../context/AuthProvider';
import ProtectedRoute from './ProtectedRoute';
import LoginPage from '../LoginPage';
import HomePage from '../components/home/HomePage';
import KycPage from '../components/kyc/KYCPage';
import ProfilePage from '../components/profile/ProfilePage';
import { DataProvider } from '../context/DataProvider';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <AuthenticatedProvider>
          <DataProvider>
            <Redirect exact from='/' to='/login' />
            <Route exact path='/login'>
              <LoginPage />
            </Route>
            <ProtectedRoute exact path='/home'>
              <HomePage />
            </ProtectedRoute>
            <ProtectedRoute exact path='/profile'>
              <ProfilePage />
            </ProtectedRoute>
            <ProtectedRoute exact path='/KYCInformation'>
              <KycPage />
            </ProtectedRoute>
          </DataProvider>
        </AuthenticatedProvider>
      </Switch>
    </Router>
  );
}
