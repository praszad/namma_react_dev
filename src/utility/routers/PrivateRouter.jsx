import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Authorization from '../Auth';

export default function PrivateRouter({ Component, ...rest }) {
  if (!Authorization.isLogin()) {
    return <Redirect to='/login' />;
  }
  return <Route {...rest} render={props => <Component {...props} />} />;
}
